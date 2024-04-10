import { Inter } from "next/font/google";
import styles from "./globals.module.css";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/page";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Dramalama v2.0",
	description:
		"Online service to watch kdramas and anime for free. You can also read and download mangas for free.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SpeedInsights />
				<Analytics />
				<Header />
				<Footer />
				{children}
			</body>
		</html>
	);
}
