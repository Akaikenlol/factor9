import Navbar from "@/components/Navbar";
import { UserButton } from "@clerk/nextjs";
// import { UserButton } from "@clerk/nextjs";
import React from "react";

const Page = () => {
	return (
		<div className="flex-center">
			<h2 className="h2-bold">Home</h2>
			<UserButton afterSignOutUrl="/" />
		</div>
	);
};

export default Page;
