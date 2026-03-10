export default function About() {
  return (
    <section id="about">
      <p className="section-title">關於我</p>
      <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>
        我是誰、在做什麼
      </h2>
      <p style={{ color: 'var(--text-muted)', maxWidth: '56ch' }}>
        在這裡寫一段關於你自己的介紹：你的背景、專長、工作或學習經歷，
        以及你希望訪客對你留下的印象。可以分多段寫，讓版面更易讀。
      </p>
    </section>
  )
}
