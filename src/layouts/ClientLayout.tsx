import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { signOut } from '@/components/actions';
import { useRoleUser, useUser } from '@/hooks';
import { useEffect } from 'react';
import { supabase } from '@/supabase/client';
import { Loader } from '@/components/shared/Loader';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { IoLogOutOutline } from 'react-icons/io5';
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

const ClientLayout = () => {
	const navigate = useNavigate();
	const { session, isLoading: isLoadingSession } = useUser();
	const { data: role, isLoading: isLoadingRole } = useRoleUser(session?.user.id as string);

	useEffect(() => {
		supabase.auth.onAuthStateChange(async (event, session) => {
			if (event === 'SIGNED_OUT' || !session) {
				navigate('/login', { replace: true });
			}
		});
	}, [navigate]);

	if (isLoadingSession || isLoadingRole) return <Loader />;

	const handleLogout = async () => {
		await signOut();
	};

	const buttonClass = 'min-w-[160px] text-center flex items-center justify-center gap-1 text-sm border border-slate-200 dark:border-gray-500 rounded-full bg-slate-100 dark:bg-slate-800 shadow-md shadow-gray-400 hover:bg-slate-200 dark:hover:bg-slate-600 px-6 py-1.5 transition-all duration-200';

	return (
		<div className='flex flex-col gap-5 w-full py-6 mt-14'>
			{/* Menú */}
			<nav className='flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10 text-sm font-medium mx-auto px-4 text-center'>
				<NavLink
					to='/account/pedidos'
					className={({ isActive }) =>
						`${buttonClass} ${isActive ? 'underline' : 'hover:underline'}`
					}
				>
					Pedidos
					<LiaFileInvoiceDollarSolid size={20} />
				</NavLink>
				{role === 'admin' && (
					<NavLink
						to='/dashboard/products'
						className={buttonClass}
					>
						Dashboard
						<HiOutlineExternalLink size={20} className='inline-block' />
					</NavLink>
				)}

				<button
					className={buttonClass}
					onClick={handleLogout}
				>
					Cerrar sesión
					<IoLogOutOutline size={20} className='inline-block' />
				</button>
			</nav>

			<main className='container py-6 flex-1 mx-auto'>
				<Outlet />
			</main>
		</div>
	);
};

export default ClientLayout;