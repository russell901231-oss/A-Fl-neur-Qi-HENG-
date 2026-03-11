'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    setRipples(prev => [...prev, { id, x, y }])
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id))
    }, 600)
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-media" style={{ position: 'relative' }}>
        <Image
          src="/hero.jpg"
          alt="Hero image"
          width={1400}
          height={900}
          priority
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            marginTop: '-3rem',
          }}
        />
        {/* 電腦版箭頭：圖片正中央底部 */}
        <a
          className="scroll-cue scroll-cue-desktop"
          href="#about"
          aria-label="Scroll down"
          onClick={handleClick}
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            marginLeft: '-26px',
            color: 'white',
            background: 'rgba(120, 120, 120, 0.45)',
            backdropFilter: 'blur(6px)',
            borderRadius: '50%',
            width: '52px',
            height: '52px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
          }}
        >
          {ripples.map(r => (
            <span
              key={r.id}
              style={{
                position: 'absolute',
                left: r.x,
                top: r.y,
                width: 0,
                height: 0,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.45)',
                transform: 'translate(-50%, -50%)',
                animation: 'ripple 0.6s ease-out forwards',
                pointerEvents: 'none',
              }}
            />
          ))}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{ position: 'relative', zIndex: 1 }}
          >
            <path d="M12 5v12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            <path d="M7.5 13.5L12 18l4.5-4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  )
}
