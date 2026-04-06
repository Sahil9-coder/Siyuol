import React from 'react';

const Input = React.forwardRef(({ label, error, className = '', ...props }, ref) => {
  return (
    <div className={`w-full flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-[var(--text-muted)]">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`
          w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border 
          ${error ? 'border-red-500/50' : 'border-[var(--glass-border)]'}
          text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
          focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]
          transition-all duration-300 ease-out backdrop-blur-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]
        `}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-400 mt-0.5">{error}</span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
