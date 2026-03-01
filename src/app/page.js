export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-5xl font-bold text-blue-400 mb-6">
          Dr. C. Vignesh Kumar
        </h1>

        <p className="text-2xl text-gray-300 mb-4">
          Enterprise Data & Analytics Architect
        </p>

        <p className="text-lg text-gray-400 mb-8">
          Microsoft Fabric | Power BI | AI Automation | PhD in Mathematics
        </p>

        <div className="space-x-6">
          <a href="/projects" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl">
            View Projects
          </a>
          <a href="/research" className="border border-blue-400 px-6 py-3 rounded-xl">
            Publications
          </a>
        </div>

        <div className="mt-20 text-gray-400 leading-8">
          <p>
            I design enterprise-grade analytics systems that transform complex business data into strategic intelligence.
          </p>
          <p>
            With 5+ years of experience across enterprise IT and academia, I specialize in executive dashboards, scalable data pipelines, and AI-driven automation.
          </p>
        </div>

      </div>
    </main>
  );
}