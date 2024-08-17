import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { Typography, Button, IconButton } from "@material-tailwind/react";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/ui/footer";
import WelcomeDialog from "@/components/dialogs/WellcomeDialog";
import { TrashIcon } from "@heroicons/react/24/solid";

const Home: NextPage = () => {
	const [name, setName] = useState<string>("");
	const [openDialog, setOpenDialog] = useState<boolean>(false);

	useEffect(() => {
		const storedName = localStorage.getItem("userName");
		if (storedName) {
			setName(storedName);
		} else {
			setOpenDialog(true);
		}
	}, []);

	const handleSaveName = (newName: string) => {
		localStorage.setItem("userName", newName);
		setName(newName);
		setOpenDialog(false);
	};

	const handleClearName = () => {
		localStorage.removeItem("userName");
		setName("");
		setOpenDialog(true);
	};

	return (
		<>
			<WelcomeDialog
				open={openDialog}
				onClose={() => setOpenDialog(false)}
				onSave={handleSaveName}
			/>
			<section className="container mx-auto px-4 py-8">
				<span>
					<Typography className="text-3xl font-bold text-blue-gray-900">
						Sublytics
					</Typography>
					<hr className="w-full border-black/10 my-4" />
				</span>
				<div className="flex items-center gap-2">
					<Typography className="text-2xl font-bold text-blue-gray-900">
						Hello, {name}
					</Typography>
					{name && (
						<IconButton
							className=""
							variant="text"
							color="red"
							onClick={handleClearName}
						>
							<TrashIcon className="size-4" />
						</IconButton>
					)}
				</div>
				<Typography className="text-2xl mb-8 text-gray-500">
					We&apos;ve got some insights for you{" "}
				</Typography>
				<Dashboard />
				<Footer />
			</section>
		</>
	);
};

export default Home;
