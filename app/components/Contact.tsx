export default function Contact() {
  return (
    <section id="contact">
      <p className="section-title">聯絡</p>
      <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
        歡迎來信或透過社群找到我
      </h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '40ch' }}>
        若有合作或交流想法，歡迎用以下方式聯絡。
      </p>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <li>
          <a
            href="mailto:your@email.com"
            style={{ color: 'var(--accent)', textDecoration: 'underline' }}
          >
            your@email.com
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{ color: 'var(--text-muted)' }}
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{ color: 'var(--text-muted)' }}
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  )
}
