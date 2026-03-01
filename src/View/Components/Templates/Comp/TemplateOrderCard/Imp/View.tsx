import type { TPresent } from "../index.tsx";
import StructuresTabCard from "../../../../4.Structures/StructuresTabCard";

const View: TPresent = ({ Model }) => {
	const { rowProps } = Model;

	return <StructuresTabCard {...rowProps} />;
};

export default View;
