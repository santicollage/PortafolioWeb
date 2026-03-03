interface BadgeProps {
  label: string;
  variant?: 'default' | 'gradient' | 'outline';
  size?: 'sm' | 'md';
}

export function Badge({ label, variant = 'default', size = 'sm' }: BadgeProps) {
  const base = 'inline-flex items-center rounded-lg font-medium';
  const sizeClass = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm';

  const variantClass = {
    default: 'bg-[#2C2C2C] text-[#A0A0A0]',
    gradient: 'gradient-bg text-white',
    outline: 'border border-[#3A3A3A] text-[#A0A0A0]',
  }[variant];

  return (
    <span className={`${base} ${sizeClass} ${variantClass}`}>
      {label}
    </span>
  );
}
