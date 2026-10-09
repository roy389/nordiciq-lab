export default function App() {
  return (
    <>
      <section className="hero">
        <h1>AI Andorra</h1>
        <p>NordicIQs egen AI – driftet på egen maskinvare</p>
      </section>

      <section className="content">
        <h2>Hva er AI Andorra?</h2>
        <p>
          AI Andorra er en AI-plattform som NordicIQ drifter selv. Data som
          behandles, blir på vår egen maskinvare og sendes ikke til eksterne
          AI-tjenester.
        </p>
      </section>

      <section className="content">
        <h2>Hva vi bruker den til</h2>
        <ul>
          <li>Analyse av dokumenter og avtaler</li>
          <li>Utregninger og rapporter</li>
          <li>Programmering og feilretting</li>
          <li>Arbeid direkte i kodelagre på GitHub</li>
        </ul>
      </section>

      <section className="content">
        <h2>Kontakt</h2>
        <p>Vil du vite mer? Ta kontakt på [e-post].</p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} NordicIQ</p>
      </footer>
    </>
  );
}
