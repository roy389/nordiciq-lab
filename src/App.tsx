export default function App() {
  return (
    <>
      <section className="hero">
        <h1>
          AI Andorra
          <br />
          <span className="hero-accent">NordicIQs egen AI</span>
        </h1>
        <p>driftet på egen maskinvare</p>
        <div className="hero-buttons">
          <a href="#kontakt" className="btn btn-primary">Ta kontakt</a>
          <a href="#slik-fungerer-det" className="btn btn-secondary">Slik fungerer det</a>
        </div>
      </section>

      <section className="content">
        <span className="section-label">PLATTFORM</span>
        <h2>Hva er AI Andorra?</h2>
        <p>
          AI Andorra er en AI-plattform som NordicIQ drifter selv. Data som
          behandles, blir på vår egen maskinvare og sendes ikke til eksterne
          AI-tjenester.
        </p>
      </section>

      <section className="content">
        <span className="section-label">FORDELER</span>
        <h2>Hvorfor egen AI</h2>
        <div className="cards">
          <div className="card">
            <div className="icon-box">
              <svg
                className="card-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3>Dataene blir hos oss</h3>
            <p>Avtaler, kundedata og intern informasjon sendes ikke til eksterne AI-tjenester.</p>
          </div>
          <div className="card">
            <div className="icon-box">
              <svg
                className="card-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3>Forutsigbare kostnader</h3>
            <p>Egen maskinvare i stedet for stadig flere abonnementer.</p>
          </div>
          <div className="card">
            <div className="icon-box">
              <svg
                className="card-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
              </svg>
            </div>
            <h3>Kompetanse vi kan selge</h3>
            <p>Når vi drifter AI selv, kan vi også tilby det til kunder.</p>
          </div>
        </div>
      </section>

      <section className="content">
        <span className="section-label">BRUK</span>
        <h2>Hva vi bruker den til</h2>
        <ul>
          <li>Analyse av dokumenter og avtaler</li>
          <li>Utregninger og rapporter</li>
          <li>Programmering og feilretting</li>
          <li>Arbeid direkte i kodelagre på GitHub</li>
        </ul>
      </section>

      <section className="content" id="slik-fungerer-det">
        <span className="section-label">ARBEIDSFLYT</span>
        <h2>Slik fungerer det</h2>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Bestilling</h3>
            <p>Oppgaven beskrives for AI Andorra</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Kode</h3>
            <p>AI Andorra lager endringen i GitHub</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Kontroll</h3>
            <p>Koden bygges og testes automatisk</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <h3>Godkjenning</h3>
            <p>Et menneske godkjenner</p>
          </div>
          <div className="step">
            <span className="step-number">5</span>
            <h3>Publisering</h3>
            <p>Siden oppdateres automatisk</p>
          </div>
        </div>
      </section>

      <section className="content" id="kontakt">
        <span className="section-label">KONTAKT</span>
        <h2>Kontakt</h2>
        <p>Vil du vite mer? Ta kontakt på post@nordiciq.io.</p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} NordicIQ</p>
      </footer>
    </>
  );
}
