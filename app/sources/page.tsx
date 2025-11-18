"use client";

import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SourcesPage() {
  return (
    <div className="min-h-screen bg-[#694a2f] text-cream-100 px-6 py-16 font-serif">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* PAGE TITLE */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-4xl sm:text-5xl font-bold text-center"
        >
          Sources Cited
        </motion.h1>

        {/* --- CATEGORY: GENERAL TRAUMA --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold border-b border-cream-200/30 pb-2">
            General Generational Trauma
          </h2>

          <div className="space-y-6">
            <div className="hanging-indent">
              Bell, K. (2023, June 12).{" "}
              <em>How trauma passes from one generation to the next</em>. The Washington Post.{" "}
              <a
                href="https://www.washingtonpost.com/wellness/2023/06/12/generational-trauma-passed-healing/"
                className="source-link"
                target="_blank"
              >
                https://www.washingtonpost.com/.../generational-trauma
              </a>
            </div>
          </div>
        </motion.section>

        {/* --- CATEGORY: WOMEN + PTSD --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold border-b border-cream-200/30 pb-2">
            Trauma in Women & PTSD
          </h2>

          <div className="space-y-6">
            <div className="hanging-indent">
              American Psychological Association. (n.d.).{" "}
              <em>Women and trauma</em>.{" "}
              <a
                href="https://www.apa.org/topics/women-girls/women-trauma"
                className="source-link"
                target="_blank"
              >
                https://www.apa.org/.../women-trauma
              </a>
            </div>

            <div className="hanging-indent">
              National Resource Center on Domestic Violence. (2011).{" "}
              <em>Psychological consequences of sexual trauma</em>.{" "}
              <a
                href="https://vawnet.org/material/psychological-consequences-sexual-trauma"
                className="source-link"
                target="_blank"
              >
                https://vawnet.org/.../sexual-trauma
              </a>
            </div>

            <div className="hanging-indent">
              U.S. Department of Veterans Affairs. (2022).{" "}
              <em>PTSD research on women</em>.{" "}
              <a
                href="https://www.ptsd.va.gov/professional/treat/specific/ptsd_research_women.asp"
                className="source-link"
                target="_blank"
              >
                https://www.ptsd.va.gov/.../ptsd_women
              </a>
            </div>
          </div>
        </motion.section>

        {/* --- CATEGORY: IMMIGRATION TRAUMA --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold border-b border-cream-200/30 pb-2">
            Immigration, Refugee & Historical Trauma
          </h2>

          <div className="space-y-6">
            <div className="hanging-indent">
              Brockie, T. N., Elm, J. H., & Walls, M. L. (2021).{" "}
              <em>Historical trauma and descendants’ well-being</em>. AMA Journal of Ethics.{" "}
              <a
                href="https://journalofethics.ama-assn.org/article/historical-trauma-and-descendants-well-being/2021-06"
                className="source-link"
                target="_blank"
              >
                https://journalofethics.ama-assn.org/.../well-being
              </a>
            </div>

            <div className="hanging-indent">
              Sangalang, C. C., & Vang, C. (2017).{" "}
              <em>Intergenerational trauma in refugee families</em>.{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5362358"
                className="source-link"
                target="_blank"
              >
                https://pmc.ncbi.nlm.nih.gov/.../PMC5362358
              </a>
            </div>

            <div className="hanging-indent">
              Harvard Graduate School of Education. (2022).{" "}
              <em>The impact of immigration on families</em>.{" "}
              <a
                href="https://www.gse.harvard.edu/ideas/news/22/06/impact-immigration-families"
                className="source-link"
                target="_blank"
              >
                https://www.gse.harvard.edu/.../families
              </a>
            </div>

            <div className="hanging-indent">
              International Organization for Migration. (2024).{" "}
              <em>World Migration Report 2024</em>.{" "}
              <a
                href="https://worldmigrationreport.iom.int/msite/wmr-2024-interactive/"
                className="source-link"
                target="_blank"
              >
                https://worldmigrationreport.iom.int/
              </a>
            </div>

            <div className="hanging-indent">
              European Parliament. (2020, June 24).{" "}
              <em>Exploring migration causes: Why people migrate</em>.{" "}
              <a
                href="https://www.europarl.europa.eu/topics/en/article/20200624STO81906/exploring-migration-causes-why-people-migrate"
                className="source-link"
                target="_blank"
              >
                https://www.europarl.europa.eu/.../migrate
              </a>
            </div>

            <div className="hanging-indent">
              Jones, T. (2023).{" "}
              <em>How children of immigrants struggle with mental health</em>{" "}
              [Video]. YouTube.{" "}
              <a
                href="https://m.youtube.com/watch?v=UZXJPan4Lqc"
                className="source-link"
                target="_blank"
              >
                https://m.youtube.com/watch?v=UZXJPan4Lqc
              </a>
            </div>
          </div>
        </motion.section>

        {/* --- CATEGORY: COLORISM TRAUMA --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold border-b border-cream-200/30 pb-2">
            Colorism & Intergenerational Trauma
          </h2>

          <div className="space-y-6">
            <div className="hanging-indent">
              Zero to Three. (2022).{" "}
              <em>Colorism: A legacy of historical trauma in parent-child relationships</em>.{" "}
              <a
                href="https://www.zerotothree.org/wp-content/uploads/2022/10/Colorism-A-Legacy-of-Historical-Trauma-in-Parent-Child-Relationships_-Clinical-Research-and-Personal-Perspectives.pdf"
                className="source-link"
                target="_blank"
              >
                PDF Link
              </a>
            </div>

            <div className="hanging-indent">
              SHOCK Metaphysics. (n.d.).{" "}
              <em>The trauma response of colorism</em>.{" "}
              <a
                href="https://shockmetaphysics.com/the-trauma-response-of-colorism/"
                className="source-link"
                target="_blank"
              >
                https://shockmetaphysics.com/.../colorism
              </a>
            </div>

            <div className="hanging-indent">
              Ortega-Williams, A., Crutchfield, J., & Hall, J. (2021).{" "}
              <em>The colorist-historical trauma framework</em>.{" "}
              <a
                href="https://journals.sagepub.com/doi/full/10.1177/1468017319890083"
                className="source-link"
                target="_blank"
              >
                https://journals.sagepub.com/.../1468017319890083
              </a>
            </div>

            <div className="hanging-indent">
              Williams, T. (2020).{" "}
              <em>Unveiling intergenerational trauma in Jamaican households</em>.{" "}
              <a
                href="https://digitalcommons.unf.edu/cgi/viewcontent.cgi?article=1053&context=dhi"
                className="source-link"
                target="_blank"
              >
                https://digitalcommons.unf.edu/.../1053
              </a>
            </div>

            <div className="hanging-indent">
              Psychology Today. (2024).{" "}
              <em>Color is more than skin deep</em>.{" "}
              <a
                href="https://www.psychologytoday.com/us/blog/communal-healing/202410/color-is-more-than-skin-deep"
                className="source-link"
                target="_blank"
              >
                https://www.psychologytoday.com/.../skin-deep
              </a>
            </div>
          </div>
        </motion.section>

        {/* --- CATEGORY: SOLUTIONS & INTERVENTIONS --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold border-b border-cream-200/30 pb-2">
            Solutions & Interventions
          </h2>

          <div className="space-y-6">
            <div className="hanging-indent">
              Counseling Today. (2020).{" "}
              <em>Generational trauma: Uncovering and interrupting the cycle</em>.{" "}
              <a
                href="https://www.counseling.org/publications/counseling-today-magazine/article-archive/article/legacy/generational-trauma-uncovering-and-interrupting-the-cycle"
                className="source-link"
                target="_blank"
              >
                https://www.counseling.org/.../intergenerational-trauma
              </a>
            </div>

            <div className="hanging-indent">
              Indiana University Health. (2022).{" "}
              <em>Breaking the cycle of adverse childhood experiences</em>.{" "}
              <a
                href="https://iuhealth.org/thrive/generational-trauma-breaking-the-cycle-of-adverse-childhood-experiences"
                className="source-link"
                target="_blank"
              >
                https://iuhealth.org/.../breaking-the-cycle
              </a>
            </div>

            <div className="hanging-indent">
              Jones, C. (2019).{" "}
              <em>Breaking the cycle of generational trauma</em>.{" "}[Video]. TED.
              <a
              href="https://www.ted.com/talks/candice_jones_breaking_the_cycle_of_generational_trauma"
                className="source-link"
                target="_blank"
              >
                https://www.ted.com/.../generational_trauma
              </a>
            </div>

            <div className="hanging-indent">
              Jones, T.(2023).{" "}
              <em>Observe → Validate → Release & Share → Check: Healing immigration trauma</em>.{" "}[Video]. YouTube.
              <a
                href="https://m.youtube.com/watch?v=UZXJPan4Lqc"
                className="source-link"
                target="_blank"
              >
                https://m.youtube.com/watch?v=UZXJPan4Lqc
              </a>
            </div>

            <div className="hanging-indent">
              American Psychological Association. (n.d.).{" "}
,              <em>PTSD treatment options for women.</em>.{" "}
              <a
              href="https://www.apa.org/topics/women-girls/women-trauma"
                className="source-link"
                target="_blank"
              >
                https://www.apa.org/.../women-trauma
              </a>
            </div>

            
          </div>
        </motion.section>
      </div>

      {/* STYLES */}
      <style>
        {`
          .hanging-indent {
            padding-left: 1.5rem;
            text-indent: -1.5rem;
            line-height: 1.7;
          }

          .source-link {
            color: #ffedcc;
            text-decoration: underline;
          }

          .source-link:hover {
            color: #fff6e8;
          }
        `}
      </style>
    </div>
  );
}
