const projects = [
  {
    title: '專案一',
    description: '簡短描述這個專案做了什麼、用了什麼技術或成果。',
    href: '#',
  },
  {
    title: '專案二',
    description: '另一個作品的簡短說明，方便之後替換成真實專案。',
    href: '#',
  },
  {
    title: '專案三',
    description: '第三個專案描述，保持格式一致即可。',
    href: '#',
  },
]

export default function Works() {
  return (
    <section id="works">
      <p className="section-title">作品</p>
      <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>
        精選專案
      </h2>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {projects.map((p) => (
          <li key={p.title}>
            <a
              href={p.href}
              className="card"
              style={{
                display: 'block',
                padding: '1.5rem',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                borderRadius: 12,
              }}
            >
              <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{p.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>{p.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
