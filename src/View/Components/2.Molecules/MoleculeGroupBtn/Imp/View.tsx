import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomButtonMain from "../../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import type { TMoleculeGroupBtn } from "../index.tsx";
import { Fragment } from "react";

const View: NFC<typeof Model> = (props) => {
	const { btnRow } = props;

	function element(btn: TMoleculeGroupBtn) {
		const { isActive, options } = btn;

		return <AtomButtonMain color={isActive ? "BLUE_2" : undefined} isFullWidth {...options} />;
	}

	return (
		<div css={Style.wrapper}>
			{btnRow.map((el) => (
				<Fragment key={el.id}>{element(el)}</Fragment>
			))}
		</div>
	);
};

export default View;
