import type { TPresent } from "../index.tsx";
import SubstanceChat from "../../../../3.Substances/SubstanceChat";

const View: TPresent = ({ Model }) => {
	const { titleProps, textProps } = Model;

	return <SubstanceChat messageList={textProps} titleRow={titleProps} />;
};

export default View;
