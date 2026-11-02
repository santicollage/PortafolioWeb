import { useEffect, useMemo, useRef, useState } from 'react';
import { ShaderMount } from '@paper-design/shaders-react';
import {
  grainGradientFragmentShader,
  GrainGradientShapes,
  ShaderFitOptions,
  defaultObjectSizing,
  getShaderColorFromString,
  getShaderNoiseTexture,
} from '@paper-design/shaders';

// La forma "blob" de Paper Shaders (v0.0.80) llama a clamp(0., 1., x) con los
// argumentos invertidos. En GLSL eso es comportamiento indefinido: en algunas
// GPUs la figura no se dibuja. Se corrige aquí, sobre el shader original.
const fragmentShader = grainGradientFragmentShader.replace(
  /clamp\(0\., 1\., length\(([^)]*)\)\)/g,
  'clamp(length($1), 0., 1.)',
);

// Colores de la marca, de oscuro a claro: los tonos oscuros quedan en el
// borde de la figura, que es la parte que se acerca al texto.
const COLORS = ['#1c0e3f', '#361879', '#5919c2', '#a34a80', '#f68237'];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = () => setMatches(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

export function HeroFluid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  // Pausa la animación cuando el hero sale de pantalla para no gastar batería.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const uniforms = useMemo(
    () => ({
      u_colorBack: getShaderColorFromString('#0f0f0f'),
      u_colors: COLORS.map(getShaderColorFromString),
      u_colorsCount: COLORS.length,
      u_softness: 1,
      u_intensity: 0.4,
      u_noise: 0.3,
      u_shape: GrainGradientShapes.blob,
      u_noiseTexture: getShaderNoiseTexture(),
      u_fit: ShaderFitOptions.cover,
      // Escritorio: la figura envuelve la foto y se extiende hacia el texto.
      // Móvil: queda arriba, detrás de la foto.
      u_scale: isDesktop ? 0.85 : 0.75,
      u_rotation: 0,
      u_offsetX: isDesktop ? 0.17 : 0,
      u_offsetY: isDesktop ? 0 : -0.3,
      u_originX: defaultObjectSizing.originX,
      u_originY: defaultObjectSizing.originY,
      u_worldWidth: defaultObjectSizing.worldWidth,
      u_worldHeight: defaultObjectSizing.worldHeight,
    }),
    [isDesktop],
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <ShaderMount
        style={{ width: '100%', height: '100%' }}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        speed={reducedMotion || !visible ? 0 : 0.3}
        frame={6000}
        minPixelRatio={1}
        maxPixelCount={1920 * 1080}
      />
      <div className="hero-fluid__fade" />
    </div>
  );
}
