import { useState } from 'react';
// import { LuLoader2 } from 'react-icons/lu';
import { LuLoaderCircle } from 'react-icons/lu';
import { Link, Navigate } from 'react-router-dom';
import { useLogin, useUser } from '@/hooks';
import { Loader } from '@/components/shared/Loader';

const LoginPage = () => {
	const [email, setEmail] = useState('alfaortiz.sis@gmail.com');
	const [password, setPassword] = useState('123456');
	// const [email, setEmail] = useState('bdj04113@dcobe.com');
	// const [password, setPassword] = useState('Abc123');

	const { mutate, isPending } = useLogin();
	const { session, isLoading } = useUser();

	const onLogin = (e: React.FormEvent) => {
		e.preventDefault();

		mutate({ email, password });
	};

	if (isLoading) return <Loader />;

	if (session) return <Navigate to='/' />;

	return (
		<div className='h-full flex flex-col items-center mt-12 gap-5'>
			<h1 className='text-4xl font-bold capitalize'>
				Iniciar sesión
			</h1>

			<p className='text-sm font-medium'>
				¡Que bueno tenerte de vuelta!
			</p>

			{isPending ? (
				<div className='w-full h-full flex justify-center mt-20'>
					<LuLoaderCircle className='animate-spin' size={60} />
				</div>
			) : (
				<>
					<form
						className='flex flex-col items-center gap-4 w-full mt-10 sm:w-[400px] lg:w-[500px]'
						onSubmit={onLogin}
					>
						<input
							type='email'
							placeholder='Ingresa tu correo electrónico'
							className='border border-slate-200 text-black px-5 py-4 placeholder:text-black text-sm rounded-full w-full'
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>

						<input
							type='password'
							placeholder='Ingresa tu contraseña'
							className='border border-slate-200 text-black px-5 py-4 placeholder:text-black text-sm rounded-full w-full'
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>

						<button className='bg-black text-white uppercase font-semibold tracking-widest text-xs py-4 rounded-full mt-5 w-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 outline-2 outline-offset-2 outline-gray-600'>
							Iniciar sesión
						</button>
					</form>

					<p className='text-sm text-stone-800'>
						¿No tienes una cuenta?
						<Link to='/register' className='underline ml-2'>
							Regístrate
						</Link>
					</p>
				</>
			)}
		</div>
	);
};

export default LoginPage;