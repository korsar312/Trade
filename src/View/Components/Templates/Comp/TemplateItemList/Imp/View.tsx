import type { TPresent } from "../index.tsx";
import SubstanceItemCard from "../../../../3.Substances/SubstanceItemCard";
import AtomGridGroup from "../../../../1.Atoms/AtomGridGroup";

const View: TPresent = ({ Model }) => {
	const { rowProps } = Model;

	return (
		<AtomGridGroup>
			{rowProps.map(({ id, ...card }) => (
				<SubstanceItemCard key={id} {...card} />
			))}
		</AtomGridGroup>
	);
};

export default View;
