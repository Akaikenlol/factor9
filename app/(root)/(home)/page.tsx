import Navbar from "@/components/Navbar";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Page = () => {
	return (
		<div className="">
			<UserButton afterSignOutUrl="/" />
		</div>
	);
};

export default Page;
