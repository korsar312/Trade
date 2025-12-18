import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import MoleculeGroupBtn from "../../../2.Molecules/MoleculeGroupBtn";
import { Fragment } from "react";
import type { TSubstanceTabsBtn } from "../index.tsx";

const View: NFC<typeof Model> = (props) => {
	const { btnRow, children } = props;

	function renderRow(el: TSubstanceTabsBtn) {
		return <MoleculeGroupBtn {...el.options} />;
	}

	return (
		<div css={Style.wrapper}>
			{btnRow.map((el) => (
				<Fragment key={el.id}>{renderRow(el)}</Fragment>
			))}

			{children}
		</div>
	);
};

export default View;
