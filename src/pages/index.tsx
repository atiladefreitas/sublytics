import Dashboard from "@/components/Dashboard";
import { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">
				Subscriber Analytics Dashboard
			</h1>
			<Dashboard />
		</div>
	);
};

export default Home;
