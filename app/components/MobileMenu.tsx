'use client'

import { useState } from 'react'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* 漢堡按鈕 */}
      <button
        className="mobile-menu-btn"
        onClick={() => setOpen(true)}
        aria-label="開啟選單"
      >
        <span /><span /><span />
      </button>

      {/* 遮罩 */}
      {open && (
        <div
          className="mobile-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 側欄抽屜 */}
      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        <button
          className="mobile-close-btn"
          onClick={() => setOpen(false)}
          aria-label="關閉選單"
        >
          ✕
        </button>

        <div className="rail-block">
          <div className="rail-rule" />
          <p className="rail-kicker">Scroll</p>
          <p className="rail-muted">Follow the thread ↓</p>
        </div>

        <div className="rail-block">
          <p className="rail-title">On this page</p>
          <ul className="rail-list">
            <li><a href="#hero" onClick={() => setOpen(false)}>Hero</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#works" onClick={() => setOpen(false)}>Works</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}
