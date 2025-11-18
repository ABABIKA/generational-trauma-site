import SlideSectionThree from "../components/SlideSectionThree";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#694a2f] text-cream-100 px-6 py-16 font-serif">

      <h1 className="text-5xl font-bold text-center mb-12">
        Solutions & Interventions
      </h1>

      <div className="max-w-5xl mx-auto space-y-12 text-xl leading-relaxed">

        {/* INTRO SECTION */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Understanding the Roots</h2>
          <p>
            Before healing can take place, individuals and families must first 
            understand the origins of generational trauma and how it influences 
            their thoughts, emotions, and behaviors. Self-awareness lays the 
            foundation for meaningful change.
          </p>
        </section>

      </div>

      {/* STICKY SOLUTION SLIDES */}
      <SlideSectionThree
  slides={[
    {
      title: "Individual Solutions",
      subtitle: "Healing starts from within",
      bg: "#5f3f2d",
      content: (
  <>
    <p>
      Healing begins with recognizing and naming generational trauma within yourself. 
      Individuals can break harmful patterns by understanding symptoms, processing emotions, 
      and learning healthier coping strategies.
    </p>

    <ul className="list-disc list-inside space-y-2">
      <li>
        Identify personal trauma patterns through assessment tools like genograms, timelines,
        or talking with a clinician.
      </li>
      <li>
        Seek trauma-informed therapy such as TF-CBT, EMDR, narrative therapy, or guided imagery 
        to safely reprocess painful experiences.
      </li>
      <li>
        Practice physiological regulation: consistent sleep, movement, nutritious meals, 
        hydration, mindfulness, and grounding techniques.
      </li>
      <li>
        Build resilience with gratitude, purpose, and positive experiences that help re-regulate 
        stress responses and counteract epigenetic effects.
      </li>
    </ul>
  </>
),

    },
    {
      title: "Family Solutions",
      subtitle: "Breaking unhealthy patterns",
      bg: "#4b3325",
      content: (
  <>
    <p>
      Families can interrupt generational trauma by creating safer emotional environments,
      improving communication, and building consistent routines that reduce chaos and stress.
    </p>

    <ul className="list-disc list-inside space-y-2">
      <li>
        Engage in family therapy to rebuild trust, foster secure attachment, and learn 
        healthier patterns of communication.
      </li>
      <li>
        Create stable routines, clear boundaries, and predictable environments that buffer 
        children from toxic stress.
      </li>
      <li>
        Encourage “brave dialogues” — honest, validating conversations about past hurt, 
        expectations, and needs.
      </li>
      <li>
        Increase Positive Childhood Experiences (PCEs): children feeling heard, safe, 
        and supported by multiple caring adults.
      </li>
    </ul>
  </>
),
    },
    {
      title: "Community Solutions",
      subtitle: "Support systems matter",
      bg: "#3a2a1f",
      content: (
  <>
    <p>
      Community support is essential for healing because safety, belonging, and connection 
      help regulate the nervous system. For many groups—especially immigrants—community validation 
      is a key part of cultural and emotional recovery.
    </p>

    <ul className="list-disc list-inside space-y-2">
      <li>
        Expand access to trauma-informed community services including support groups, clubs, 
        mentorship programs, and youth spaces.
      </li>
      <li>
        Promote culturally competent mental health support in schools, clinics, faith organizations, 
        and immigrant communities.
      </li>
      <li>
        Encourage safe vulnerability through practices like “Observe → Validate → Release → Check,” 
        helping individuals share experiences without shame.
      </li>
      <li>
        Strengthen community belonging through shared cultural practices, events, and 
        connection with trusted adults and mentors.
      </li>
    </ul>
  </>
),
    },
    {
      title: "Societal Solutions",
      subtitle: "Policy, equity, and access",
      bg: "#291c14",
      content: (
  <>
    <p>
      Long-term healing requires reducing systemic barriers and ensuring trauma-informed care 
      is accessible and equitable, especially for marginalized or immigrant populations.
    </p>

    <ul className="list-disc list-inside space-y-2">
      <li>
        Improve access to affordable, multilingual, culturally aware mental health services 
        in schools, clinics, and community centers.
      </li>
      <li>
        Increase trauma-informed training for educators, healthcare workers, and public officials.
      </li>
      <li>
        Advocate for policies that address root causes of trauma—poverty, discrimination, 
        unstable housing, and lack of healthcare.
      </li>
      <li>
        Support funding for proven interventions like trauma-focused CBT, EMDR, narrative therapy, 
        and evidence-based PTSD treatments.
      </li>
    </ul>
  </>
),
    },
  ]}
/>
    </div>
  );
}
