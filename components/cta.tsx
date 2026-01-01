import Link from "next/link"

export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-8 bg-light-gray border-t border-light-gray">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-12 h-px bg-soft-teal"></div>
        </div>

        <h2 className="text-charcoal mb-6">Interested in exploring a project together?</h2>

        <p className="text-muted-gray text-lg mb-10 leading-relaxed">
          I'm always interested in conversations about healthcare strategy, clinical education, and building systems
          that expand safe access to innovative therapies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="mailto:cgrosse66@gmail.com"
            className="px-8 py-3 bg-dark-slate text-white font-medium text-sm hover:bg-charcoal transition-colors duration-300"
          >
            Get in Touch
          </Link>
          <Link
            href="https://www.linkedin.com/in/sales-operations-development"
            target="_blank"
            className="px-8 py-3 border-2 border-charcoal text-charcoal font-medium text-sm hover:bg-light-gray transition-colors duration-300"
          >
            View LinkedIn
          </Link>
        </div>
      </div>
    </section>
  )
}
