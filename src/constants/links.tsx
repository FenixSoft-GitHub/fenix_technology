import { BiWorld } from "react-icons/bi";
import { FaBoxOpen, FaCartShopping, FaHammer } from "react-icons/fa6";
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
    href: "/contact",
  },
];

export const socialLinks = [
  {
    id: 1,
    title: "Facebook",
    href: "https://www.facebook.com",
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    title: "Twitter",
    href: "https://www.twitter.com",
    icon: <FaXTwitter />,
  },
  {
    id: 3,
    title: "Instagram",
    href: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    title: "Tiktok",
    href: "https://www.tiktok.com",
    icon: <FaTiktok />,
  },
];

export const features = [
  {
    icon: <MdLocalShipping size={40} />,
    title: "Envío gratis",
    description: "En todos nuestros productos"
  },
  {
    icon: <HiMiniReceiptRefund size={40} />,
    title: "Devoluciones",
    description: "Devuelve el equipo si no te satisface la compra dentro de 72 horas"
  },
  {
    icon: <FaHammer size={40} />,
    title: "Soporte 24/7",
    description: "Soporte técnico en cualquier momento"
  },
  {
    icon: <BiWorld size={40} />,
    title: "Garantía",
    description: "Garantía de 1 año en todos los equipos"
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