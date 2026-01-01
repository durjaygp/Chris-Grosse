import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Expertise from "@/components/expertise"
import Portfolio from "@/components/portfolio"
import CTA from "@/components/cta"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Portfolio />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
