import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import SubstanceTabs from "../../../3.Substances/SubstanceTabs";
import { Fragment, type ReactElement } from "react";
import type { TStructuresTabCardCompType } from "../index.tsx";
import SubstanceItemCard from "../../../3.Substances/SubstanceItemCard";
import AtomGridGroup from "../../../1.Atoms/AtomGridGroup";

const View: NFC<typeof Model> = (props) => {
	const { tabs, children } = props;

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
