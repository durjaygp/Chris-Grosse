import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-8 bg-white border-t border-light-gray">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div className="relative h-96 md:h-full min-h-96">
          <Image
            src="/images/headshot-20black-20and-20white.jpg"
            alt="Chris Grosse Professional Portrait"
            fill
            className="object-cover rounded-lg shadow-sm"
          />
        </div>

        <div className="space-y-6 flex flex-col justify-start">
          <h2 className="text-charcoal">About Me</h2>

          <div className="space-y-4 text-muted-gray">
            <p>
              I'm a healthcare strategy and market development leader based in the Greater Boston area. For over five
              years, I've worked at the intersection of compounding pharmacy, clinical education, and national
              healthcare strategy.
            </p>

            <p>
              My work focuses on expanding safe, high-quality access to compounded therapies—from peptides and GLP-1s to
              BHRT and longevity medicine. I partner with providers, pharmacists, and operations teams to build the
              systems, workflows, and education that enable confident adoption.
            </p>

            <p>
              Currently, I'm National Sales Director at Hillstone Pharmacy, where I'm building the national go-to-market
              infrastructure across 30+ licensed states. I'm passionate about translating complex healthcare policy and
              compounding standards into clear, actionable guidance for clinicians.
            </p>

            <p>
              Outside of work, I'm deeply interested in AI for organizational leadership, health coaching, and modern
              frameworks for healthcare transformation.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="#portfolio"
              className="inline-flex text-soft-teal font-medium hover:text-charcoal transition-colors border-b-2 border-soft-teal hover:border-charcoal pb-1"
            >
              Explore My Work →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
