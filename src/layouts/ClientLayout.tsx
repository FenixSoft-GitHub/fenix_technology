import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { signOut } from '@/components/actions';
import { useUser } from '@/hooks';
import { useEffect } from 'react';
import { supabase } from '@/supabase/client';
import { Loader } from '@/components/shared/Loader';

const ClientLayout = () => {
	const { session, isLoading: isLoadingSession } = useUser();

	const navigate = useNavigate();

	useEffect(() => {
		supabase.auth.onAuthStateChange(async (event, session) => {
			if (event === 'SIGNED_OUT' || !session) {
				navigate('/login');
			}
		});
	}, [navigate]);

	if (isLoadingSession) return <Loader />;

	const handleLogout = async () => {
		await signOut();
	};

	return (
		<div className='flex flex-col gap-5 w-full h-[calc(100vh - 72px)] mt-[72px]'>
			{/* Menú */}
			<nav className='flex justify-center gap-10 text-sm font-medium'>
				<NavLink
					to='/account/pedidos'
					className={({ isActive }) =>
						`${isActive ? 'underline' : 'hover:underline'}`
					}
				>
					Pedidos
				</NavLink>
				{/* TODO: LINK DASHBOARD */}

				<button className='hover:underline' onClick={handleLogout}>
					Cerrar sesión
				</button>
			</nav>

			<main className='container mt-12 flex-1'>
				<Outlet />
			</main>
		</div>
	);
};

export default ClientLayout;