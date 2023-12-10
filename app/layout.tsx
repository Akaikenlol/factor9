import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-inter",
});

const spaceGrotest = Space_Grotesk({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
	title: "ChripHub 🐤",
	description:
		"Welcome to ChirpHub, where conversations take flight! 🚀 Experience a social platform that's more than just tweets – it's a vibrant community where you can share your thoughts, connect with friends, and join in on trending discussions. ",
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
					footerActionLink: "primary-text-gradient hover:text-primary-500",
				},
			}}
		>
			<html lang="en">
				<body className={`${inter.variable} ${spaceGrotest.variable}`}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
