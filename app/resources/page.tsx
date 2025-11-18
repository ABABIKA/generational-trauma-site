"use client";

import { useState, ReactNode } from "react";
import ResourceCarousel from "../components/ResourceCarousel";

type AccordionProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

function AccordionSection({ title, children, defaultOpen = false }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl bg-[#5a3b26]/70 border border-[#d8c3a6]/20 mb-4 overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-serif text-xl text-cream-50">{title}</span>
        <span className="text-cream-200 text-xl">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 text-cream-100 text-sm sm:text-base leading-relaxed space-y-3">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ResourcesPage() {
  const slides = [
    {
      title: "Find Trauma-Informed Support",
      subtitle: "Therapists, hotlines, and community resources.",
      body: "Explore directories and tools to connect with safe, culturally aware, trauma-informed care.",
    },
    {
      title: "Learn About Generational Trauma",
      subtitle: "Articles, organizations, and science-based explanations.",
      body: "Understand how trauma can move through families — and how healing can, too.",
    },
    {
      title: "Support for Women, Immigrants & BIPOC Communities",
      subtitle: "Specialized mental health resources for those most impacted.",
      body: "Find spaces that recognize identity, culture, and lived experience as part of healing.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#694a2f] to-[#2e1f12] text-cream-100 px-6 py-16 font-serif">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            Resources & Support
          </h1>
          <p className="text-cream-200 text-sm sm:text-base max-w-2xl mx-auto">
            This page shares trauma-informed resources for learning, therapy, and
            support. It is not a replacement for professional care, but a starting
            point for finding help.
          </p>
        </header>

        {/* Carousel */}
        <ResourceCarousel slides={slides} />

        {/* Crisis Support (always visible) */}
        <section className="mb-8 mt-4">
          <h2 className="text-2xl font-semibold mb-4">💬 If You Need Help Now</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-[#5a3b26]/80 border border-[#d8c3a6]/30 rounded-2xl p-4 text-sm sm:text-base">
              <h3 className="font-semibold mb-1">988 Suicide & Crisis Lifeline (U.S.)</h3>
              <p className="mb-2">
                Call or text <span className="font-semibold">988</span> for free, confidential
                24/7 emotional support.
              </p>
              <a
                href="https://988lifeline.org"
                target="_blank"
                className="underline text-cream-100/90"
              >
                988lifeline.org
              </a>
            </div>

            <div className="bg-[#5a3b26]/80 border border-[#d8c3a6]/30 rounded-2xl p-4 text-sm sm:text-base">
              <h3 className="font-semibold mb-1">Crisis Text Line</h3>
              <p className="mb-2">
                Text <span className="font-semibold">HOME</span> to{" "}
                <span className="font-semibold">741741</span> to connect with a
                trained crisis counselor.
              </p>
              <a
                href="https://www.crisistextline.org"
                target="_blank"
                className="underline text-cream-100/90"
              >
                crisistextline.org
              </a>
            </div>

            <div className="bg-[#5a3b26]/80 border border-[#d8c3a6]/30 rounded-2xl p-4 text-sm sm:text-base">
              <h3 className="font-semibold mb-1">National Domestic Violence Hotline</h3>
              <p className="mb-2">
                Call <span className="font-semibold">1-800-799-SAFE (7233)</span> or
                chat online for confidential support.
              </p>
              <a
                href="https://www.thehotline.org"
                target="_blank"
                className="underline text-cream-100/90"
              >
                thehotline.org
              </a>
            </div>

            <div className="bg-[#5a3b26]/80 border border-[#d8c3a6]/30 rounded-2xl p-4 text-sm sm:text-base">
              <h3 className="font-semibold mb-1">RAINN (Sexual Assault Hotline)</h3>
              <p className="mb-2">
                Call <span className="font-semibold">1-800-656-HOPE (4673)</span> or
                use the online chat for support after sexual violence.
              </p>
              <a
                href="https://www.rainn.org"
                target="_blank"
                className="underline text-cream-100/90"
              >
                rainn.org
              </a>
            </div>
          </div>
        </section>

        {/* Accordions */}
        <section className="mt-10 space-y-3">

          {/* A. Trauma Basics & Learning */}
          <AccordionSection title="Trauma Basics & Learning" defaultOpen>
            <p>
              These resources explain what trauma and generational trauma are, how
              they affect the brain and body, and how healing can begin.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <a
                  href="https://developingchild.harvard.edu"
                  target="_blank"
                  className="underline"
                >
                  Harvard Center on the Developing Child
                </a>{" "}
                – toxic stress, ACEs, resilience, and brain development.
              </li>
              <li>
                <a
                  href="https://www.apa.org"
                  target="_blank"
                  className="underline"
                >
                  American Psychological Association (APA)
                </a>{" "}
                – articles on PTSD, women and trauma, and intergenerational stress.
              </li>
              <li>
                <a
                  href="https://www.nimh.nih.gov"
                  target="_blank"
                  className="underline"
                >
                  National Institute of Mental Health (NIMH)
                </a>{" "}
                – information on anxiety, depression, and trauma-related conditions.
              </li>
              <li>
                <a
                  href="https://www.samhsa.gov/trauma-violence"
                  target="_blank"
                  className="underline"
                >
                  SAMHSA: Trauma & Violence
                </a>{" "}
                – trauma-informed care and community-level resources.
              </li>
            </ul>
          </AccordionSection>

          {/* B. Therapy & Professional Help */}
          <AccordionSection title="Therapy & Professional Help">
            <p>
              These tools can help you find trauma-informed therapists or learn about
              evidence-based treatments like CBT, EMDR, and trauma-focused care.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <a
                  href="https://www.psychologytoday.com/us/therapists"
                  target="_blank"
                  className="underline"
                >
                  Psychology Today – Therapist Finder
                </a>{" "}
                (filter by trauma, EMDR, language, insurance, and more).
              </li>
              <li>
                <a
                  href="https://www.inclusivetherapists.com"
                  target="_blank"
                  className="underline"
                >
                  Inclusive Therapists
                </a>{" "}
                – focus on marginalized communities and culturally responsive care.
              </li>
              <li>
                <a
                  href="https://openpathcollective.org"
                  target="_blank"
                  className="underline"
                >
                  Open Path Collective
                </a>{" "}
                – reduced-fee in-person and online therapy.
              </li>
              <li>
                <a
                  href="https://www.emdria.org/find-a-therapist/"
                  target="_blank"
                  className="underline"
                >
                  EMDRIA Therapist Directory
                </a>{" "}
                – find EMDR-trained trauma therapists.
              </li>
              <li>
                <a
                  href="https://www.nctsn.org"
                  target="_blank"
                  className="underline"
                >
                  National Child Traumatic Stress Network (NCTSN)
                </a>{" "}
                – resources for children, families, and professionals.
              </li>
            </ul>
          </AccordionSection>

          {/* C. Support for Women & PTSD */}
          <AccordionSection title="Support for Women & PTSD">
            <p>
              Women and girls face higher rates of sexual and interpersonal trauma. These
              resources focus on their experiences and healing.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <a
                  href="https://www.apa.org/topics/women-girls/women-trauma"
                  target="_blank"
                  className="underline"
                >
                  APA – Women & Trauma
                </a>{" "}
                – overview of why women are at greater risk for PTSD.
              </li>
              <li>
                <a
                  href="https://vawnet.org"
                  target="_blank"
                  className="underline"
                >
                  VAWnet (Violence Against Women Network)
                </a>{" "}
                – research and tools on violence against women and healing.
              </li>
              <li>
                <a
                  href="https://www.ptsd.va.gov/professional/treat/specific/ptsd_research_women.asp"
                  target="_blank"
                  className="underline"
                >
                  VA – Research on Women, Trauma, and PTSD
                </a>
              </li>
              <li>
                <a
                  href="https://www.rainn.org"
                  target="_blank"
                  className="underline"
                >
                  RAINN
                </a>{" "}
                – support for survivors of sexual assault.
              </li>
            </ul>
          </AccordionSection>

          {/* D. Immigrant & Refugee Family Support */}
          <AccordionSection title="Immigrant & Refugee Family Support">
            <p>
              These resources speak to trauma connected to migration, displacement, legal
              status, and intergenerational survival stress.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <a
                  href="https://refugeehealthta.org"
                  target="_blank"
                  className="underline"
                >
                  Refugee Health Technical Assistance Center
                </a>{" "}
                – tools for refugee mental health.
              </li>
              <li>
                <a
                  href="https://www.migrationpolicy.org"
                  target="_blank"
                  className="underline"
                >
                  Migration Policy Institute
                </a>{" "}
                – research on migration, families, and policy.
              </li>
              <li>
                <a
                  href="https://www.gse.harvard.edu/ideas/news/22/06/impact-immigration-families"
                  target="_blank"
                  className="underline"
                >
                  Impact of Immigration on Families – Harvard GSE
                </a>
              </li>
              <li>
                <a
                  href="https://www.unhcr.org"
                  target="_blank"
                  className="underline"
                >
                  UNHCR
                </a>{" "}
                – support and information for refugees globally.
              </li>
            </ul>
          </AccordionSection>

          {/* E. BIPOC & Colorism Trauma Resources */}
          <AccordionSection title="BIPOC & Colorism-Related Trauma">
            <p>
              These resources address racial trauma, colorism, and culturally grounded
              healing for BIPOC communities.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <a
                  href="https://therapyforblackgirls.com"
                  target="_blank"
                  className="underline"
                >
                  Therapy for Black Girls
                </a>{" "}
                – directory and podcasts centered on Black women’s mental health.
              </li>
              <li>
                <a
                  href="https://therapyforblackmen.org"
                  target="_blank"
                  className="underline"
                >
                  Therapy for Black Men
                </a>{" "}
                – mental health support and provider directory.
              </li>
              <li>
                <a
                  href="https://www.asianmhc.org"
                  target="_blank"
                  className="underline"
                >
                  Asian Mental Health Collective
                </a>{" "}
                – community and therapist directory.
              </li>
              <li>
                <a
                  href="https://www.psychologytoday.com/us/blog/culturally-speaking/201901/colorism-is-more-skin-deep"
                  target="_blank"
                  className="underline"
                >
                  Color Is More Than Skin Deep – Psychology Today
                </a>
              </li>
            </ul>
          </AccordionSection>
        </section>
      </div>
    </div>
  );
}
