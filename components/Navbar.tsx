import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center text-center gap-5 px-5 py-3 border border-black">
			<ul className="flex justify-between items-center text-center gap-5 text-sm font-bold">
				<Link href="/" className="text-emerald-400">
					<li>Factor 9</li>
				</Link>
				<Link href="/menu">
					<li>Weekly Menu</li>
				</Link>
				<Link href="/plan">
					<li>Our Plan</li>
				</Link>
				<Link href="/faq">
					<li>FAQs</li>
				</Link>
				<Link href="/team">
					<li>Factor for Teams</li>
				</Link>
			</ul>
			<div className="flex justify-between items-center gap-5 text-sm font-bold">
				{/* <Link className="border border-black rounded-md p-2" href="/sign-in">
						Sign In
					</Link>
					<Link className="border border-black rounded-md p-2" href="/sign-up">
						Sign Up
					</Link> */}
				<UserButton afterSignOutUrl="/" />
			</div>
		</nav>
	);
};

export default Navbar;
