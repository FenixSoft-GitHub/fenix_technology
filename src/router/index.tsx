import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProductPage from "@/pages/ProductPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import ClientLayout from "@/layouts/ClientLayout";
import OrdersUserPage from "@/pages/OrdersUserPage";
import CheckoutPage from "@/pages/CheckoutPage";
import ThankyouPage from "@/pages/ThankyouPage";
import OrderUserPage from "@/pages/OrderUserPage";
import BlogPostDetail from "@/pages/blog/BlogPostDetail";
import { BlogPage } from "@/pages/blog/BlogPage";
import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardProductsPage from "@/pages/dashboard/DashboardProductsPage";
import DashboardNewProductPage from "@/pages/dashboard/DashboardNewProductPage";
import { DashboardOrderPage, DashboardOrdersPage, DashboardProductSlugPage, Policies, Soporte, TermsOfUse } from "@/pages";
import { ContactUsPage } from "@/pages/ContactUsPage";
import NuestraHistoriaPage from "@/pages/NuestraHistoriaPage";
import ProductsPage from "@/pages/ProductsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:slug", element: <ProductPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/about/nuestra-historia", element: <NuestraHistoriaPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/contact-us", element: <ContactUsPage /> },
      { path: "/soporte", element: <Soporte /> },
      { path: "/terms-of-use", element: <TermsOfUse /> },
      { path: "/policies", element: <Policies /> },
      // Rutas del blog
      {
        path: "/blog",
        element: <BlogPage />, // Componente para mostrar la lista de publicaciones
      },
      {
        path: "/blog/:slug",
        element: <BlogPostDetail />, // Componente para mostrar el detalle de una publicación
      },
      {
        path: '/checkout',
        element: <CheckoutPage />,
      },
      {
        path: '/checkout/:id/thank-you',
        element: <ThankyouPage />,
      },
      {
        path: 'account',
        element: <ClientLayout />,
        children: [
          {
            path: '',
            element: <Navigate to='/account/pedidos' />,
          },
          {
            path: 'pedidos',
            element: <OrdersUserPage />,
          },
          {
            path: 'pedidos/:id',
            element: <OrderUserPage />,
          },
        ],
      },
    ],
  },
  
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <Navigate to='/dashboard/products' />,
      },
      {
        path: 'products',
        element: <DashboardProductsPage />,
      },
      {
        path: 'products/new',
        element: <DashboardNewProductPage />,
      },
      {
				path: 'products/editar/:slug',
				element: <DashboardProductSlugPage />,
			},
      {
				path: 'ordenes',
				element: <DashboardOrdersPage />,
			},
      {
				path: 'ordenes/:id',
				element: <DashboardOrderPage />,
			},
    ]
  }
]);
