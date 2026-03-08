import type { TPresent } from "../index.tsx";
import SubstanceTabs from "../../../../3.Substances/SubstanceTabs";
import AtomGridGroup from "../../../../1.Atoms/AtomGridGroup";
import SubstanceItemCard from "../../../../3.Substances/SubstanceItemCard";

const View: TPresent = ({ Model }) => {
	const { cardList, tabProps } = Model;

	return (
		<SubstanceTabs btnRow={tabProps}>
			<AtomGridGroup>
				{cardList.map(({ id, ...rest }) => (
					<SubstanceItemCard key={id} {...rest} />
				))}
			</AtomGridGroup>
		</SubstanceTabs>
	);
};

export default View;
