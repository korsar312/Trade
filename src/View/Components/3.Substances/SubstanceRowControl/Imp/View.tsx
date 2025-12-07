import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import type { TSubstanceRowControlCompType } from "../index.tsx";
import { Fragment, type ReactNode } from "react";
import AtomButtonIcon from "../../../1.Atoms/AtomButton/Variables/AtomButtonIcon";

const View: NFC<typeof Model> = (props) => {
	const { compRow } = props;

	function rowRender(row: TSubstanceRowControlCompType): ReactNode {
		switch (row.type) {
			case "BTN_IMAGE":
				return <AtomButtonIcon {...row.options} />;
			case "SPACING":
				return <div css={Style.pub.f1} />;
		}
	}

	return (
		<AtomPaper color={"MAIN_2"} extStyle={Style.wrapper}>
			{compRow.map((el) => (
				<Fragment key={el.id}>{rowRender(el)}</Fragment>
			))}
		</AtomPaper>
	);
};

export default View;
