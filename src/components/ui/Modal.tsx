import { useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'md' | 'lg' | 'xl';
}

export function Modal({ isOpen, onClose, title, children, size = 'lg' }: ModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const sizeClass = {
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  }[size];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`relative w-full ${sizeClass} max-h-[85vh] overflow-y-auto rounded-2xl bg-[#1F1F1F] border border-[#3A3A3A]`}
          >
            {title && (
              <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-[#1F1F1F] border-b border-[#3A3A3A]">
                <h2 className="text-xl font-semibold text-white font-display">{title}</h2>
                <button
                  onClick={onClose}
                  aria-label="Cerrar modal"
                  className="p-2 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#2C2C2C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5919C2]"
                >
                  <X size={20} />
                </button>
              </div>
            )}
            {!title && (
              <button
                onClick={onClose}
                aria-label="Cerrar modal"
                className="absolute top-4 right-4 z-10 p-2 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#2C2C2C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5919C2]"
              >
                <X size={20} />
              </button>
            )}
            <div className="p-6">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
