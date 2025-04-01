import { IoMdClose } from 'react-icons/io';
import { useGlobalStore } from '@/store/global.store';
import { Link, NavLink } from 'react-router-dom';
import { navbarLinks } from '@/constants/links';


export const NavbarMobile = () => {
    const setActiveNavMobile = useGlobalStore(
        state => state.setActiveNavMobile
    );

    return (
        <div className='bg-gray-300/50 backdrop-blur-md text-black h-screen w-full shadow-lg animate-slide-in-left fixed z-50 flex justify-center py-32'>
            <button
                className='absolute top-5 right-5'
                onClick={() => setActiveNavMobile(false)}
            >
                <IoMdClose size={30} className='text-black' />
            </button>

            {/* Contenido*/}
            <div className='flex flex-col gap-20'>
                <Link
                    to='/'
                    className='transition-all duration-300 hover:scale-[1.02]'
                    onClick={() => setActiveNavMobile(false)}
                >
                    <p className="text-4xl font-bold font-display2">
                        <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Fenix</span>
                        <span className="text-cyan-600 drop-shadow-[0_2px_2px_rgba(0,149,182,0.3)]">Technology</span>
                    </p>
                </Link>

                <nav className='flex flex-col items-center gap-5'>
                    {navbarLinks.map(item => (
                        <NavLink
                            to={item.href}
                            key={item.id}
                            className={({ isActive }) => `
                                ${isActive
                                    ? 'text-cyan-600 underline'
                                    : ''
                                } transition-all duration-300 font-semibold text-xl hover:text-cyan-600 hover:underline
                            `}
                            onClick={() => setActiveNavMobile(false)}
                        >
                            {item.title}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </div>
    );
};