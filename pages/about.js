import Head from "next/head";
import TitleComponent from "../components/TitleComponent"

export default function About() {
  const [ thing, setThing] = React.useState({})

  React.useEffect( () => {
    setThing({"message":"Hello World !"})
    return () => {
        setThing({})
    }
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Next Blog, by Vincedgy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TitleComponent title="About ?"/>
        <div>
            <p>{thing.message}</p>
        </div>        
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
    </div>
  );
}
