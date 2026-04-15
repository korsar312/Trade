import type { TPresent } from "../index.tsx";
import SubstanceChat from "../../../../3.Substances/SubstanceChat";

const View: TPresent = ({ Model }) => {
	const { titleProps } = Model;

	return <SubstanceChat titleRow={titleProps} />;
};

export default View;
