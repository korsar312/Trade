import type { TPresent, TStructuresTabCardCompType } from "../index.tsx";
import SubstanceTabs from "../../../3.Substances/SubstanceTabs";
import { Fragment, type ReactElement } from "react";
import SubstanceItemCard from "../../../3.Substances/SubstanceItemCard";
import AtomGridGroup from "../../../1.Atoms/AtomGridGroup";

const View: TPresent = ({ Model, Style }) => {
	const { tabs, children } = Model;

	function render({ type, options }: TStructuresTabCardCompType): ReactElement {
		switch (type) {
			case "ITEM_CARD":
				return <SubstanceItemCard {...options} />;
		}
	}

	return (
		<SubstanceTabs btnRow={tabs}>
			<div css={Style.wrapper}>
				<AtomGridGroup>
					{children.map((el) => (
						<Fragment key={el.id}> {render(el)} </Fragment>
					))}
				</AtomGridGroup>
			</div>
		</SubstanceTabs>
	);
};

export default View;
