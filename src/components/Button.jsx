import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import './Button.css';

/**
 * variant: 'primary' | 'secondary'
 * as: 'link' (internal route) | 'a' (external/hash) | 'button'
 */
export default function Button({
  children,
  variant = 'primary',
  as = 'link',
  to = '/',
  href,
  onClick,
  type = 'button',
  external = false,
  className = '',
}) {
  const classes = `btn btn--${variant} ${className}`;
  const Icon = external ? ArrowUpRight : ArrowRight;

  const content = (
    <>
      <span>{children}</span>
      <Icon className="btn__icon" size={16} strokeWidth={1.6} />
    </>
  );

  if (as === 'a') {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  if (as === 'button') {
    return (
      <button type={type} className={classes} onClick={onClick}>
        {content}
      </button>
    );
  }

  return (
    <Link to={to} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
