import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <div className="shell">
        <aside className="rail rail-left">
          <div className="rail-block">
            <div className="rail-rule" />
            <p className="rail-kicker">Scroll</p>
            <p className="rail-muted">Follow the thread ↓</p>
          </div>

          <div className="rail-block">
            <p className="rail-title">On this page</p>
            <ul className="rail-list">
              <li><a href="#hero">Hero</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#works">Works</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </aside>

        <main className="content">
          <Hero />
          <About />
          <Works />
          <Contact />
        </main>

        <aside className="rail rail-right">
          <div className="rail-block">
            <p className="rail-title">Notes</p>
            <p className="rail-muted">
              A flâneur walks slowly, notices carefully, and collects fragments.
              <br />
              <br />
              If you like this mood, keep scrolling.
            </p>
          </div>

          <div className="rail-block">
            <div className="rail-rule" />
            <p className="rail-kicker">Selected</p>
            <ul className="rail-list">
              <li><a href="#works">Featured projects</a></li>
              <li><a href="#contact">Work together</a></li>
            </ul>
          </div>
        </aside>
      </div>
      <footer
        style={{
          padding: '2rem 1.5rem',
          borderTop: '1px solid var(--border)',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.875rem',
        }}
      >
        © {new Date().getFullYear()} 作品集
      </footer>
    </>
  )
}
