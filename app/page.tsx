"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import SlideSection from "./components/SlideSection";
import TitleLoader from "./components/TitleLoader";

export default function Home() {
  const slideIn = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    } as any,
  },
};

  return (
    <>
    <TitleLoader />   {/* 🔥 NEW — this appears first, then fades away */}
      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-[#2b1d0d] to-[#1f1a13] text-cream-100 py-20 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-12">

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/HDFS_PNG.png"
              alt="Illustration representing generational trauma"
              width={600}
              height={400}
              loading="eager"
              style={{ width: "auto", height: "auto" }}
              className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-serif font-semibold text-cream-100 mb-2">
              Generational Trauma
            </h1>
            <h2 className="text-xl md:text-2xl font-cursive italic text-cream-400 mb-6">
              Breaking the Cycle, Healing Forward
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-cream-200">
              The pain of the past can echo for decades — across families,
              communities, even cultures. This site explores how trauma passes
              between generations, and what we can do to break that cycle.
            </p>
          </div>

        </div>
      </div>

      {/* SPACER */}
      <div className="h-16 bg-[#50583a]" />

    {/* SCROLLING STORY SECTIONS */}
<div className="relative font-serif w-full">

  <SlideSection
    title="The Problem"
    label="Problem Overview"
    image={
      <div className="w-full h-full rounded-xl flex items-center justify-center">
        <Image
        src="/family_tree.png"
        alt="Family Tree Picture"
        width={600}
        height={600}
        className="object-cover w-full h-full"
        />
      </div>
    }
  >
    <p className="text-lg leading-relaxed mb-6">
    Generational Trauma or Inter-generational Trauma is the process of transferring psychological trauma from generation to generation.  This can include many different factors and life problems that occur in an ancestor’s life, with the resulting distress passed to descendants.
    </p>

    <p className="text-lg leading-relaxed mb-6">
      This transfer has potential heritable changes in genomes than can be influenced by environmental events, leading to the wide range of trauma related mental health conditions.
    </p>

    <p className="text-lg leading-relaxed mb-6">
    To understand the problem further, the origin of inter-generational trauma must be acknowledged and addressed. With this type of approach, the proper intervention becomes possible to help those from past trauma and build better lives for future generations. 
    </p>
  </SlideSection>



  <SlideSection
    title="Why Does it Matter?"
    label="The Why"
    image={<img src="/healing.png" className="rounded-xl" />}
  >
    <p className="text-lg leading-relaxed">
      Understanding generational trauma is crucial for breaking harmful cycles and fostering healing within families and communities. It sheds light on the root causes of various social and mental health issues, enabling more effective interventions and support systems. By addressing generational trauma, we can promote resilience, improve well-being, and create a healthier future for subsequent generations.
    </p>
  </SlideSection>



  <SlideSection
    title="What Causes It?"
    label="The Contributions"
    image={<img src="/contributions.png" className="rounded-xl" />}
  >
    <p className="text-lg leading-relaxed">
      From family patterns to cultural oppression, many factors contribute to how trauma is passed on. This includes:
      </p>
      <ul className="list-disc list-inside mt-4">
        <li>Parental behaviors and coping mechanisms</li>
        <li>Environmental stressors and socioeconomic factors</li>
        <li>Cultural and historical traumas</li>
        <li>Epigenetic changes affecting gene expression</li>
      </ul>
    
  </SlideSection> 

    <SlideSection
    title="What is Affected?"
    label="The Outcomes"
    image={<img src="/outcomes.png" className="rounded-xl" />}
  >
    <p className="text-lg leading-relaxed">
      Generational trauma can impact nearly every aspect of a person's life, including:
    </p>
      <ul className="list-disc list-inside mt-4">
        <li>Mental health (anxiety, depression, PTSD)</li>
        <li>Physical health (chronic illness, stress-related conditions)</li>
        <li>Relationships and attachment styles</li>
        <li>Self-esteem and identity formation</li>
        <li>Behavioral patterns and coping mechanisms</li>
        <li>Educational and occupational outcomes</li>
      </ul>
      <p className="mt-4">
        These effects can ripple through families and communities, shaping beliefs, behaviors, and opportunities for generations to come.
    
    </p>
  </SlideSection> 

      </div>
    </>
  );
}
