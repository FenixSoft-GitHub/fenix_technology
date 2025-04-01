import { FaBarsStaggered } from "react-icons/fa6";
import { HiOutlineSearch } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { navbarLinks } from "@/constants/links";
import { Logo } from "./Logo";
import { memo, useEffect, useState } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { useGlobalStore } from "@/store/global.store";
import { useCartStore } from "@/store/cart.store";
import { useUser } from "@/hooks";
import { LuLoaderCircle } from 'react-icons/lu';
import { FaUser, FaRegUser } from "react-icons/fa6";

export const NavBar = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const openSheet = useGlobalStore(state => state.openSheet);
  const setActiveNavMobile = useGlobalStore(state => state.setActiveNavMobile);
  const totalItemsInCart = useCartStore(state => state.totalItemsInCart);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { session, isLoading, userName } = useUser();

  const oneName = userName?.split(' ')[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4
      ${isScrolled
          ? 'bg-gray-400/50 backdrop-blur-md shadow-md'
          : 'bg-white'}`}
    >
      <div className="container mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navbarLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.href}
                className={({ isActive }) =>
                  `${isActive ? 'text-cyan-600 underline' : ''
                  } transition-all duration-300 font-medium hover:text-cyan-600 hover:underline `
                }
              >
                {link.title}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => openSheet('search')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Buscar"
            >
              <HiOutlineSearch className="w-6 h-6 text-gray-700 hover:text-cyan-600" />
            </button>

            {isLoading ? (
              <LuLoaderCircle className='animate-spin' size={60} />
            ) : session ? (
              <div className='relative'>
                {/* User Nav */}
                <Link
                  to="/account"
                  className="relative inline-flex items-center justify-center gap-2 
                text-gray-700 font-semibold transition-all duration-200 
                hover:bg-gray-100 rounded-full px-4 py-2 hover:text-cyan-600 hover:scale-105 group"
                  aria-label="Mi cuenta"
                >
                  <FaUser size={25} />
                  <span className="text-sm">Hola! {oneName}</span>
                </Link>
              </div>
            ) : (
              <Link to='/login'>
                <FaRegUser className="text-gray-700 hover:text-cyan-600" size={25} />
              </Link>
            )}

            <button
              onClick={() => openSheet('cart')}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 group"
              aria-label="Carrito de compras"
            >
              <FiShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-cyan-600" />
              <span className="absolute -top-2 -right-1 w-5 h-5 flex items-center justify-center bg-cyan-600 text-white text-xs font-medium rounded-full">
                {totalItemsInCart}
              </span>
            </button>

            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              onClick={() => setActiveNavMobile(true)}
              aria-label="Menú"
            >
              <FaBarsStaggered className="w-6 h-6 text-gray-700 hover:text-cyan-600" />
            </button>
          </div>
        </div>

      </div>
    </header>
  );
});

NavBar.displayName = 'NavBar';
