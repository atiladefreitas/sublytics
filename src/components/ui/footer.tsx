import { Typography } from "@material-tailwind/react";

function Footer(): JSX.Element {
	return (
		<footer className="flex mt-12 w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
			<Typography color="blue-gray" className="font-normal">
				&copy; 2024 Átila de Freitas
			</Typography>
			<ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
				<li>
					<Typography
						as="a"
						href="https://linkedin.com/in/atilafreitas"
						target="_blank"
						color="blue-gray"
						className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
					>
						LinkedIn
					</Typography>
				</li>
				<li>
					<Typography
						as="a"
						href="https://github.com/atiladefreitas"
						target="_blank"
						color="blue-gray"
						className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
					>
						GitHub
					</Typography>
				</li>
				<li>
					<Typography
						as="a"
						href="mailto:contact@atiladefreitas.com"
						target="_blank"
						color="blue-gray"
						className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
					>
						Email
					</Typography>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
