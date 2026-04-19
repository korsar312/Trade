import type { TPresent } from "../index.tsx";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import MoleculeChatField from "../../../2.Molecules/MoleculeChatField";
import MoleculeRowControl from "../../../2.Molecules/MoleculeRowControl";
import AtomWrapper from "../../../1.Atoms/AtomWrapper";
import AtomLine from "../../../1.Atoms/AtomLine";
import AtomButtonIcon from "../../../1.Atoms/AtomButton/Variables/AtomButtonIcon";
import AtomTextarea from "../../../1.Atoms/AtomTextarea";

const View: TPresent = ({ Model, Style }) => {
	const { sendText, setTextSend, isEmptyText, input, titleRow, btn, messageList } = Model;

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

				<AtomWrapper styleType={"row"}>
					<AtomTextarea onChange={setTextSend} placeholder={"ENTER_MESSAGE"} color={"MAIN_3"} {...input} />
					<AtomButtonIcon isDisable={isEmptyText} color={"BLUE_2"} click={sendText} icon={"Send"} {...btn} />
				</AtomWrapper>
			</AtomWrapper>
		</AtomPaper>
	);
};

export default View;
