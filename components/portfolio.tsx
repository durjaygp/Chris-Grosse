export default function Portfolio() {
  const work = [
    {
      title: "National Sales Infrastructure",
      company: "Hillstone Pharmacy",
      impact: "Built GTM operating system across 30+ licensed states",
      details:
        "Designed sales organization from scratch, including talent strategy, training frameworks, KPI dashboards, and provider activation pathways that accelerated adoption across peptides, GLP-1s, and BHRT.",
    },
    {
      title: "Multi-State Provider Networks",
      company: "Johnson Compounding & Related Entities",
      impact: "$7.8M cumulative net prescription lift",
      details:
        "Expanded provider networks to 2,500+ clinicians across 25 licensed markets. Developed clinical education programs and workflow integration strategies that improved provider understanding of compounding safety standards.",
    },
    {
      title: "Therapeutic Category Expansion",
      company: "Multiple Compounding Organizations",
      impact: "20-30% YoY growth across verticals",
      details:
        "Launched new therapeutic categories (GLP-1s, peptides, BHRT, metabolic health). Built provider education frameworks and direct-to-patient telemedicine programs generating $600K in first two quarters.",
    },
    {
      title: "Commercial Leadership",
      company: "Ruby Wines",
      impact: "68% sales increase ($1.6M → $2.7M)",
      details:
        "Managed 145-account territory for global wine & spirits portfolio. Won Sales Leader of the Year (2016), delivered consistent 20%+ YoY growth, and established best practices for account management and team training.",
    },
  ]

  return (
    <section id="portfolio" className="py-20 md:py-32 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-charcoal mb-4">Selected Work</h2>
        <p className="text-muted-gray mb-12 md:mb-16 max-w-2xl">
          Highlights of projects where I've built systems, expanded access, and led teams to deliver measurable impact.
        </p>

        <div className="space-y-12 md:space-y-16">
          {work.map((item, idx) => (
            <div key={idx} className="pb-12 md:pb-16 border-b border-light-gray last:border-b-0">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                <div>
                  <h3 className="text-charcoal font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-gray">{item.company}</p>
                </div>
                <div>
                  <p className="text-soft-teal font-medium mb-2">{item.impact}</p>
                  <p className="text-muted-gray leading-relaxed">{item.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
