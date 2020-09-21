import Head from "next/head";
import Link from "next/link";
import Container from "react-bootstrap/Container"

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Blog, by Vincedgy Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Container>
        <h1 className="title">
          <small>the</small> Next Blog
        </h1>

        <p className="description">by Vincedgy</p>

        <p className="description">
          find the <code>code</code> on{" "}
          <a href="https://github.com/vincedgy/nextjs-blog">GitHub</a>
        </p>

        <div className="grid">

        <Link href="/docs">
            <div className="card">
              <h3>Sharing documentation</h3>
              <p>📖 You may like the docs I like !</p>
            </div>
          </Link>

          <Link href="/teaching">
            <div className="card">
              <h3>Teaching</h3>
              <p>🤔 I learn by teaching... do you ?</p>
            </div>
          </Link>

          <Link href="https://github.com/vincedgy">
            <div className="card">
              <h3>My GitHub</h3>
              <p>🍺 Piece of code, <br/>not piece of cake...</p>
            </div>
          </Link>

          <Link href="https://app.netlify.com/sites/nervous-euclid-e9062d/deploys">
            <div className="card">
              <h3>Deployed on Netlifly</h3>
              <p>
                <img
                  alt="Netlify Status"
                  src="https://api.netlify.com/api/v1/badges/bd3fd9e4-58c1-4e06-8100-14604e733208/deploy-status"
                />
              </p>
              <p>
                🚀 to Netlifly automagicaly
              </p>
            </div>
          </Link>
        </div>
        </Container>
      </main>

      <footer>
        Powered by{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
        <img src="/Nextjs-logo.svg"  alt="NextJs Logo" className="logo" />
        </a>{" "}
        and{" "}
        <a
          href="https://getbootstrap.com/docs/4.5/getting-started/introduction/"
          target="_blank"
        >
          <img src="/bootstrap-5.svg" alt="Bootstrap Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          min-height: 20vh;
          flex-basis: 45%;
          padding: 2.5rem;
          text-align: left;
          color: inherit;
          background-color: #FBFBFB;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
