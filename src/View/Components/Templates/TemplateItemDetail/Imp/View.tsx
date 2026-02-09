import type Model from "./Model.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import SubstanceDescMap from "../../../3.Substances/SubstanceDescMap";

const View: NFC<typeof Model> = (props) => {
	const { rowProps } = props;

	return <SubstanceDescMap {...rowProps} />;
};

export default View;
