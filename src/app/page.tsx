const plans = [
  {
    name: "Starter",
    price: "$4",
    blurb: "Personal sites and side projects.",
    features: ["1 project", "10 GB bandwidth", "Free SSL", "Global CDN"],
  },
  {
    name: "Pro",
    price: "$12",
    blurb: "Production apps with room to grow.",
    features: [
      "10 projects",
      "100 GB bandwidth",
      "Preview deploys",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "$39",
    blurb: "Teams shipping across regions.",
    features: [
      "Unlimited projects",
      "1 TB bandwidth",
      "Custom domains",
      "Dedicated edge",
    ],
  },
];

const pillars = [
  {
    title: "Edge by default",
    text: "Your content ships from nodes near your users — lower latency without extra config.",
  },
  {
    title: "Deploy in seconds",
    text: "Push to git or drop a build. Relay handles SSL, caching, and rollbacks.",
  },
  {
    title: "Uptime you can see",
    text: "Live status, clear metrics, and alerts when something drifts off course.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a
            href="#top"
            className="font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight"
          >
            Relay
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-ink-soft sm:flex">
            <a href="#features" className="transition hover:text-signal-deep">
              Features
            </a>
            <a href="#plans" className="transition hover:text-signal-deep">
              Plans
            </a>
            <a
              href="#start"
              className="rounded-md bg-ink px-4 py-2 text-paper transition hover:bg-ink-soft"
            >
              Start free
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero — one composition, brand first, full-bleed atmosphere */}
        <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:items-center sm:pb-0 sm:pt-20">
          <div
            className="hero-atmosphere pointer-events-none absolute inset-0"
            aria-hidden
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,#9fd9ff_0%,transparent_45%),radial-gradient(ellipse_at_85%_20%,#7ef0d4_0%,transparent_40%),radial-gradient(ellipse_at_50%_90%,#c5d8ea_0%,transparent_50%),linear-gradient(165deg,#dce9f4_0%,#f4f8fb_55%,#eef5f2_100%)]" />
            <div className="absolute -left-[10%] top-[18%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(0,184,154,0.18),transparent_65%)] blur-2xl" />
            <div className="absolute -right-[8%] top-[8%] h-[48vmax] w-[48vmax] rounded-full bg-[radial-gradient(circle,rgba(60,140,220,0.22),transparent_65%)] blur-2xl" />
            <svg
              className="absolute inset-0 h-full w-full opacity-40"
              viewBox="0 0 1200 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <path
                className="signal-line"
                d="M0 520 C180 480 260 600 420 540 C580 480 640 360 820 400 C980 436 1080 320 1200 300"
                stroke="#0b1c2c"
                strokeWidth="1.2"
                strokeOpacity="0.25"
              />
              <path
                className="signal-line"
                style={{ animationDelay: "1.2s" }}
                d="M0 280 C200 320 300 200 480 240 C660 280 720 420 900 380 C1040 350 1120 280 1200 260"
                stroke="#008f78"
                strokeWidth="1.4"
                strokeOpacity="0.45"
              />
              <circle cx="420" cy="540" r="5" fill="#00b89a" />
              <circle cx="820" cy="400" r="4" fill="#0b1c2c" fillOpacity="0.5" />
              <circle cx="900" cy="380" r="6" fill="#00b89a" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
            <p className="rise font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-tight text-ink sm:text-7xl md:text-8xl">
              Relay
            </p>
            <h1 className="rise rise-delay-1 mt-4 max-w-xl font-[family-name:var(--font-display)] text-2xl font-700 leading-tight text-ink-soft sm:text-4xl">
              Host at the edge. Reach users faster.
            </h1>
            <p className="rise rise-delay-2 mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              A simple hosting network for sites and apps — global CDN, free
              SSL, and deploys that feel instant.
            </p>
            <div className="rise rise-delay-3 mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#start"
                className="rounded-md bg-signal px-6 py-3 text-sm font-700 text-ink transition hover:bg-signal-deep hover:text-paper"
              >
                Start free
              </a>
              <a
                href="#plans"
                className="rounded-md border border-line bg-white/50 px-6 py-3 text-sm font-600 text-ink-soft backdrop-blur-sm transition hover:border-ink/30 hover:bg-white"
              >
                View plans
              </a>
            </div>
          </div>
        </section>

        {/* Features — one job */}
        <section id="features" className="border-t border-line bg-paper py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-700 tracking-tight sm:text-4xl">
              Built for speed, not complexity
            </h2>
            <p className="mt-3 max-w-lg text-muted">
              Three things that matter when you ship: proximity, simplicity, and
              visibility.
            </p>
            <div className="mt-14 grid gap-12 sm:grid-cols-3">
              {pillars.map((item) => (
                <div key={item.title}>
                  <div className="mb-4 h-1 w-10 bg-signal" aria-hidden />
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-700">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans — interactive containers */}
        <section id="plans" className="border-t border-line bg-mist/60 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-700 tracking-tight sm:text-4xl">
              Plans that stay out of the way
            </h2>
            <p className="mt-3 max-w-lg text-muted">
              Start free. Upgrade when traffic asks for it — no surprise fees.
            </p>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`plan rounded-xl border border-line bg-white p-7 transition duration-300 ${
                    plan.featured ? "plan-featured" : ""
                  }`}
                >
                  <p
                    className={`text-sm font-600 uppercase tracking-wider ${
                      plan.featured ? "text-signal" : "text-muted"
                    }`}
                  >
                    {plan.name}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold">
                    {plan.price}
                    <span
                      className={`text-base font-500 ${
                        plan.featured ? "text-mist/70" : "text-muted"
                      }`}
                    >
                      /mo
                    </span>
                  </p>
                  <p
                    className={`mt-2 text-sm ${
                      plan.featured ? "text-mist/80" : "text-muted"
                    }`}
                  >
                    {plan.blurb}
                  </p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span
                          className={`inline-block h-1.5 w-1.5 rounded-full ${
                            plan.featured ? "bg-signal" : "bg-signal-deep"
                          }`}
                          aria-hidden
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#start"
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-700 transition ${
                      plan.featured
                        ? "bg-signal text-ink hover:bg-white"
                        : "bg-ink text-paper hover:bg-ink-soft"
                    }`}
                  >
                    Choose {plan.name}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="start"
          className="relative overflow-hidden border-t border-line bg-ink py-28 text-paper"
        >
          <div
            className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(0,184,154,0.35),transparent_70%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-6">
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-3xl font-700 tracking-tight sm:text-5xl">
              Ship your next site on Relay
            </h2>
            <p className="mt-4 max-w-md text-mist/75">
              This is a demo hosting site ready for Vercel — connect the repo
              and deploy in one click.
            </p>
            <a
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-md bg-signal px-6 py-3 text-sm font-700 text-ink transition hover:bg-white"
            >
              Deploy to Vercel
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-paper py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 text-sm text-muted sm:flex-row sm:items-center">
          <span className="font-[family-name:var(--font-display)] font-700 text-ink">
            Relay
          </span>
          <p>Demo hosting site · Built for a Vercel test deploy</p>
        </div>
      </footer>
    </div>
  );
}
