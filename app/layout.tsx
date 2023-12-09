import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-inter",
});

const spaceGrotest = Space_Grotesk({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Factor 9",
	description: "Your quick and healthy website.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider
			appearance={{
				elements: {
					formButtonPrimary: "primary-gradient",
					footerActionLink: "primary-text-gradient",
				},
			}}
		>
			<html lang="en">
				<body
					className={`${inter.variable} ${spaceGrotest.variable} flex-center min-h-screen`}
				>
					{/* <Navbar /> */}

					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
