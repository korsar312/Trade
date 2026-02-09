import type Model from "./Model.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import MoleculeRowControl from "../../../2.Molecules/MoleculeRowControl";

const View: NFC<typeof Model> = (props) => {
	const { rowProps } = props;

	return (
		<AtomPaper>
			<MoleculeRowControl {...rowProps} />
		</AtomPaper>
	);
};

export default View;
