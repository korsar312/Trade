import type { TPresent } from "../";
import SubstanceDescMap from "../../../3.Substances/SubstanceDescMap";
import Text from "../../../0.Cores/Text";
import AtomWrapper from "../../../1.Atoms/AtomWrapper";
import AtomButtonMain from "../../../1.Atoms/AtomButton/Variables/AtomButtonMain";

const View: TPresent = ({ Model }) => {
	const { textProps, descProps, btnPlusProps, btnMinusProps } = Model;

	return (
		<AtomWrapper styleType={"col"}>
			<Text {...textProps} />
			<SubstanceDescMap {...descProps} />

			<AtomWrapper styleType={"row"}>
				<AtomButtonMain {...btnPlusProps} />
				<AtomButtonMain {...btnMinusProps} />
			</AtomWrapper>
		</AtomWrapper>
	);
};

export default View;
