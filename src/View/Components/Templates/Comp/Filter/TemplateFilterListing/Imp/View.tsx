import type { TPresent } from "../index.tsx";
import AtomWrapper from "../../../../../1.Atoms/AtomWrapper";
import MoleculeGroupBtn from "../../../../../2.Molecules/MoleculeGroupBtn";

const View: TPresent = ({ Model }) => {
	const { tabProps } = Model;

	return (
		<AtomWrapper styleType={"col"}>
			{tabProps.map((el) => {
				const { id, ...rest } = el;

				return <MoleculeGroupBtn key={id} {...rest} />;
			})}
		</AtomWrapper>
	);
};

export default View;
