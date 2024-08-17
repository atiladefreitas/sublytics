import React, { useState } from "react";
import {
	Typography,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Input,
	Button,
} from "@material-tailwind/react";

interface WelcomeDialogProps {
	open: boolean;
	onClose: () => void;
	onSave: (name: string) => void;
}

const WelcomeDialog: React.FC<WelcomeDialogProps> = ({
	open,
	onClose,
	onSave,
}) => {
	const [tempName, setTempName] = useState<string>("");

	const handleSaveName = () => {
		if (tempName.trim()) {
			onSave(tempName.trim());
		}
	};

	return (
		<Dialog open={open} size="sm" handler={onClose}>
			<DialogHeader>Welcome to Sublytics</DialogHeader>
			<DialogBody>
				<Typography className="mb-4 text-blue-gray-800">
					Welcome to Sublytics! Your go-to dashboard for newsletter subscriber
					insights.
					<br />
					We&apos;re excited to help you understand and grow your audience.
					<br />
					<br />
					To personalize your experience, could you please tell us your name?
				</Typography>
				<Input
					crossOrigin={""}
					label="Your Name"
					value={tempName}
					onChange={(e) => setTempName(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && handleSaveName()}
				/>
			</DialogBody>
			<DialogFooter>
				<Button onClick={handleSaveName} color="green">
					Save
				</Button>
			</DialogFooter>
		</Dialog>
	);
};

export default WelcomeDialog;
