import { type ReactNode, type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  as: Tag = 'button',
  href,
  target,
  rel,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0F0F0F] focus:ring-[#5919C2] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const variants = {
    primary: 'bg-[#5919C2] hover:bg-[#6E2AAF] text-white',
    gradient: 'gradient-bg text-white hover:opacity-90',
    outline: 'border border-[#3A3A3A] text-white hover:bg-[#2C2C2C] hover:border-[#5919C2]',
    ghost: 'text-[#A0A0A0] hover:text-white hover:bg-[#2C2C2C]',
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (Tag === 'a') {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
