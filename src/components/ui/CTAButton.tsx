import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'gold' | 'outline-navy' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow' | 'sparkle' | 'none';
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function CTAButton({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon = 'arrow',
  children,
  className = '',
  external = true,
}: CTAButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-bold gap-1.5',
    md: 'px-6 py-3.5 text-sm sm:text-base font-extrabold gap-2',
    lg: 'px-8 py-4.5 text-base sm:text-lg font-black tracking-wide gap-3',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#8F1018] hover:bg-[#730C13] text-white shadow-lg shadow-[#8F1018]/25 hover:shadow-xl hover:shadow-[#8F1018]/40 border border-[#8F1018]',
    secondary:
      'bg-[#10182C] hover:bg-[#1A2644] text-white shadow-lg shadow-[#10182C]/20 hover:shadow-xl border border-white/10',
    gold:
      'bg-[#F2C84B] hover:bg-[#E5BC3F] text-[#10182C] shadow-lg shadow-[#F2C84B]/30 hover:shadow-xl font-black border border-[#F2C84B]',
    'outline-navy':
      'bg-transparent hover:bg-[#10182C]/5 text-[#10182C] border-2 border-[#10182C]/20 hover:border-[#10182C]',
    ghost:
      'bg-transparent hover:bg-black/5 text-[#10182C] font-semibold border border-transparent',
  }[variant];

  const commonClasses = `inline-flex items-center justify-center rounded-full transition-all duration-300 transform active:scale-95 cursor-pointer uppercase tracking-wider ${sizeClasses} ${variantClasses} ${className}`;

  const renderIcon = () => {
    if (icon === 'arrow') return <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />;
    if (icon === 'sparkle') return <Sparkles className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />;
    return null;
  };

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        className={`group ${commonClasses}`}
      >
        <span>{children}</span>
        {renderIcon()}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`group ${commonClasses}`}>
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
}