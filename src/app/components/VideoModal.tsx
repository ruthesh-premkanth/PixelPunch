import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export function VideoModal({ isOpen, onClose, videoUrl = 'https://www.youtube.com/embed/6SoB0I1X7EM?autoplay=1&rel=0&modestbranding=1' }: VideoModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  /* Close on Escape key */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  /* Prevent body scroll while open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    /* ── Backdrop ───────────────────────────────────── */
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(10,10,10,0.85)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        animation: 'videoModalFadeIn 0.22s ease forwards',
      }}
    >
      {/* ── Modal card ─────────────────────────────── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '900px',
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: '#0A0A0A',
          boxShadow: '0 24px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(220,38,128,0.18)',
          animation: 'videoModalSlideUp 0.28s cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}
      >
        {/* 16:9 iframe wrapper */}
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src={videoUrl}
            title="Pixel Punch — Studio Intro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block',
            }}
          />
        </div>

        {/* ── Close button ───────────────────────── */}
        <button
          onClick={onClose}
          aria-label="Close video"
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '2px solid #DC2680',
            backgroundColor: 'rgba(10,10,10,0.72)',
            color: '#DC2680',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'background-color 0.18s ease, transform 0.18s ease',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.backgroundColor = '#DC2680';
            (e.currentTarget as HTMLElement).style.color = '#fff';
            (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(10,10,10,0.72)';
            (e.currentTarget as HTMLElement).style.color = '#DC2680';
            (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
          }}
        >
          <X size={16} strokeWidth={2.5} />
        </button>
      </div>

      {/* ── Keyframe animations (injected once) ────── */}
      <style>{`
        @keyframes videoModalFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes videoModalSlideUp {
          from { opacity: 0; transform: translateY(28px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>
    </div>
  );
}