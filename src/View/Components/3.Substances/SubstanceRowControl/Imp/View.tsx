import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import type { TSubstanceRowControlCompType } from "../index.tsx";
import { Fragment, type ReactNode } from "react";
import AtomButtonIcon from "../../../1.Atoms/AtomButton/Variables/AtomButtonIcon";
import AtomButtonMain from "../../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import AtomInput from "../../../1.Atoms/AtomInput";

const View: NFC<typeof Model> = (props) => {
	const { compRow } = props;

	function rowRender(row: TSubstanceRowControlCompType): ReactNode {
		switch (row.type) {
			case "BTN_IMAGE":
				return <AtomButtonIcon {...row.options} />;
			case "BTN_MAIN":
				return <AtomButtonMain {...row.options} />;
			case "SPACING":
				return <div css={Style.pub.f1} />;
			case "INPUT":
				return <AtomInput {...row.options} />;
		}
	}

	return (
		<div css={Style.wrapper}>
			{compRow.map((el) => (
				<Fragment key={el.id}>{rowRender(el)}</Fragment>
			))}
		</div>
	);
};

export default View;
