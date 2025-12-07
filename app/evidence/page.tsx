"use client";

import Image from "next/image";
import SlideSectionTwo from "../components/SlideSectionTwo";

export default function EvidencePage() {
  return (
    <div className="min-h-screen bg-[#694a2f] text-cream-100 px-6 py-16 font-serif">
      <h1 className="text-5xl font-bold text-center mb-16">
        Evidence & Research
      </h1>

      <SlideSectionTwo
        slides={[

          /* --------------------------------------------------------- */
          /* 1 — HOW TRAUMA PASSES THROUGH GENERATIONS                */
          /* --------------------------------------------------------- */
          {
            title: "How Trauma Passes Across Generations",
            subtitle: "Biological • Psychological • Behavioral • Social",
            bg: "#5c4031",
            content: (
              <>
                <p>
                  Research shows that traumatic stress does not get “inherited”
                  directly — but the *body’s response to stress* can be shaped
                  by trauma in previous generations. The Washington Post
                  explains that trauma can alter the function of stress-response
                  genes, potentially influencing anxiety, emotion regulation,
                  and sensitivity to threat.
                </p>

                <p>
                  Trauma also spreads through learned behavior. Children absorb
                  the emotional patterns of caregivers — hypervigilance, shame,
                  avoidance, emotional suppression — forming internal blueprints
                  for relationships and danger.
                </p>

                <ul className="list-disc list-inside mt-4 space-y-1">
                  <li>Possible epigenetic changes to stress-response genes</li>
                  <li>Children mirror a parent’s emotional world</li>
                  <li>Prenatal and early-life stress magnifies vulnerability</li>
                  <li>Historical/community trauma shapes worldview</li>
                </ul>

                <p className="mt-4">
                  Healing focuses on awareness, rebuilding safety, and
                  mind-body regulation to interrupt the cycle.
                </p>
              </>
            ),
            image: (
            <img
          src="/trauma-pass.png"
          className="rounded-xl shadow-lg w-full h-auto object-contain"
              />
            ),
          },

          /* --------------------------------------------------------- */
          /* 2 — WOMEN & PTSD / GENDERED TRAUMA                       */
          /* --------------------------------------------------------- */
          {
            title: "Women & Generational Trauma",
            subtitle: "Gendered Risk, PTSD, and Long-Term Impacts",
            bg: "#64472f",
            content: (
              <>
                <p>
                  Studies show women experience trauma at higher rates and are
                  *twice as likely* as men to develop PTSD. This vulnerability
                  connects to both gendered violence and the pressures of
                  caregiving roles that intensify stress after trauma.
                </p>

                <ul className="list-disc list-inside mt-4 space-y-1">
                  <li>1 in 3 women face physical or sexual violence</li>
                  <li>
                    Sexual assault is one of the strongest predictors of PTSD
                  </li>
                  <li>Women experience longer-lasting PTSD symptoms</li>
                  <li>
                    Caregiving roles can increase stress and trauma burden
                  </li>
                </ul>

                <p className="mt-4">
                  Trauma can lead to depression, chronic stress, dissociation,
                  eating disorders, substance abuse, relationship struggles, and
                  long-term negative health outcomes.
                </p>
              </>
            ),
          },

          /* --------------------------------------------------------- */
          /* 3 — PSYCHOLOGICAL CONSEQUENCES OF SEXUAL TRAUMA          */
          /* --------------------------------------------------------- */
          {
            title: "Psychological Consequences of Sexual Trauma",
            subtitle: "Short-Term • Long-Term • Generational Patterns",
            bg: "#6c4f32",
            content: (
              <>
                <p>
                  Sexual trauma creates both immediate and long-term emotional
                  effects. Short-term responses include fear, shock, confusion,
                  and withdrawal. While some survivors recover quickly, many
                  carry symptoms for years.
                </p>

                <ul className="list-disc list-inside mt-4 space-y-1">
                  <li>PTSD and chronic anxiety</li>
                  <li>Depression and emotional numbing</li>
                  <li>Eating disorders</li>
                  <li>Substance misuse</li>
                  <li>Difficulty with intimacy and relationships</li>
                  <li>Self-esteem damage and identity disruption</li>
                </ul>

                <p className="mt-4">
                  These long-term symptoms can influence parenting, attachment,
                  and emotional regulation — becoming part of generational
                  trauma patterns if untreated.
                </p>
              </>
            ),
          },

          /* --------------------------------------------------------- */
          /* 4 — IMMIGRATIONAL TRAUMA & ACCULTURATION STRESS          */
          /* --------------------------------------------------------- */
          {
            title: "Immigration & Intergenerational Trauma",
            subtitle: "Displacement • Survival Stress • Identity Conflict",
            bg: "#775636",
            content: (
              <>
                <p>
                  Immigration trauma stems from war, displacement, persecution,
                  economic pressure, or environmental crises. Refugee and
                  immigrant parents often carry unprocessed trauma that shapes
                  how children learn about danger, belonging, and identity.
                </p>

                <ul className="list-disc list-inside mt-4 space-y-1">
                  <li>Second-generation children inherit “survival rules”</li>
                  <li>Emotional silence used to preserve family stability</li>
                  <li>Role reversal (child becomes translator/caretaker)</li>
                  <li>Fear of deportation or instability affects development</li>
                </ul>

                <p className="mt-4">
                  Research highlights that children of immigrants often struggle
                  with perfectionism, guilt, anxiety, and identity conflict —
                  even if they were never exposed to the original trauma.
                </p>
              </>
            ),
          },

          /* --------------------------------------------------------- */
          /* 5 — HISTORICAL & RACIAL TRAUMA                           */
          /* --------------------------------------------------------- */
          {
            title: "Historical Trauma & Community Stress",
            subtitle: "Racism • Oppression • Displacement • Violence",
            bg: "#7f5d38",
            content: (
              <>
                <p>
                  Historical trauma refers to the collective emotional and
                  psychological injury carried across generations within
                  communities that have endured systemic oppression. Examples
                  include enslavement, genocide, colonization, forced
                  displacement, and racial violence.
                </p>

                <ul className="list-disc list-inside mt-4 space-y-1">
                  <li>Heightened stress reactivity</li>
                  <li>Mistrust in institutions</li>
                  <li>Chronic anxiety and depression</li>
                  <li>Identity wounds and internalized oppression</li>
                </ul>

                <p className="mt-4">
                  The effects ripple through families: emotional suppression,
                  hypervigilance, harsh survival behaviors, and altered
                  worldviews are often passed to younger generations.
                </p>
              </>
            ),
          },

          /* --------------------------------------------------------- */
          /* 6 — COLORISM & INTERNALIZED TRAUMA                       */
          /* --------------------------------------------------------- */
          {
            title: "Colorism & Internalized Trauma",
            subtitle: "Identity • Worth • Social Survival",
            bg: "#86643b",
            content: (
              <>
                <p>
                  Colorism — discrimination within the same racial or ethnic
                  group based on skin tone — has deep historical roots and acts
                  as a form of intergenerational trauma. It shapes identity,
                  belonging, and emotional safety within families.
                </p>

                <ul className="list-disc list-inside mt-4 space-y-1">
                  <li>Internalized belief in color-based hierarchy</li>
                  <li>Family conflict based on appearance</li>
                  <li>Shame tied to cultural identity</li>
                  <li>Long-term effects on self-esteem and relationships</li>
                </ul>

                <p className="mt-4">
                  This trauma contributes to emotional suppression, perfectionism,
                  and cycles of relational harm — especially in children trying
                  to meet beauty standards not rooted in their own culture.
                </p>
              </>
            ),
          },

        ]}
      />
    </div>
  );
}
