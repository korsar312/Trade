import type { TPresent } from "../";
import SubstanceDescMap from "../../../3.Substances/SubstanceDescMap";
import AtomWrapper from "../../../1.Atoms/AtomWrapper";
import Text from "../../../0.Cores/Text";

const View: TPresent = ({ Model }) => {
	const { textProps, descProps } = Model;

	return (
		<AtomWrapper styleType={"col"}>
			<Text {...textProps} />
			<SubstanceDescMap {...descProps} />
		</AtomWrapper>
	);
};

export default View;
