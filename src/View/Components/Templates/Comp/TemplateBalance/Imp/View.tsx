import type { TPresent } from "../index.tsx";
import SubstanceDescMap from "../../../../3.Substances/SubstanceDescMap";
import AtomWrapper from "../../../../1.Atoms/AtomWrapper";
import AtomButtonMain from "../../../../1.Atoms/AtomButton/Variables/AtomButtonMain";

const View: TPresent = ({ Model }) => {
	const { descProps, depositProps, btnPlusProps, btnMinusProps } = Model;

	return (
		<AtomWrapper styleType={"col"}>
			<SubstanceDescMap {...descProps} />

			<AtomWrapper styleType={"row"}>
				<AtomButtonMain {...btnMinusProps} />
				<AtomButtonMain {...btnPlusProps} />
			</AtomWrapper>

			{depositProps && <SubstanceDescMap {...depositProps} />}
		</AtomWrapper>
	);
};

export default View;
