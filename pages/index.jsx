import dynamic from "next/dynamic"
const HomeScreen = dynamic(() => import("../src/screens/HomeSreen/index"), {
  ssr: false,
})

export default HomeScreen

/*
import Link from "../src/components/Link"
import Footer from "../src/components/pattern/Footer"

export default function HomePage() {
  return (
    <>
      <div>
        <h1>Alura Cases</h1>
        <Link href="/faq">ir para faq</Link>
        <Footer />
      </div>
    </>
  )
}*/
