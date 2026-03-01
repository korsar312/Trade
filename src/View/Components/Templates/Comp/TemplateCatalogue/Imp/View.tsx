import type { TPresent } from "../index.tsx";
import StructuresCatalog from "../../../../4.Structures/StructuresCatalog";

const View: TPresent = ({ Model }) => {
	const { propsComponent } = Model;

	return <StructuresCatalog {...propsComponent} />;
};

export default View;
