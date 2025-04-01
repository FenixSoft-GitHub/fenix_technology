import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link
      to="/"
      className="transition-all duration-300 hover:scale-[1.02]"
    >
      <p className="hidden lg:block text-4xl font-bold font-display2">
        <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Fenix</span>
        <span className="text-cyan-600 drop-shadow-[0_2px_2px_rgba(0,149,182,0.3)]">Technology</span>
      </p>

      <p className="flex text-4xl font-bold lg:hidden font-display2">
        <span className="-skew-x-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">F</span>
        <span className="text-cyan-600 skew-x-6 drop-shadow-[0_2px_2px_rgba(0,149,182,0.3)]">T</span>
      </p>
    </Link>
  );
};
