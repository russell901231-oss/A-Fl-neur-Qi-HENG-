'use client'

export default function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100vw',
        left: 0,
        background: 'rgba(10, 10, 11, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
      }}
    >
      <nav
        style={{
          width: '100%',
          padding: '1rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        <a
          href="#"
          style={{
            fontWeight: 600,
            fontSize: '1.125rem',
            fontStyle: 'italic',
            color: 'rgba(255, 255, 255, 0.92)',
            flexShrink: 0,
            marginLeft: 0,
            paddingLeft: 0,
          }}
        >
          A Flâneur , Qi HENG
        </a>
      </nav>
    </header>
  )
}
