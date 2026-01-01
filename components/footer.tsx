import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-100 py-16 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-slate-700">
          <div>
            <h3 className="font-semibold mb-4 text-white">Chris Grosse</h3>
            <p className="text-sm text-slate-400">
              Healthcare strategy leader specializing in compounding, clinical education, and provider adoption.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="#home" className="text-sm text-slate-400 hover:text-purple-400 transition-colors block">
                Home
              </Link>
              <Link href="#about" className="text-sm text-slate-400 hover:text-purple-400 transition-colors block">
                About
              </Link>
              <Link href="#portfolio" className="text-sm text-slate-400 hover:text-purple-400 transition-colors block">
                Portfolio
              </Link>
              <Link href="#contact" className="text-sm text-slate-400 hover:text-purple-400 transition-colors block">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <div className="space-y-2">
              <Link
                href="mailto:cgrosse66@gmail.com"
                className="text-sm text-slate-400 hover:text-purple-400 transition-colors block"
              >
                Email
              </Link>
              <Link
                href="https://www.linkedin.com/in/sales-operations-development"
                target="_blank"
                className="text-sm text-slate-400 hover:text-purple-400 transition-colors block"
              >
                LinkedIn
              </Link>
              <Link
                href="https://chris-newsletter-27fa7e.beehiiv.com/"
                target="_blank"
                className="text-sm text-slate-400 hover:text-purple-400 transition-colors block"
              >
                Newsletter
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© {currentYear} Chris Grosse. All rights reserved.</p>
          <p className="text-sm text-slate-500">Built with modern design principles</p>
        </div>
      </div>
    </footer>
  )
}
