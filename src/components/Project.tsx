import { Sparkles, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "NSI",
    tech: "React + Tailwind + Supabase",
    result: "NSI — New soviet intelligence",
  },
  {
    title: "AI-сервис резюме",
    tech: "Next.js + OpenAI API",
    result: "Генерация PDF и SEO-формат",
  },
  {
    title: "MagistrArt — потому что нам важен дизайн",
    tech: "React + Tailwind",
    result: "Замена Figma на базе ИИ",
  },
  {
    title: "NSI — Новая Советская Империя",
    tech: "React + Tailwind + Neon + OLLAMA",
    result: "РПГ-платформа с лором",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen py-20 px-4 bg-black text-white font-poppins overflow-hidden"
    >
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 text-yellow-100 uppercase tracking-widest mb-2">
          <Sparkles className="w-5 h-5 animate-pulse text-yellow-500/70" />
          Проекты MAGISTRSTUDIO
          <Sparkles className="w-5 h-5 animate-pulse text-yellow-500/70" />
        </div>
        <h3 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-100 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(234,179,8,0.4)]">
          Наши проекты
        </h3>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 w-full">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="relative mx-auto w-full px-6 py-10 bg-gradient-to-br from-[#0f0f0f] via-[#111] to-[#0d0d0d] bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.05),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,215,0,0.07),transparent_50%)] rounded-3xl border border-yellow-900/20 shadow-[0_0_60px_rgba(255,215,0,0.1)] hover:shadow-[0_0_140px_rgba(255,215,0,0.25)] transition-all duration-700 ease-in-out transform hover:scale-[1.02] hover:-rotate-1 group overflow-hidden backdrop-blur-md"
          >
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,215,0,0.08),_transparent_70%)] blur-[100px] group-hover:blur-[120px] transition duration-700"></div>

            <div className="relative z-10">
              <h4 className="text-3xl sm:text-4xl font-semibold text-yellow-100 mb-4 tracking-tight">
                {proj.title}
              </h4>
              <p className="text-base sm:text-lg text-yellow-600 mb-2">
                <span className="text-yellow-500 font-medium">Технологии:</span>{" "}
                <span className="text-yellow-300">{proj.tech}</span>
              </p>
              <p className="text-base sm:text-lg text-yellow-700">
                <span className="text-yellow-500 font-medium">Результат:</span>{" "}
                <span className="text-yellow-200">{proj.result}</span>
              </p>
            </div>

            <div className="absolute bottom-5 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <ArrowRight className="text-yellow-300 w-6 h-6" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
