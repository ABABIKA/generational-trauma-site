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
              <div className="flex flex-col items-center">
                <img
                  src="/trauma-pass.png"
                  className="rounded-xl shadow-lg w-full h-auto object-contain"
                  alt="How Trauma Is Passed Down"
                />

                <p className="text-xs text-cream-300 mt-2 opacity-70">
                  Source: Medica Mondiale. “Transgenerational Trauma.” Retrieved
                  from: https://medicamondiale.org/en/violence-against-women/overcoming-trauma/transgenerational-trauma
                </p>
              </div>
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
                  <li>Sexual assault is one of the strongest predictors of PTSD</li>
                  <li>Women experience longer-lasting PTSD symptoms</li>
                  <li>Caregiving roles can increase stress and trauma burden</li>
                </ul>

                <p className="mt-4">
                  Trauma can lead to depression, chronic stress, dissociation,
                  eating disorders, substance abuse, relationship struggles, and
                  long-term negative health outcomes.
                </p>
              </>
            ),
            image: (
              <div className="flex flex-col items-center">
                <img
                  src="/WM-Trauma-Stat.png"
                  className="rounded-xl shadow-lg w-full h-auto object-contain"
                  alt="Who is Most Likely to Experience ACEs?"
                />
                <p className="text-xs text-cream-300 mt-2 opacity-70">
                  Source: Georgetown University School of Nursing. “Who Is Most
                  Vulnerable to Adverse Childhood Experiences?” Retrieved from:
                  https://online.nursing.georgetown.edu/blog/women-trauma-ptsd/
                </p>
              </div>
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
                  <li>Difficulty with intimacy</li>
                  <li>Identity disruption</li>
                </ul>

                <p className="mt-4">
                  These long-term symptoms can influence parenting, attachment,
                  and emotional regulation — becoming part of generational
                  trauma patterns if untreated.
                </p>
              </>
            ),
            image: (
              <div className="flex flex-col items-center">
                <img
                  src="/Body-Mind-Soul.png"
                  className="rounded-xl shadow-lg w-full h-auto object-contain"
                  alt="Body, Mind, and Soul Trauma Impact"
                />
                <p className="text-xs text-cream-300 mt-2 opacity-70">
                  Source: Medica Mondiale. “Overcoming Trauma: Transgenerational
                  Trauma.” Retrieved from:
                  https://medicamondiale.org/en/violence-against-women/overcoming-trauma/transgenerational-trauma
                </p>
              </div>
            ),
          },

          /* --------------------------------------------------------- */
          /* 4 — IMMIGRATIONAL TRAUMA                                 */
          /* --------------------------------------------------------- */
          {
            title: "Immigration & Intergenerational Trauma",
            subtitle: "Displacement • Survival Stress • Identity Conflict",
            bg: "#775636",
            content: (
              <>
                <p>
                  Immigration trauma stems from war, displacement, persecution,
                  economic pressure, or environmental crises. These unresolved
                  stressors shape how children learn about fear, belonging, and
                  identity.
                </p>

                <ul className="list-disc list-inside mt-4 space-y-1">
                  <li>Children inherit “survival rules”</li>
                  <li>Emotional silence preserves stability</li>
                  <li>Role reversal (child as translator/caretaker)</li>
                  <li>Fear of deportation or instability</li>
                </ul>

                <p className="mt-4">
                  Children of immigrants often struggle with perfectionism,
                  guilt, anxiety, and identity conflict — even without direct
                  exposure to trauma.
                </p>
              </>
            ),
            image: (
              <div className="flex flex-col items-center">
                <img
                  src="/IM-Trauma.png"
                  className="rounded-xl shadow-lg w-full h-auto object-contain"
                  alt="Immigrant Trauma"
                />
                <p className="text-xs text-cream-300 mt-2 opacity-70">
                  Source: Immigrant Learning Center (ILC). “Understanding
                  Immigrant Trauma.” Retrieved from:
                  https://www.ilctr.org/about-immigrants/ilc-publications-and-resources/understanding-immigrant-trauma/
                </p>
              </div>
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
                  Historical trauma refers to the collective emotional injury
                  carried across generations within marginalized communities who
                  have experienced systemic violence, colonization, or forced
                  displacement.
                </p>

                <ul className="list-disc list-inside mt-4 space-y-1">
                  <li>Heightened stress reactivity</li>
                  <li>Mistrust in institutions</li>
                  <li>Chronic anxiety and depression</li>
                  <li>Identity wounds and internalized oppression</li>
                </ul>

                <p className="mt-4">
                  Emotional suppression, hypervigilance, and harsh survival
                  behaviors are often passed to younger generations.
                </p>
              </>
            ),
            image: (
              <div className="flex flex-col items-center">
                <img
                  src="/NA-Historical-Trauma.png"
                  className="rounded-xl shadow-lg w-full h-auto object-contain"
                  alt="Historical Trauma Among Native Americans"
                />
                <p className="text-xs text-cream-300 mt-2 opacity-70">
                  Image courtesy of Arcsault Tribe. “Native Americans Experience
                  Intergenerational and Historical Trauma.” Retrieved from:
                  https://www.arcsaulttribe.com/arc-articles/native-americans-experience-intergenerational-and-historical-trauma
                </p>
              </div>
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
                  group based on skin tone — acts as a form of intergenerational
                  trauma. It shapes identity, belonging, and emotional safety.
                </p>

                <ul className="list-disc list-inside mt-4 space-y-1">
                  <li>Internalized color hierarchy</li>
                  <li>Family conflict</li>
                  <li>Shame tied to identity</li>
                  <li>Long-term effects on relationships</li>
                </ul>

                <p className="mt-4">
                  Colorism contributes to emotional suppression, perfectionism,
                  and relational harm — especially in children absorbing harmful
                  beauty standards.
                </p>
              </>
            ),
            image: (
              <div className="flex flex-col items-center">
                <img
                  src="/Colorism-trauma.png"
                  className="rounded-xl shadow-lg w-full h-auto object-contain"
                  alt="Colorism Trauma"
                />
                <p className="text-xs text-cream-300 mt-2 opacity-70">
                  Image courtesy of LHS Lightning Flash. “Colorism and Its
                  Existence Within Society.” Retrieved from:
                  https://lrhslightningflash.com/4545/opinions/colorism-and-its-existence-within-society/
                </p>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
