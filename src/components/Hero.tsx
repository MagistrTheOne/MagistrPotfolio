import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-black via-[#0f0f0f] to-black flex items-center justify-center overflow-hidden text-white font-poppins"
    >
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20...%3E')] opacity-10" />

      {/* Animated Auras */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="container px-6 z-10 text-center">
        {/* Studio Logo */}
        <div className="flex justify-center items-center gap-3 mb-6 text-sm text-neutral-400 tracking-widest uppercase">
          <Sparkles className="animate-ping text-white/70" />
          MAGISTRTHEONE STUDIO
          <Sparkles className="animate-ping text-white/70" />
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-white text-transparent bg-clip-text mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          MAGISTRTHEONE STUDIO
        </h1>

        <p className="text-xl md:text-3xl text-gray-300 font-light mb-2">
          Мы продадим <span className="text-white font-medium">дороже</span>
        </p>
        <p className="text-xl md:text-2xl text-gray-400 font-light mb-10">
          Мы не кодим с помощью <span className="text-white font-semibold">Vibe Coding</span>.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="https://t.me/Jkoffical2024"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg px-8 py-4 rounded-full border border-white/10 hover:border-white transition-all duration-300 hover:scale-105 flex items-center shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            Начать проект
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://t.me/Jkoffical2024"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white border border-white/20 hover:border-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-md"
          >
            Связаться в Telegram
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
