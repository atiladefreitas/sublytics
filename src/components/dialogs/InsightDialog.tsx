import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Typography,
	IconButton,
} from "@material-tailwind/react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { mockInsight } from "@/utils/mock";
import { Sparkles } from "@/assets/icons/sparkles";
import { SparklesIcon } from "@heroicons/react/24/solid";

export function InsightDialog() {
	const [open, setOpen] = useState(false);
	const [showFinalComponent, setShowFinalComponent] = useState(false);

	const handleOpen = () => setOpen(!open);

	const handleGotIt = () => {
		setShowFinalComponent(true);
	};

	return (
		<>
			<Button
				onClick={handleOpen}
				color="white"
				className="flex items-center gap-2"
				size="md"
			>
				<SparklesIcon className="size-5" />
				AI Insight
			</Button>
			<Dialog open={open} handler={handleOpen} size="xl">
				<DialogHeader>
					<Typography variant="h5" className="flex items-center w-full gap-2">
						<SparklesIcon className="size-6" />
						AI Insight
					</Typography>
				</DialogHeader>
				<DialogBody className="grid place-items-center gap-4 px-4 lg:px-16">
					{showFinalComponent ? (
						<TextGenerateEffect words={mockInsight} />
					) : (
						<>
							<Typography className="text-center font-normal">
								This is an experimental feature that provides valuable insights
								using AI analysis.
							</Typography>
							<Typography className="text-center font-normal">
								The text present in next step in mocked.
							</Typography>
						</>
					)}
				</DialogBody>
				<DialogFooter className="space-x-2">
					<Button variant="text" color="blue-gray" onClick={handleOpen}>
						close
					</Button>
					{!showFinalComponent && (
						<Button variant="gradient" color="green" onClick={handleGotIt}>
							Ok, Got it
						</Button>
					)}
				</DialogFooter>
			</Dialog>
		</>
	);
}
