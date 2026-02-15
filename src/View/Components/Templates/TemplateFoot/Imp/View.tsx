import type { TPresent } from "../";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import MoleculeRowControl from "../../../2.Molecules/MoleculeRowControl";

const View: TPresent = ({ Model }) => {
	const { rowProps } = Model;

	return (
		<AtomPaper>
			<MoleculeRowControl {...rowProps} />
		</AtomPaper>
	);
};

export default View;
