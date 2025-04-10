import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { signOut } from '@/components/actions';
import { useRoleUser, useUser } from '@/hooks';
import { useEffect } from 'react';
import { supabase } from '@/supabase/client';
import { Loader } from '@/components/shared/Loader';
import { HiOutlineExternalLink } from 'react-icons/hi';

const ClientLayout = () => {
	const { session, isLoading: isLoadingSession } = useUser();
	const { data: role, isLoading: isLoadingRole } = useRoleUser(session?.user.id as string);


	const navigate = useNavigate();

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

	return (
		<div className='flex flex-col gap-5 w-full h-[calc(100vh - 72px)] mt-[72px]'>
			{/* Menú */}
			<nav className='flex justify-center gap-10 text-sm font-medium mx-auto'>
				<NavLink
					to='/account/pedidos'
					className={({ isActive }) =>
						`${isActive ? 'underline' : 'hover:underline'} rounded-full hover:bg-slate-200 px-6 py-1.5`
					}
				>
					Pedidos
				</NavLink>
				{role === 'admin' && (
					<NavLink
						to='/dashboard/products'
						className='flex items-center gap-1 hover:underline'
					>
						Dashboard
						<HiOutlineExternalLink size={16} className='inline-block' />
					</NavLink>
				)}

				<button className='hover:underline rounded-full hover:bg-slate-200 px-6 py-1.5' onClick={handleLogout}>
					Cerrar sesión
				</button>
			</nav>

			<main className='container mt-12 flex-1 mx-auto'>
				<Outlet />
			</main>
		</div>
	);
};

export default ClientLayout;