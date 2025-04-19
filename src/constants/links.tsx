import { BiWorld } from "react-icons/bi";
import { FaBoxOpen, FaCartShopping, FaHammer, FaYoutube } from "react-icons/fa6";
import { HiMiniReceiptRefund } from "react-icons/hi2";
import { MdLocalShipping } from "react-icons/md";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

export const navbarLinks = [
  {
    id: 1,
    title: "Inicio",
    href: "/",
  },
  {
    id: 2,
    title: "Productos",
    href: "/products",
  },
  {
    id: 3,
    title: "Sobre Nosotros",
    href: "/about",
  },
  {
    id: 4,
    title: "Blog",
    href: "/blog",
  },
  {
    id: 5,
    title: "Contáctanos",
    href: "/contact-us",
  },
];

export const socialLinks = [
  {
    id: 1,
    title: "Facebook",
    href: "https://www.facebook.com",
    icon: <FaFacebookF />,
    className: "flex items-center justify-center p-3 text-xl text-slate-500 bg-gray-800 rounded-full hover:text-gray-200 hover:text-gray-100 hover:transition ease-in-out duration-1000 hover:scale-110 hover:bg-[#3b5998]",
    className2: "flex items-center justify-center p-3 text-5xl text-slate-700 bg-gray-200 rounded-full shadow-gray-700 shadow-md hover:text-gray-200 hover:text-gray-100 hover:transition ease-in-out duration-1000 hover:scale-110 hover:bg-[#3b5998]"
  },
  {
    id: 2,
    title: "Twitter",
    href: "https://www.twitter.com",
    icon: <FaXTwitter />,
    className: "flex items-center justify-center p-3 text-xl text-slate-500 bg-gray-800 rounded-full hover:text-gray-200 hover:scale-110 hover:transition ease-in-out duration-1000 hover:bg-[#00acee]",
    className2: "flex items-center justify-center p-3 text-5xl text-slate-700 bg-gray-200 rounded-full shadow-gray-700 shadow-md hover:text-gray-200 hover:scale-110 hover:transition ease-in-out duration-1000 hover:bg-[#00acee]"
  },
  {
    id: 3,
    title: "Instagram",
    href: "https://www.instagram.com",
    icon: <FaInstagram />,
    className: "icon flex items-center justify-center p-3 text-xl text-slate-500 bg-gray-800 rounded-full hover:text-gray-200 hover:scale-110",
    className2: "icon flex items-center justify-center p-3 text-5xl text-slate-700 bg-gray-200 rounded-full shadow-gray-700 shadow-md hover:text-gray-200 hover:scale-110"
  },
  {
    id: 4,
    title: "Tiktok",
    href: "https://www.tiktok.com",
    icon: <FaTiktok />,
    className: "flex items-center justify-center p-3 text-xl text-slate-500 bg-gray-800 rounded-full hover:text-gray-200 hover:scale-110 hover:transition ease-in-out duration-1000 hover:bg-[#00f2ea]",
    className2: "flex items-center justify-center p-3 text-5xl text-slate-700 bg-gray-200 rounded-full shadow-gray-700 shadow-md hover:text-gray-200 hover:scale-110 hover:transition ease-in-out duration-1000 hover:bg-[#00f2ea]"
  },
  {
    id: 5,
    title: "YouTube",
    href: "https://www.youtube.com",
    icon: <FaYoutube />,
    className: "flex items-center justify-center p-3 text-xl text-slate-500 bg-gray-800 rounded-full hover:text-gray-200 hover:transition ease-in-out duration-1000 hover:scale-110 hover:bg-[#c4302b]",
    className2: "flex items-center justify-center p-3 text-5xl text-slate-700 bg-gray-200 rounded-full shadow-gray-700 shadow-md hover:text-gray-200 hover:transition ease-in-out duration-1000 hover:scale-110 hover:bg-[#c4302b]"
  },
];

export const features = [
  {
    icon: <MdLocalShipping size={40} />,
    title: "Envío gratis",
    description: "En todos nuestros productos - ciertas condiciones aplican"
  },
  {
    icon: <HiMiniReceiptRefund size={40} />,
    title: "Devoluciones",
    description: "Devuelve el equipo si no te satisface la compra dentro de 72 horas - ciertas condiciones aplican"
  },
  {
    icon: <FaHammer size={40} />,
    title: "Soporte 24/7",
    description: "Soporte técnico en cualquier momento - ciertas condiciones aplican"
  },
  {
    icon: <BiWorld size={40} />,
    title: "Garantía",
    description: "Garantía de 1 año en todos los equipos - ciertas condiciones aplican"
  }
];


export const dashboardLinks = [
	{
		id: 1,
		title: 'Productos',
		href: '/dashboard/products',
		icon: <FaBoxOpen size={25} />,
	},
	{
		id: 2,
		title: 'Ordenes',
		href: '/dashboard/ordenes',
		icon: <FaCartShopping size={25} />,
	},
];

export const brands = [
  {
    image: "/img/brands/Apple-Logo.webp",
    alt: "Apple",
    size: "h-28",
  },
  {
    image: "/img/brands/Samsung-Logo.webp",
    alt: "Samsung",
  },
  {
    image: "/img/brands/Xiaomi_logo.avif",
    alt: "Xiaomi",
    size: "h-26",
  },
  {
    image: "/img/brands/HP_LOGO.png",
    alt: "HP",
    size: "h-26",
  },
  {
    image: "/img/brands/huawei-logo.webp",
    alt: "Huawei",
  },

  {
    image: "/img/brands/honor-logo.webp",
    alt: "Honor",
  },
];

export const PaymentMethods = [
  {
    image: "/img/bank/Binance-Logo.avif",
    alt: "Binance",
    size: "h-8",
  },
  {
    image: "/img/bank/PayPal.png",
    alt: "Paypal",
    size: "h-8",
  },
  {
    image: "/img/bank/Zelle.png",
    alt: "Zelle",
    size: "h-8",
  },
  {
    image: "/img/bank/Transferencias.png",
    alt: "Transferencia",
    size: "h-8",
  },
  {
    image: "/img/bank/Cash.png",
    alt: "Efectivo",
    size: "h-8",
  },
  {
    image: "/img/bank/LaBanque.png",
    alt: "La Banque",
    size: "h-8",
  },
  {
    image: "/img/bank/Mastercard.jpeg",
    alt: "Mastercard",
    size: "h-8",
  },
  {
    image: "/img/bank/Visa.jpeg",
    alt: "VISA",
    size: "h-8",
  },  
];

export const bannerImages = [
  {
    image: "/img/banner/img1.avif",
    title: "Equípate con lo mejor en tecnología al mejor precio",
    subtitle: "Descubre laptops, accesorios y más para llevar tu productividad al siguiente nivel."
  },
  {
    image: "/img/banner/img2.avif",
    title: "Conéctate al futuro con nuestros smartphones de última generación",
    subtitle: "Explora nuestra colección de teléfonos inteligentes con lo más nuevo en innovación."
  },
  {
    image: "/img/banner/img3.avif",
    title: "Protege lo que más importa con nuestras cámaras de seguridad",
    subtitle: "Soluciones completas en vigilancia, instalación profesional y monitoreo 24/7."
  },
  {
    image: "/img/banner/img4.avif",
    title: "Todo para tu red: routers, switches y soluciones LAN/WAN",
    subtitle: "Ideal para hogares conectados y empresas que exigen alto rendimiento."
  },
  {
    image: "/img/banner/img5.webp",
    title: "Encuentra las mejores marcas y servicio técnico confiable",
    subtitle: "Somos tu aliado tecnológico en productos, instalación y soporte."
  }
];
