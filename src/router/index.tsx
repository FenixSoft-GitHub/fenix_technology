import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import Products from "@/pages/Products";
import ProductPage from "@/pages/ProductPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import ClientLayout from "@/layouts/ClientLayout";
import OrdersUserPage from "@/pages/OrdersUserPage";
import CheckoutPage from "@/pages/CheckoutPage";
import ThankyouPage from "@/pages/ThankyouPage";
import OrderUserPage from "@/pages/OrderUserPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage/> },
      { path: "/products", element: <Products/> },
      { path: "/products/:slug", element: <ProductPage /> },
      { path: "/about", element: <AboutPage/> },
      { path: "/login", element: <LoginPage/> },
      { path: "/register", element: <RegisterPage/> },
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
    path: '/checkout',
    element: <CheckoutPage />,
  },
  {
		path: '/checkout/:id/thank-you',
		element: <ThankyouPage />,
	},
]);
