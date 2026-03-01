export default function Skills() {
  const SkillItem = ({ src, name }) => (
  <div className="flex flex-col items-center gap-3 group cursor-pointer">
    
    {/* Icon with glow border */}
    <div
  className="
    w-16 h-16 flex items-center justify-center rounded-full
    border border-white/20
    transition-all duration-300
    group-hover:scale-110
    group-hover:border-white
    group-hover:shadow-[0_0_18px_rgba(255,255,255,0.6)]
  "
>
  <img
    src={src}
    alt={name}
    className="w-9 h-9 object-contain bg-transparent mix-blend-screen"
  />
</div>


    {/* Label */}
    <p className="text-sm text-gray-400 group-hover:text-white transition">
      {name}
    </p>
  </div>
);


  const Section = ({ title, children }) => (
    <div className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-6
                    transition hover:border-white/20">
      <h3 className="text-lg font-semibold mb-6 text-white">
        {title}
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-8">
        {children}
      </div>
    </div>
  );

  return ( 
  
    <main id="skills" className="bg-black pb-28">
      <div  className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 id="skills" className="text-5xl font-extrabold text-white mb-6">
            Skills & Technologies
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Technologies I actively use to design, build, and scale modern web applications.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Frontend */}
          <Section title="🎨 Frontend">
            <SkillItem src="/assets/icons/react.png" name="React" />
            <SkillItem src="/assets/icons/nextjs.png" name="Next.js" />
            <SkillItem src="/assets/icons/JS.png" name="JavaScript" />
            <SkillItem src="/assets/icons/TS.png" name="TypeScript" />
            <SkillItem src="/assets/icons/html.png" name="HTML" />
            <SkillItem src="/assets/icons/css.png" name="CSS" />
            <SkillItem src="/assets/icons/tailwind.png" name="Tailwind CSS" />
            <SkillItem src="/assets/icons/three.png" name="Three.js" />
          </Section>

          {/* Backend */}
          <Section title="⚙️ Backend">
            <SkillItem src="/assets/icons/node.png" name="Node.js" />
            <SkillItem src="/assets/icons/express.png" name="Express" />
            <SkillItem src="/assets/icons/python.png" name="Python" />
            <SkillItem src="/assets/icons/c++.png" name="C++" />
          </Section>

          {/* Databases */}
          <Section title="🗄️ Databases">
            <SkillItem src="/assets/icons/mongodb2.png" name="MongoDB" />
            <SkillItem src="/assets/icons/mysql.png" name="MySQL" />
          </Section>

          {/* Tools */}
          <Section title="🛠️ Tools & Design">
            <SkillItem src="/assets/icons/figma.png" name="Figma" />
          </Section>

        </div>
      </div>
    </main>
  );
}
