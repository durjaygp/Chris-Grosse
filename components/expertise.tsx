export default function Expertise() {
  const areas = [
    {
      title: "Healthcare Strategy",
      description:
        "National market development, provider adoption pathways, and clinical access frameworks for compounded therapies",
    },
    {
      title: "Commercial Leadership",
      description:
        "Go-to-market strategy, sales operations, territory structure, and revenue modeling across multi-state organizations",
    },
    {
      title: "Clinical Education",
      description:
        "Provider training, compounding standards (USP), workflow integration, and confidence-building communication",
    },
    {
      title: "Operations & Systems",
      description:
        "CRM/HubSpot infrastructure, KPI architecture, team training, and cross-functional alignment at scale",
    },
    {
      title: "Policy & Regulatory",
      description:
        "State regulatory environments, DEA compliance, compounding standards, and responsible therapeutic expansion",
    },
    {
      title: "Storytelling & Content",
      description:
        "Clinical narratives, digital outreach, personalized video, and content strategies that drive provider engagement",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-light-gray">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-charcoal mb-12 md:mb-16">Core Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {areas.map((area, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-charcoal font-semibold">{area.title}</h3>
              <p className="text-muted-gray leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
