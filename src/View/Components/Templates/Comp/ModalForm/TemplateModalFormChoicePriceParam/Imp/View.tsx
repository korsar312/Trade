import type { TPresent } from "../index.tsx";
import SubstanceModal from "../../../../../3.Substances/SubstanceModal";

const View: TPresent = ({ Model }) => {
	const { propsComponent } = Model;

	return <SubstanceModal {...propsComponent} />;
};

export default View;
