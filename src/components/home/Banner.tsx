import { Link } from "react-router"

const Banner = () => {
    return (
        <div className="relative bg-gray-900 text-white w-full h-[calc(100vh - 72px)] mt-[72px]">
            <div className="absolute inset-0 bg-cover bg-center opacity-90 h-full"
                style={{
                    backgroundImage: "url(/img/img1.webp)"
                }}
            />

            <div className="absolute inset-0 bg-black opacity-10" />

            {/* <div className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
            <div className="relative z-10 flex flex-col items-center justify-center py-20 px-4 text-center lg:py-40 lg:px-8">
                <h2 className="text-4xl font-bold text-white mb-6">
                    Descubre la mejor tecnología que te hace la vida más cómodo
                </h2>
                <p className="text-lg text-white">
                    Descubre las ofertas exclusivas y las últimas novedades en tecnología
                </p>
                <Link 
                    to="/products" 
                    className="bg-cyan-300 hover:bg-transparent hover:text-white text-gray-900 font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-105 mt-4 outline-2 outline-offset-2 outline-cyan-300"
                >
                    Ver Productos
                </Link>
            </div>
        </div>
    )
}

export default Banner


