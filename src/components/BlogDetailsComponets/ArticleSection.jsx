import React from "react";
 
const ArticleSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-4 dark:text-gray-200">
      {/* Introduction */}
      <h2 className="text-2xl font-semibold text-[#181D27] mb-2">Introduction</h2>
      <p className="mb-4 text-sm text-[#535862] font-medium leading-relaxed">
        In a world moving fast, there’s comfort in what’s familiar — and power
        in what’s new. At Krrivah, we believe good design doesn’t have to choose
        between the two. Instead, it finds harmony. In this post, we explore how
        tradition and modern architecture come together to create timeless
        homes.
      </p>

      {/* First Image */}
      <img
        src="image4.png"
        alt="Futuristic hallway"
        className="w-full md:h-auto h-[480px]  my-8"
      />

      {/* Blockquote */}
      <blockquote className=" text-2xl font-medium border-l-4 border-[#393F36] pl-4 italic text-[#212121] mb-4">
        “In a world older and more complete than ours they move finished and
        complete, gifted with extensions of the senses we have lost or never
        attained, living by voices we shall never hear.”
        <p className="mt-8 text-sm text-[#535862] mb-8 not-italic">
          — Olivia Bhatt, Design Researcher
        </p>
      </blockquote>

      {/* Traditional Ideas */}
      <h3 className="text-2xl  font-semibold  text-[#181D27] mb-2">
        Traditional ideas that inspire us
      </h3>
      <p className="mb-6 text-sm text-[#535862] font-medium  leading-relaxed">
        Many traditional Indian homes were built for community, climate, and
        craftsmanship. We take cues from such principles — shaded verandahs,
        internal courtyards, local stone — not just for their visual beauty, but
        their lasting purpose.
        <br />
        <br />
        Krrivah projects like Moira Villas reflect this deeply: cool natural
        finishes, calming symmetry, and a sense of openness that connects the
        indoors with the earth around.
      </p>

      {/* Modern Ideas */}
      <h3 className="text-2xl font-semibold mb-2 text-[#181D27]">
        What we bring from the modern world
      </h3>
      <p className="mb-8 text-sm text-[#535862] font-medium  leading-relaxed">
        Modern architecture offers us clarity — clean lines, purposeful spaces,
        and a lighter material footprint. We apply these elements through
        flexible layouts, clutter-free aesthetics, and seamless integration with
        technology and sustainability.
        <br />
        <br />
        By blending the old and the new, our homes feel grounded yet
        progressive.
      </p>

      {/* Second Image */}
      <img
        src="image5.png"
        alt="Modern building"
        className="w-full md:h-auto h-[517px]  my-8"
      />

      {/* Why it matters */}
      <h3 className="text-2xl font-semibold mb-2 text-[#181D27]">
        Why it matters?
      </h3>
      <p className="text-sm text-[#535862] font-medium  leading-relaxed">
        Homes that mix tradition with modernity don’t just age gracefully — they
        evolve with you. They reflect both memory and vision. They offer comfort
        with intention.
        <br />
        <br />
        Whether you’re building for your family, investing in a future space, or
        simply dreaming of a better way to live — this blend creates a
        foundation you can feel proud of.
      </p>
    </section>
  );
};

export default ArticleSection;