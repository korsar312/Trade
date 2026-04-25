import type { TPresent } from "../index.tsx";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import MoleculeChatField from "../../../2.Molecules/MoleculeChatField";
import MoleculeChatInput from "../../../2.Molecules/MoleculeChatInput";
import MoleculeRowControl from "../../../2.Molecules/MoleculeRowControl";
import AtomWrapper from "../../../1.Atoms/AtomWrapper";
import AtomLine from "../../../1.Atoms/AtomLine";

const View: TPresent = ({ Model, Style }) => {
	const { sendFn, input, titleRow, btn, messageList, ref } = Model;

	return (
		<AtomPaper extStyle={Style.wrapper} color={"MAIN_4"}>
			<AtomWrapper styleType={"col"}>
				<MoleculeRowControl compRow={titleRow} />
				<AtomLine color={"SECOND_2"} />
			</AtomWrapper>

			<div css={Style.chat}>
				<MoleculeChatField textRow={messageList} />
			</div>

			<AtomWrapper styleType={"col"}>
				<AtomLine color={"SECOND_2"} />
				<MoleculeChatInput ref={ref} sendFn={sendFn} input={input} btn={btn} />
			</AtomWrapper>
		</AtomPaper>
	);
};

export default View;
