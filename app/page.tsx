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

const pillars = [
  {
    title: "Fast Execution",
    description: "Focused build cycles that move from idea to shipped product without delay.",
  },
  {
    title: "End-to-End Support",
    description: "Strategy, product architecture, development, launch, and iteration in one system.",
  },
  {
    title: "Built for Real Use",
    description: "We prioritize adoption, performance, and practical outcomes over presentation work.",
  },
];

const steps = [
  {
    title: "Understand your product",
    description: "Clarify goals, users, and scope so execution starts with precision.",
  },
  {
    title: "Build with structure",
    description: "Ship in disciplined sprints with visibility, priorities, and reliable velocity.",
  },
  {
    title: "Launch and improve",
    description: "Release with confidence, then continuously improve based on usage and feedback.",
  },
];

const services = [
  {
    title: "MVP Launch",
    description: "Build and launch quickly with the right scope, architecture, and delivery rhythm.",
  },
  {
    title: "Dedicated Development Support",
    description: "Monthly product execution support starting at $2,000/month.",
  },
  {
    title: "Product Planning & Pitch Support",
    description: "Strategic product direction and positioning to help teams move with confidence.",
  },
];

const whyAsyncdot = ["Founder-led communication", "Product thinking", "Faster execution", "Reliable support"];

const partnershipCards = [
  {
    title: "Design Partners",
    description: "Pair great design with reliable product execution to ship stronger products.",
  },
  {
    title: "Agencies & Consultants",
    description: "Extend your delivery capacity without adding operational overhead.",
  },
  {
    title: "Founders & Operators",
    description: "Collaborate with a team that can own execution from roadmap to release.",
  },
  {
    title: "Referral Partners",
    description: "Bring projects, Asyncdot handles execution, and you earn through collaboration.",
  },
];

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-24">
      <div className="max-w-3xl">
        {eyebrow && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280]">{eyebrow}</p>}
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        {description && <p className="mt-4 text-base leading-relaxed text-[#6B7280] md:text-lg">{description}</p>}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A]">
      <header className="sticky top-0 z-30 border-b border-[#E5E7EB] bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#" className="shrink-0">
            <Image src="/logo.png" alt="Asyncdot" width={160} height={32} className="h-7 w-auto md:h-8" priority />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[#6B7280] lg:flex">
            <a href="#how-it-works" className="transition-colors hover:text-[#0A0A0A]">
              How It Works
            </a>
            <a href="#services" className="transition-colors hover:text-[#0A0A0A]">
              Services
            </a>
            <a href="#pricing" className="transition-colors hover:text-[#0A0A0A]">
              Pricing
            </a>
            <a href="#partnerships" className="transition-colors hover:text-[#0A0A0A]">
              Partnerships
            </a>
            <a href="#contact" className="transition-colors hover:text-[#0A0A0A]">
              Contact
            </a>
          </nav>
          <Button>Book a Strategy Call</Button>
        </div>
      </header>

      <section className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-16 pt-20 md:px-10 md:pb-20 md:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280]">Founder-led product execution</p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl md:leading-tight">
              Build your product faster — without hiring a full development team.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#6B7280] md:text-lg">
              Asyncdot is a founder-led product execution partner — a complete support system helping founders and
              teams go from idea to launch and beyond.
            </p>
            <p className="text-base font-medium md:text-lg">Get a dedicated product development team starting at $2,000/month.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="lg">Book a Strategy Call</Button>
            <Button variant="outline" size="lg">
              See How It Works
            </Button>
          </div>
          <p className="text-sm text-[#6B7280]">Trusted by founders and teams building real products.</p>
        </div>

        <Card className="relative overflow-hidden bg-white p-6 md:p-7">
          <div className="absolute right-5 top-5 rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#6B7280]">
            Live Delivery
          </div>

          <div className="space-y-4 pt-8">
            <Card className="p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7280]">Execution Workflow</p>
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between rounded-lg border border-[#E5E7EB] px-3 py-2">
                  <span className="text-sm">Discovery & Scope</span>
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between rounded-lg border border-[#E5E7EB] px-3 py-2">
                  <span className="text-sm">Build Sprint</span>
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between rounded-lg border border-[#E5E7EB] px-3 py-2">
                  <span className="text-sm">Launch & Iterate</span>
                  <CheckCircle2 className="h-4 w-4" />
                </div>
              </div>
            </Card>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-[#6B7280]">Velocity</p>
                <p className="mt-2 text-2xl font-semibold">2x</p>
                <p className="mt-1 text-xs text-[#6B7280]">Faster structured execution</p>
              </Card>
              <Card className="p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-[#6B7280]">Communication</p>
                <p className="mt-2 text-2xl font-semibold">Direct</p>
                <p className="mt-1 text-xs text-[#6B7280]">Founder-led weekly updates</p>
              </Card>
            </div>
          </div>
        </Card>
      </section>

      <Section
        title="Building a product shouldn’t feel this hard."
        description="Most products don’t fail because of the idea — they fail because execution never happens properly."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {problemPoints.map((point) => (
            <Card key={point} className="p-6">
              <p className="text-lg leading-relaxed text-[#111111]">{point}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Asyncdot is your execution partner."
        description="A complete support system designed to move products from concept to launch and sustainable growth."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="p-6">
              <h3 className="text-xl font-semibold tracking-tight">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280] md:text-base">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="how-it-works" title="From idea to launch in 3 clear steps">
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title} className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7280]">Step 0{index + 1}</p>
              <p className="mt-3 text-lg font-semibold tracking-tight">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="services" title="What we do">
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="p-6">
              <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280] md:text-base">{service.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="pricing"
        title="Simple, transparent pricing — built for execution"
        description="No hiring. No unnecessary overhead. Just reliable execution."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="flex flex-col justify-between p-6">
            <div>
              <h3 className="text-xl font-semibold">Starter</h3>
              <p className="mt-2 text-sm text-[#6B7280]">Small scope for focused product milestones.</p>
            </div>
            <Button variant="outline" className="mt-8">
              Start Small
            </Button>
          </Card>

          <Card className="relative border-black p-6 shadow-[0_2px_8px_rgba(10,10,10,0.08)]">
            <div className="absolute right-6 top-6 rounded-full border border-black px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
              Core
            </div>
            <h3 className="pr-16 text-2xl font-semibold tracking-tight">Dedicated Product Team</h3>
            <p className="mt-3 text-xl font-medium">Starting at $2,000/month</p>
            <ul className="mt-6 space-y-3 text-sm text-[#374151]">
              {[
                "Full-stack development",
                "Feature updates",
                "Maintenance",
                "Weekly updates",
                "Direct communication",
                "Fast execution",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-black" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full">Get Started</Button>
          </Card>

          <Card className="flex flex-col justify-between p-6">
            <div>
              <h3 className="text-xl font-semibold">Scale</h3>
              <p className="mt-2 text-sm text-[#6B7280]">Custom collaboration for larger product demands.</p>
            </div>
            <Button variant="outline" className="mt-8">
              Contact Us
            </Button>
          </Card>
        </div>
      </Section>

      <Section title="Why founders and teams choose Asyncdot">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {whyAsyncdot.map((item) => (
            <Card key={item} className="p-6">
              <p className="text-base font-medium">{item}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-xl font-medium tracking-tight">
          We don’t just build what you ask — we help you build what actually works.
        </p>
      </Section>

      <Section
        id="partnerships"
        title="Work with Asyncdot — as a partner, collaborator, or growth contributor"
        description="We collaborate with designers, agencies, founders, and individuals who want to grow through execution."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {partnershipCards.map((item) => (
            <Card key={item.title} className="p-6">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{item.description}</p>
            </Card>
          ))}
        </div>
        <Button variant="outline" className="mt-8">
          Become a Partner
        </Button>
      </Section>

      <Section title="Proof">
        <div className="grid gap-4 md:grid-cols-3">
          {["B2B Platform Launch", "Internal Tool Modernization", "SaaS Feature Acceleration"].map((name, index) => (
            <Card key={name} className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7280]">Case Study 0{index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">Placeholder for outcomes, delivery scope, and measurable results.</p>
            </Card>
          ))}
        </div>
      </Section>

      <section className="border-y border-[#E5E7EB] bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center md:px-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Have a product to build?</h2>
          <Button size="lg" className="gap-2">
            Book a Strategy Call <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <footer id="contact" className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="space-y-4">
            <Image src="/logo.png" alt="Asyncdot" width={160} height={32} className="h-7 w-auto md:h-8" />
            <p className="max-w-xs text-sm leading-relaxed text-[#6B7280]">The place you go when you are ready to build.</p>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7280]">Links</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7280]">Contact</h3>
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
