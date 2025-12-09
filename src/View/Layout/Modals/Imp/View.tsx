import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import WidgetDebug from "../../../Components/5.Widget/WidgetDebug";

const View: NFC<typeof Model> = (props) => {
	const { isShowDebug, toggleDebug } = props;

	return (
		<>
			<WidgetDebug isShow={isShowDebug} onClose={toggleDebug} />

			<div css={Style.debugBtn}></div>
		</>
	);
};

export default View;
