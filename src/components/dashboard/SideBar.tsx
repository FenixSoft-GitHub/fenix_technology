import { NavLink } from 'react-router-dom';
import { dashboardLinks } from '@/constants/links';
import { Logo } from '@/components/shared/Logo';
import { IoLogOutOutline } from 'react-icons/io5';
import { signOut } from '@/components/actions';

export const SideBar = () => {
	const handleLogout = async () => {
		await signOut();
	};

	return (
		<div className='w-[120px] h-screen fixed bg-stone-800 text-white flex flex-col gap-10 items-center p-4 lg:w-[250px]'>
			<Logo/>

			<nav className='w-full space-y-4 flex-1'>
				{dashboardLinks.map(link => (
					<NavLink
						key={link.id}
						to={link.href}
						className={({ isActive }) =>
							`flex items-center justify-center gap-4 pl-0 py-2 transition-all duration-300 rounded-md ${
								isActive
									? 'text-white bg-cyan-600'
									: 'hover:text-white hover:bg-cyan-700/70 bg-stone-700/70'
							} lg:pl-5 lg:justify-start`
						}
					>
						{link.icon}
						<p className='font-medium hidden lg:block'>
							{link.title}
						</p>
					</NavLink>
				))}
			</nav>

			<button
				className='bg-stone-700/70 hover:bg-red-500 w-full py-[10px] rounded-md flex items-center justify-center gap-2 font-semibold text-sm hover:underline'
				onClick={handleLogout}
			>
				<span className='hidden lg:block'>Cerrar sesión</span>
				<IoLogOutOutline size={20} className='inline-block' />
			</button>
		</div>
	);
};