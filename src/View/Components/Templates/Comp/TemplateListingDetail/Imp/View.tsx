import type { TPresent } from "../index.tsx";
import SubstanceDescMap from "../../../../3.Substances/SubstanceDescMap";

const View: TPresent = ({ Model }) => {
	const { rowProps } = Model;

	return <SubstanceDescMap {...rowProps} />;
};

export default View;
