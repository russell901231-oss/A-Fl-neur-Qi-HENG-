export default function Contact() {
  return (
    <section id="contact">
      <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
        歡迎來信或透過社群找到我
      </h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '40ch' }}>
        若有合作或交流想法，歡迎用以下方式聯絡。
      </p>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <li>
          <a
            href="mailto:russell901231@gmail.com"
            style={{ color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            russell901231@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/qiheng901231/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text)' }}
          >
            Instagram
          </a>
        </li>
      </ul>
    </section>
  )
}
