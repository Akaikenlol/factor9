import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<header>
			<nav className="flex justify-between items-center text-center gap-5 px-5 py-2 border border-black">
				<ul className="flex justify-between items-center text-center gap-5 text-sm font-bold">
					<Link href="/" className="text-emerald-400">
						<li>Factor 9</li>
					</Link>
					<Link href="/weekly">
						<li>Weekly Menu</li>
					</Link>
					<Link href="/plan">
						<li>Our Plan</li>
					</Link>
					<Link href="/faq">
						<li>FAQs</li>
					</Link>
					<Link href="/gift">
						<li>Gift Cards</li>
					</Link>
					<Link href="/team">
						<li>Factor for Teams</li>
					</Link>
					<Link href="/coaching">
						<li>Nutrition Coaching</li>
					</Link>
				</ul>
				<div className="flex justify-between items-center gap-5 text-sm font-bold">
					<Link className="border border-black rounded-md p-2" href="/sign-in">
						Sign In
					</Link>
					<Link className="border border-black rounded-md p-2" href="/sign-up">
						Sign Up
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
