import type { TPresent } from "../index.tsx";
import MoleculeGroupBtn from "../../../../../2.Molecules/MoleculeGroupBtn";

const View: TPresent = ({ Model }) => {
	const { tabProps } = Model;

	return <MoleculeGroupBtn {...tabProps} />;
};

export default View;
