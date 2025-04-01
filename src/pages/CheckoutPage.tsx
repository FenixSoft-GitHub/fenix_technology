import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '@/store/cart.store';
import { FormCheckout } from '@/components/checkout/FormCheckout';
import { ItemsCheckout } from '@/components/checkout/ItemsCheckout';
import { Logo } from '@/components/shared/Logo';
import { useEffect, useState } from 'react';
import { useUser } from '@/hooks';
import { supabase } from '@/supabase/client';
import { Loader } from '@/components/shared/Loader';

const CheckoutPage = () => {
    const totalItems = useCartStore(state => state.totalItemsInCart);
    const [isScrolled, setIsScrolled] = useState(false);

    const { isLoading } = useUser();

    if (isLoading) return <Loader />;

    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.onAuthStateChange(async (event, session) => {
            if (event === 'SIGNED_OUT' || !session) {
                navigate('/login');
            }
        });
    }, [navigate]);

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 20);
        };
    
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return (
        <div 
            // style={{
            //     height: 'calc(100vh - 72px)',
            // }}
        >
            <header 
                className={`fixed h-[72px] top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-10
                    ${isScrolled
                        ? 'bg-gray-400/50 backdrop-blur-md shadow-md'
                        : 'bg-white'}`}
            >
                {/* <Link
					to='/'
					className='text-4xl font-bold self-center tracking-tighter transition-all md:text-5xl md:self-start'
				>
					<p>
						Celulares
						<span className='text-cyan-600'>Baratos</span>
					</p>
				</Link> */}
                <Logo />
            </header>

            <main className='w-full h-[calc(100vh - 72px)] flex relative mt-[72px]' 
            // style={{
            //     height: 'calc(100vh - 72px)',
            // }}
            >
                {totalItems === 0 ? (
                    <div
                        className='flex flex-col items-center justify-center gap-5 w-full mt-10'
                        // style={{
                        //     height: 'calc(100vh - 72px)',
                        // }}
                    >
                        <img src="/img/Cart.avif" alt="Carro Vacío" className='md:w-3/12 w-1/2 rounded-lg shadow-lg'/>
                        <p className='text-sm font-medium tracking-tight'>
                            Su carro esta vacío
                        </p>
                        <Link
                            to='/products'
                            className='bg-black uppercase text-white font-semibold py-4 rounded-full  px-7 text-xs shadow-lg transition-all duration-300 ease-in-out hover:scale-105 mt-4 outline-2 outline-offset-2 outline-gray-600'
                        >
                            Empezar a comprar
                        </Link>
                        {/* <p className='text-sm font-medium tracking-tight'>
							Su carro esta vacío
						</p> */}
                        {/* <Link
                            to='/celulares'
                            className='py-4 bg-black rounded-full text-white px-7 text-xs uppercase tracking-widest font-semibold'
                        >
                            Empezar a comprar
                        </Link> */}
                    </div>
                ) : (
                    <>
                        <div className='w-full md:w-[50%] p-10'>
                            <FormCheckout />
                        </div>

                        <div
                            className='bg-stone-100 w-[50%] sticky top-0 right-0 p-10 hidden md:block'
                            style={{
                                minHeight: 'calc(100vh - 72px)',
                            }}
                        >
                            {/* Elementos del carrito */}
                            <ItemsCheckout />
                        </div>
                    </>
                )}
            </main>
        </div>
    );
};

export default CheckoutPage;