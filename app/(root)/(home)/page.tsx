import { UserButton } from "@clerk/nextjs";
import React from "react";

const Page = () => {
	return (
		<div className="">
			<h1>Home</h1>
			<UserButton afterSignOutUrl="/" />
		</div>
	);
};

export default Page;
