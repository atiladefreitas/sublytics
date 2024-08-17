import Dashboard from "@/components/Dashboard";
import { Typography } from "@material-tailwind/react";
import { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<section className="container mx-auto px-4 py-8">
			<Typography className="text-3xl font-bold mb-8 text-blue-gray-50">
				Subscriber Analytics Dashboard
			</Typography>
			<Dashboard />
		</section>
	);
};

export default Home;
