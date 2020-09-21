import Head from "next/head";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const AppCard = ({ title, subtitle, description, linkTo, linkTitle }) => {
  return (
    <Link href={linkTo}>
      <Card
        className="text-center"
        style={{ minHeight: "12rem", marginTop: "2rem" }}
      >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          <Card.Link href={linkTo}>{linkTitle}</Card.Link>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Blog, by Vincedgy Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <Row className="text-center justify-content-md-center">
            <Col xs={12} md={6}>
              <h1 className="title">
                <small>the</small> Next Blog
              </h1>
              <p className="description">by Vincedgy</p>
              <p className="description">
                find the <code>code</code> on{" "}
                <a href="https://github.com/vincedgy/nextjs-blog">GitHub</a>
              </p>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <AppCard
                title="Sharing documentation"
                linkTo="/docs"
                description="A curated list of documentations I like to read over and over."
                subtitle="📖 You may like the docs I like !"
                linkTitle="go to docs"
              />
            </Col>
            <Col xs={12} md={6}>
              <AppCard
                title="Teaching"
                linkTo="/teaching"
                description="My videos and courses on the Internet."
                subtitle=" 🤔 I learn by teaching... do you ?"
                linkTitle="Go to my courses"
              />
            </Col>
            <Col xs={12} md={6}>
              <AppCard
                title="My GitHub"
                linkTo="https://github.com/vincedgy"
                description="All my public repose, with many projects and many languages..."
                subtitle="🍺 Piece of code, not piece of cake..."
                linkTitle="Go to GitHub"
              />
            </Col>
            <Col xs={12} md={6}>
              <AppCard
                title="Deployed on Netlifly"
                linkTo="https://app.netlify.com/sites/nervous-euclid-e9062d/deploys"
                subtitle="🚀 to Netlifly automagicaly"
                description={
                  <img
                    alt="Netlify Status"
                    src="https://api.netlify.com/api/v1/badges/bd3fd9e4-58c1-4e06-8100-14604e733208/deploy-status"
                  />
                }
                linkTitle="Go to deployement"
              />
            </Col>
          </Row>
        </Container>
      </main>

      <footer>
        Powered by{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          <img src="/Nextjs-logo.svg" alt="NextJs Logo" className="logo" />
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
          padding: 2rem 0;
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
          background-color: #fbfbfb;
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
          height: 1.5em;
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
