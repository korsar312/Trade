import type { TPresent } from "../index.tsx";
import AtomWrapper from "../../../1.Atoms/AtomWrapper";
import AtomTextarea from "../../../1.Atoms/AtomTextarea";
import AtomButtonIcon from "../../../1.Atoms/AtomButton/Variables/AtomButtonIcon";

const View: TPresent = ({ Model, Style }) => {
	const { text, sendText, setText, isEmptyText, input, btn } = Model;

	return (
		<AtomWrapper extStyle={Style.wrapper} styleType={"row"}>
			<AtomTextarea value={text} onChange={setText} placeholder={"ENTER_MESSAGE"} color={"MAIN_3"} {...input} />
			<AtomButtonIcon isDisable={isEmptyText} color={"BLUE_2"} click={sendText} icon={"Send"} {...btn} />
		</AtomWrapper>
	);
};

export default View;
