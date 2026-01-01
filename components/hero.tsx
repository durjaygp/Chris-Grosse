import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-charcoal leading-tight">
              Healthcare strategy leader building systems for safe, scaled access to innovative therapies
            </h1>
            <p className="text-muted-gray text-lg max-w-lg leading-relaxed">
              I unite providers, pharmacies, and clinical networks around compounded therapies. My work spans national
              market development, clinical education, and operational infrastructure that drives adoption with trust.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <Link
              href="#about"
              className="px-8 py-3 bg-dark-slate text-white font-medium text-sm hover:bg-charcoal transition-colors duration-300"
            >
              About My Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border-2 border-charcoal text-charcoal font-medium text-sm hover:bg-light-gray transition-colors duration-300"
            >
              Let's Talk
            </Link>
          </div>
        </div>

        <div className="relative h-96 md:h-full min-h-96">
          <Image
            src="/images/chris-20smaller-20headshot.jpg"
            alt="Chris Grosse - Healthcare Strategy Leader"
            fill
            className="object-cover rounded-lg shadow-sm"
            priority
          />
        </div>
      </div>
    </section>
  )
}
