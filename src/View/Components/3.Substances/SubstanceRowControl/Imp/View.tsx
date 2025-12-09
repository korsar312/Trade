import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import { type TSubstanceRowControlCompType } from "../index.tsx";
import { Fragment, type ReactNode } from "react";
import AtomButtonIcon from "../../../1.Atoms/AtomButton/Variables/AtomButtonIcon";
import AtomButtonMain from "../../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import AtomInput from "../../../1.Atoms/AtomInput";

const View: NFC<typeof Model> = (props) => {
	const { compRow } = props;

	function render({ type, options }: TSubstanceRowControlCompType): ReactNode {
		switch (type) {
			case "BTN_IMAGE":
				return <AtomButtonIcon {...options} />;
			case "BTN_MAIN":
				return <AtomButtonMain {...options} />;
			case "SPACING":
				return <div css={Style.pub.f1} />;
			case "INPUT":
				return <AtomInput {...options} />;
		}
	}

	return (
		<div css={Style.wrapper}>
			{compRow.map((el) => (
				<Fragment key={el.id}>{render(el)}</Fragment>
			))}
		</div>
	);
};

export default View;
