import Link from "../src/components/Link"

//SSG - static site generation
//SSR - server side rendering
//ISG - incremental static generation

//export async function getServerSideProps(){}
//roda a cada acesso que você recebe

export async function getStaticProps() {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
  const faq = await fetch(FAQ_API_URL)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json()
    })
    .then((resposta) => {
      return resposta
    })

  return {
    props: {
      faq,
    },
  }
}

export default function faqPage({ faq }) {
  return (
    <>
      <div>
        <h1>Alura Cases - Página de Perguntas FAQ</h1>
        <Link href="/">Ir para home</Link>
        <ul>
          {faq.map(({ answer, question }) => (
            <article key={question}>
              <h2>{answer}</h2>
              <li>{question}</li>
            </article>
          ))}
        </ul>
      </div>
    </>
  )
}
