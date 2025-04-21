import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link
      to="/"
      className='flex gap-1 items-center transition-all duration-300 hover:scale-105 group'
    >
      <img 
        src="/LogoFenixTech.avif" 
        alt="Logo Fenix Technology" 
        className="w-12 h-12 lg:w-20 lg:h-20 object-contain"
      />
      <div className="hidden lg:block text-2xl font-bold font-display3">
        <p className='tracking-widest drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'>Fenix</p>
        <p className='text-cyan-400 text-lg drop-shadow-[0_2px_2px_rgba(0,149,182,0.3)]'>Technology</p>
      </div>
    </Link>
  );
};
