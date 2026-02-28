import type { TPresent } from "../";
import SubstanceDescMap from "../../../3.Substances/SubstanceDescMap";

const View: TPresent = ({ Model }) => {
	const { descProps } = Model;

	return <SubstanceDescMap {...descProps} />;
};

export default View;
