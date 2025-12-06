import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import WidgetDebug from "../../../Components/5.Widget/WidgetDebug";
import AtomButtonIcon from "../../../Components/1.Atoms/AtomButton/Variables/AtomButtonIcon";

const View: NFC<typeof Model> = (props) => {
	const { isShowDebug, toggleDebug } = props;

	return (
		<>
			<WidgetDebug isShow={isShowDebug} onClose={toggleDebug} />

			<div css={Style.debugBtn}>
				<AtomButtonIcon icon={"Bug"} click={toggleDebug} />
			</div>
		</>
	);
};

export default View;
