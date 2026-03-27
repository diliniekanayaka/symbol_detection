import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const navLinks = ["How It Works", "Services", "Pricing", "Partnerships", "Contact"];

const problemPoints = [
  "Hiring developers is slow and expensive",
  "Freelancers are inconsistent",
  "Agencies overcomplicate delivery",
  "Products stay stuck without execution",
];

const solutionPillars = [
  {
    title: "Fast Execution",
    description: "Move from planning to shipped features quickly with focused delivery cycles.",
  },
  {
    title: "End-to-End Support",
    description: "From strategy to development to post-launch iteration, we stay with your team.",
  },
  {
    title: "Built for Real Use",
    description: "Every release is shaped for practical adoption, not vanity deliverables.",
  },
];

const steps = ["Understand your product", "Build with structure", "Launch and improve"];

const serviceCards = [
  { title: "MVP Launch", description: "Build and launch fast with a clear roadmap and lean scope." },
  {
    title: "Dedicated Development Support",
    description: "Monthly product support with ongoing execution, starting at $2,000/month.",
  },
  {
    title: "Product Planning & Pitch Support",
    description: "Strategy and direction to shape your product and communicate it clearly.",
  },
];

const partnershipCards = [
  "Design Partners",
  "Agencies & Consultants",
  "Founders & Operators",
  "Referral Partners",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A]">
      <header className="border-b border-[#E5E7EB] bg-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Image src="/logo.png" alt="Asyncdot" width={140} height={32} className="h-7 w-auto md:h-8" priority />
          <nav className="hidden items-center gap-8 text-sm text-[#6B7280] lg:flex">
            {navLinks.map((link) => (
              <a key={link} href="#" className="transition-colors hover:text-[#0A0A0A]">
                {link}
              </a>
            ))}
          </nav>
          <Button size="default">Book a Strategy Call</Button>
        </div>
      </header>

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
        <div className="space-y-8">
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Build your product faster — without hiring a full development team.
            </h1>
            <p className="max-w-xl text-lg text-[#6B7280]">
              Asyncdot is a founder-led product execution partner — a complete support system helping founders
              and teams go from idea to launch and beyond.
            </p>
            <p className="text-base font-medium">Get a dedicated product development team starting at $2,000/month.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="lg">Book a Strategy Call</Button>
            <Button variant="outline" size="lg">
              See How It Works
            </Button>
          </div>
          <p className="text-sm text-[#6B7280]">Trusted by founders and teams building real products.</p>
        </div>

        <Card className="relative overflow-hidden p-6 md:p-8">
          <div className="absolute -right-6 -top-6 rounded-full border border-[#E5E7EB] px-4 py-1 text-xs text-[#6B7280]">
            Execution OS
          </div>
          <div className="grid gap-4">
            <Card className="p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">Product Roadmap</p>
              <div className="space-y-2">
                <div className="h-2 w-4/5 rounded bg-[#0A0A0A]" />
                <div className="h-2 w-2/3 rounded bg-[#D1D5DB]" />
                <div className="h-2 w-3/5 rounded bg-[#E5E7EB]" />
              </div>
            </Card>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">Sprint Status</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />Wireframes approved</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />API connected</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />Release candidate ready</p>
                </div>
              </Card>
              <Card className="p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">Workflow</p>
                <ol className="space-y-2 text-sm text-[#6B7280]">
                  <li>01. Discovery</li>
                  <li>02. Build Sprint</li>
                  <li>03. Launch + Learn</li>
                </ol>
              </Card>
            </div>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <h2 className="text-3xl font-semibold">Building a product shouldn’t feel this hard.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {problemPoints.map((point) => (
            <Card key={point} className="p-6 text-[#6B7280]">{point}</Card>
          ))}
        </div>
        <p className="mt-6 text-lg text-[#6B7280]">
          Most products don’t fail because of the idea — they fail because execution never happens properly.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <h2 className="text-3xl font-semibold">Asyncdot is your execution partner.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {solutionPillars.map((pillar) => (
            <Card key={pillar.title} className="p-6">
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-[#6B7280]">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <h2 className="text-3xl font-semibold">From idea to launch in 3 clear steps</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step} className="p-6">
              <p className="text-sm text-[#6B7280]">Step 0{index + 1}</p>
              <p className="mt-2 text-lg font-medium">{step}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <h2 className="text-3xl font-semibold">What we do</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {serviceCards.map((service) => (
            <Card key={service.title} className="p-6">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-[#6B7280]">{service.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <h2 className="text-3xl font-semibold">Simple, transparent pricing — built for execution</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card className="p-6">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="mt-2 text-[#6B7280]">Small scope</p>
          </Card>
          <Card className="border-black p-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">Core</p>
            <h3 className="text-xl font-semibold">Dedicated Product Team</h3>
            <p className="mt-2 text-2xl font-semibold">Starting at $2,000/month</p>
            <ul className="mt-4 space-y-2 text-sm text-[#6B7280]">
              {[
                "Full-stack development",
                "Feature updates",
                "Maintenance",
                "Weekly updates",
                "Direct communication",
                "Fast execution",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-black" />
                  {item}
                </li>
              ))}
            </ul>
            <Button className="mt-6 w-full">Get Started</Button>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold">Scale</h3>
            <p className="mt-2 text-[#6B7280]">Custom</p>
          </Card>
        </div>
        <p className="mt-6 text-center text-[#6B7280]">
          No hiring. No unnecessary overhead. Just reliable execution.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <h2 className="text-3xl font-semibold">Why founders and teams choose Asyncdot</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {["Founder-led communication", "Product thinking", "Faster execution", "Reliable support"].map((point) => (
            <Card key={point} className="p-6">{point}</Card>
          ))}
        </div>
        <p className="mt-6 text-xl font-medium">
          We don’t just build what you ask — we help you build what actually works.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <h2 className="text-3xl font-semibold">
          Work with Asyncdot — as a partner, collaborator, or growth contributor
        </h2>
        <p className="mt-4 max-w-3xl text-[#6B7280]">
          We collaborate with designers, agencies, founders, and individuals who want to grow through execution.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {partnershipCards.map((item) => (
            <Card key={item} className="p-6">
              <h3 className="text-lg font-semibold">{item}</h3>
              {item === "Referral Partners" && (
                <p className="mt-2 text-sm text-[#6B7280]">
                  Bring projects. Asyncdot handles execution. Earn through successful collaboration.
                </p>
              )}
            </Card>
          ))}
        </div>
        <Button variant="outline" className="mt-8">
          Become a Partner
        </Button>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <h2 className="text-3xl font-semibold">Proof</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((index) => (
            <Card key={index} className="p-6">
              <p className="text-sm text-[#6B7280]">Case Study 0{index}</p>
              <p className="mt-2 text-lg font-semibold">Placeholder product outcome</p>
              <p className="mt-2 text-sm text-[#6B7280]">Metrics and project narrative to be added.</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-[#E5E7EB] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center lg:px-10">
          <div>
            <h2 className="text-3xl font-semibold">Have a product to build?</h2>
          </div>
          <Button size="lg" className="gap-2">
            Book a Strategy Call <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Image src="/logo.png" alt="Asyncdot" width={140} height={32} className="h-7 w-auto md:h-8" />
            <p className="text-[#6B7280]">The place you go when you are ready to build.</p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#6B7280]">Links</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#6B7280]">Contact</h3>
            <ul className="space-y-2 text-sm text-[#6B7280]">
              <li>hello@asyncdot.com</li>
              <li>Remote · Global</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
