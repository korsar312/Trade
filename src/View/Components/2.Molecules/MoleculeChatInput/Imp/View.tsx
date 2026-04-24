import type { TPresent } from "../index.tsx";
import AtomWrapper from "../../../1.Atoms/AtomWrapper";
import AtomTextarea from "../../../1.Atoms/AtomTextarea";
import AtomButtonIcon from "../../../1.Atoms/AtomButton/Variables/AtomButtonIcon";

const View: TPresent = ({ Model, Style }) => {
	const { sendText, isLoad, setText, isEmptyText, input, btn, areaRef } = Model;

	return (
		<AtomWrapper extStyle={Style.wrapper} styleType={"row"}>
			<AtomTextarea ref={areaRef} onChange={setText} placeholder={"ENTER_MESSAGE"} color={"MAIN_3"} {...input} />
			<AtomButtonIcon isLoading={isLoad} isDisable={isEmptyText} color={"BLUE_2"} click={sendText} icon={"Send"} {...btn} />
		</AtomWrapper>
	);
};

export default View;
