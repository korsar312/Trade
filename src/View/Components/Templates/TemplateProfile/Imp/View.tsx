import type Model from "./Model.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import SubstanceDescMap from "../../../3.Substances/SubstanceDescMap";
import AtomWrapper from "../../../1.Atoms/AtomWrapper";
import Text from "../../../0.Cores/Text";

const View: NFC<typeof Model> = (props) => {
	const { textProps, descProps } = props;

	return (
		<AtomWrapper styleType={"col"}>
			<Text {...textProps} />
			<SubstanceDescMap {...descProps} />
		</AtomWrapper>
	);
};

export default View;
