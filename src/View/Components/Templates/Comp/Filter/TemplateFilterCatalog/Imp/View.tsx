import type { TPresent } from "../index.tsx";
import MoleculeRowControl from "../../../../../2.Molecules/MoleculeRowControl";
import AtomWrapper from "../../../../../1.Atoms/AtomWrapper";

const View: TPresent = ({ Model }) => {
	const { propsFilter } = Model;

	return (
		<AtomWrapper styleType={"col"}>
			{propsFilter.map((el) => {
				const { id, ...propsControl } = el;

				return <MoleculeRowControl {...propsControl} />;
			})}
		</AtomWrapper>
	);
};

export default View;
