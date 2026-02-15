import type { TMoleculeGroupBtn, TPresent } from "../index.tsx";
import AtomButtonMain from "../../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import { Fragment } from "react";

const View: TPresent = ({ Model, Style }) => {
	const { btnRow } = Model;

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
