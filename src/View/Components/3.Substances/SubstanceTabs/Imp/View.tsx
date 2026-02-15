import type { TPresent, TSubstanceTabsBtn } from "../index.tsx";
import MoleculeGroupBtn from "../../../2.Molecules/MoleculeGroupBtn";
import { Fragment } from "react";

const View: TPresent = ({ Model, Style }) => {
	const { btnRow, children } = Model;

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
