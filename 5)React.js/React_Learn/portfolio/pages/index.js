import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "React Components",
    description: "Reusable UI pieces built while learning component structure.",
    tech: "React",
  },
  {
    title: "Todo App",
    description: "A small app for practicing state, events, and rendering lists.",
    tech: "Vite",
  },
  {
    title: "Portfolio",
    description: "This Next.js page for collecting projects in one place.",
    tech: "Next.js",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <section className="section">
          <p className="eyebrow">Projects</p>
          <div className="projectGrid">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section id="contact" className="section contactSection">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let us build something useful.</h2>
          </div>
          <ContactForm />
        </section>
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #f6f2ea;
          color: #1c2321;
          font-family: Arial, Helvetica, sans-serif;
        }

        main {
          width: min(1120px, calc(100% - 32px));
          margin: 0 auto;
          padding: 56px 0;
        }

        .hero {
          min-height: 56vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 18px;
        }

        .eyebrow,
        .projectTech {
          margin: 0;
          color: #0f766e;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0;
          text-transform: uppercase;
        }

        h1,
        h2,
        p {
          margin-top: 0;
        }

        h1 {
          max-width: 780px;
          margin-bottom: 0;
          font-size: clamp(2.25rem, 8vw, 5.8rem);
          line-height: 0.95;
        }

        h2 {
          font-size: clamp(1.65rem, 4vw, 2.4rem);
          line-height: 1.05;
        }

        .heroText {
          max-width: 620px;
          color: #4b5552;
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .primaryLink,
        button {
          width: fit-content;
          border: 0;
          border-radius: 6px;
          background: #db2777;
          color: white;
          cursor: pointer;
          font-weight: 700;
          padding: 12px 18px;
          text-decoration: none;
        }

        .section {
          padding: 48px 0;
        }

        .projectGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          margin-top: 20px;
        }

        .projectCard {
          min-height: 190px;
          border: 1px solid #d9d2c4;
          border-radius: 8px;
          background: #fffaf1;
          padding: 22px;
        }

        .projectCard p:last-child {
          color: #4b5552;
          line-height: 1.6;
        }

        .contactSection {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 28px;
          align-items: start;
        }

        .contactForm {
          display: grid;
          gap: 14px;
        }

        label {
          display: grid;
          gap: 8px;
          color: #33413d;
          font-weight: 700;
        }

        input,
        textarea {
          width: 100%;
          border: 1px solid #c9c0b0;
          border-radius: 6px;
          background: white;
          color: #1c2321;
          font: inherit;
          padding: 12px;
        }

        @media (max-width: 720px) {
          main {
            padding-top: 36px;
          }

          .contactSection {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
