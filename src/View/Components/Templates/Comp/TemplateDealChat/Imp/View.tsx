import type { TPresent } from "../index.tsx";
import SubstanceChat from "../../../../3.Substances/SubstanceChat";

const View: TPresent = ({ Model }) => {
	const { titleProps, textProps, sendMessage, ref } = Model;

	return <SubstanceChat ref={ref} sendFn={sendMessage} messageList={textProps} titleRow={titleProps} />;
};

export default View;
