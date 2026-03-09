import { useState } from 'react';

interface LogoWordmarkProps {
  name: string;
}

export function LogoWordmark({ name }: LogoWordmarkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const renderLogo = () => {
    const fillColor = isHovered ? 'var(--color-ownership)' : 'var(--text-secondary)';
    
    switch (name) {
      case 'Google':
        return (
          <svg height="40" viewBox="0 0 88 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M44 20.5c0-1.2-.1-2.4-.3-3.5H22.5v6.6h12.1c-.5 2.8-2.1 5.2-4.4 6.8v5.5h7.1c4.2-3.9 6.6-9.6 6.6-15.4z"
              fill={fillColor}
              style={{ transition: 'fill 0.3s ease' }}
            />
            <path 
              d="M22.5 40c5.9 0 10.9-2 14.5-5.3l-7.1-5.5c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.5-3.8-12.2-9h-7.3v5.7C6.5 35.7 13.9 40 22.5 40z"
              fill={fillColor}
              style={{ transition: 'fill 0.3s ease' }}
            />
            <path 
              d="M10.3 23.3c-.4-1.3-.7-2.6-.7-4s.2-2.7.7-4V9.6H3c-1.4 2.7-2.2 5.8-2.2 9.1s.8 6.4 2.2 9.1l7.3-4.5z"
              fill={fillColor}
              style={{ transition: 'fill 0.3s ease' }}
            />
            <path 
              d="M22.5 8.7c3.2 0 6.1 1.1 8.3 3.3l6.2-6.2C33.3 2.2 28.3 0 22.5 0 13.9 0 6.5 4.3 3 11.9l7.3 5.7c1.7-5.2 6.5-9 12.2-9z"
              fill={fillColor}
              style={{ transition: 'fill 0.3s ease' }}
            />
          </svg>
        );
      
      case 'Microsoft':
        return (
          <svg height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="8" width="13" height="13" fill={fillColor} style={{ transition: 'fill 0.3s ease' }} />
            <rect x="23" y="8" width="13" height="13" fill={fillColor} style={{ transition: 'fill 0.3s ease' }} />
            <rect x="8" y="23" width="13" height="13" fill={fillColor} style={{ transition: 'fill 0.3s ease' }} />
            <rect x="23" y="23" width="13" height="13" fill={fillColor} style={{ transition: 'fill 0.3s ease' }} />
          </svg>
        );
      
      case 'Apple':
        return (
          <svg height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M27.5 13.4c-.1.1-3.1 1.8-3.1 5.5 0 4.3 3.8 5.8 3.9 5.8-.1.1-.6 2.1-2 4.2-1.2 1.8-2.5 3.5-4.5 3.5-2 .1-2.6-1.2-4.9-1.2-2.2 0-2.9 1.2-4.8 1.2-1.9 0-3.3-1.7-4.6-3.5-1.6-2.3-2.8-6-2.8-9.4 0-5.5 3.6-8.4 7.1-8.4 1.9 0 3.5 1.2 4.7 1.2 1.1 0 2.9-1.3 5-1.3.8 0 3.8.1 5.6 2.9l.4.5zm-6.6-5.2c.8-1 1.4-2.4 1.4-3.8 0-.2 0-.4-.1-.6-1.3.1-2.9.9-3.9 2-.8.9-1.5 2.4-1.5 3.8 0 .2 0 .5.1.5.2.1.4.1.6.1 1.2 0 2.7-.8 3.4-2z"
              fill={fillColor}
              style={{ transition: 'fill 0.3s ease' }}
            />
          </svg>
        );
      
      case 'Amazon':
        return (
          <svg height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M50.4 28.8c-7.7 5.7-18.9 8.7-28.5 8.7-13.5 0-25.6-5-34.8-13.3-.7-.6-.1-1.5.8-1 13.1 7.6 29.3 12.2 46 12.2 11.3 0 23.7-2.3 35.1-7.1 1.7-.8 3.2 1.1 1.4 2.5z"
              fill={fillColor}
              style={{ transition: 'fill 0.3s ease' }}
            />
            <path 
              d="M53.5 25.2c-1-1.2-6.5-.6-9-.3-.7.1-.8-.5-.2-1 4.4-3.1 11.6-2.2 12.4-1.2.8 1.1-.2 8.6-4.5 12.2-.7.6-1.3.3-1-.5.9-2.3 3-7.5 2.3-9.2z"
              fill={fillColor}
              style={{ transition: 'fill 0.3s ease' }}
            />
          </svg>
        );
      
      case 'Netflix':
        return (
          <svg height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M8 5h5l6 20 6-20h5v30h-5V15l-6 20h-5L8 15v20H3V5h5z"
              fill={fillColor}
              style={{ transition: 'fill 0.3s ease' }}
            />
          </svg>
        );
      
      case 'Adobe':
        return (
          <svg height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M15 5L5 35h7l2.5-7h8l2.5 7h7L22 5h-7zm-.5 18l3-9 3 9h-6z"
              fill={fillColor}
              style={{ transition: 'fill 0.3s ease' }}
            />
          </svg>
        );
      
      case 'X (Twitter)':
        return (
          <svg height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M30.7 7h5.8l-12.7 14.5L38 33h-11.7l-9.2-12-10.5 12H0l13.6-15.5L2 7h12l8.3 11L30.7 7zm-2 23.3h3.2L12.3 10.2H8.9l19.8 20.1z"
              fill={fillColor}
              style={{ transition: 'fill 0.3s ease' }}
            />
          </svg>
        );
      
      case 'Meta':
        return (
          <svg height="40" viewBox="0 0 68 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M23.2 8c-6.7 0-12.2 5.5-12.2 12.2 0 3.2 1.2 6.1 3.2 8.3-2 2.2-3.2 5.1-3.2 8.3 0 6.7 5.5 12.2 12.2 12.2 3.2 0 6.1-1.2 8.3-3.2 2.2 2 5.1 3.2 8.3 3.2 6.7 0 12.2-5.5 12.2-12.2 0-3.2-1.2-6.1-3.2-8.3 2-2.2 3.2-5.1 3.2-8.3C52 13.5 46.5 8 39.8 8c-3.2 0-6.1 1.2-8.3 3.2C29.3 9.2 26.4 8 23.2 8zm0 4.9c4.3 0 7.3 3 7.3 7.3s-3 7.3-7.3 7.3-7.3-3-7.3-7.3 3-7.3 7.3-7.3zm16.6 0c4.3 0 7.3 3 7.3 7.3s-3 7.3-7.3 7.3-7.3-3-7.3-7.3 3-7.3 7.3-7.3z"
              fill={fillColor}
              style={{ transition: 'fill 0.3s ease' }}
            />
          </svg>
        );
      
      default:
        return null;
    }
  };

  return (
    <div 
      className="px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
      style={{
        border: '2px solid var(--border)',
        backgroundColor: 'transparent'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {renderLogo()}
    </div>
  );
}
