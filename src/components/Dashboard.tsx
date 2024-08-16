import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Dashboard: React.FC = () => {
	const { loading, error } = useSelector((state: RootState) => state.analytics);

	return (
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
		</div>
	);
};

export default Dashboard;
