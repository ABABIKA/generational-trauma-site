export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#694a2f] text-cream-100 px-6 py-20 font-serif">
      
      <h1 className="text-5xl font-bold text-center mb-12">
        About This Project
      </h1>

 <div className="max-w-4xl mx-auto text-xl leading-relaxed space-y-10">

            <section>
          <h2 className="text-3xl font-semibold mb-3">Our Purpose</h2>
          <p>
            This project was created to highlight the impact of generational trauma and
            raise awareness about how psychological pain can echo through families and 
            communities. By visualizing the problem, explaining the causes, and exploring 
            the solutions, we aim to support healing and break destructive cycles.
          </p>
        </section>

         <section>
          <h2 className="text-3xl font-semibold mb-3">Who We Are</h2>
          <p>
            We are a group of College students who have come together to create this project as part of our coursework.
            Our team is passionate about mental health and dedicated to making a positive impact through education and awareness.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-3">Why It Matters</h2>
          <p>
            Generational trauma affects millions of people across the world.
            By learning how trauma is passed on, why it happens, and how it can be addressed,
            we hope to inspire awareness, empathy, and positive change.
          </p>
        </section>
          
        </div>
    </div>
    );
}