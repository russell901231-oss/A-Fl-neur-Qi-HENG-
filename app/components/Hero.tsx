import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero"
    >
      <div className="hero-media">
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
            transform: 'translateY(-3.5cm)',
          }}
        />
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll down">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 5v12"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M7.5 13.5L12 18l4.5-4.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  )
}
