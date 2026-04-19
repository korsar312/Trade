import type { TPresent } from "../index.tsx";
import SubstanceChat from "../../../../3.Substances/SubstanceChat";

const View: TPresent = ({ Model }) => {
	const { titleProps, textProps, sendMessage } = Model;

	return <SubstanceChat sendFn={sendMessage} messageList={textProps} titleRow={titleProps} />;
};

export default View;
