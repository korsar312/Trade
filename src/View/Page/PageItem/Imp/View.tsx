import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import TemplateItemDetail from "../../../Components/Templates/TemplateItemDetail";
import AtomPaper from "../../../Components/1.Atoms/AtomPaper";
import AtomButtonMain from "../../../Components/1.Atoms/AtomButton/Variables/AtomButtonMain";
import { Act } from "../../../../Logic/Core";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	function goBack() {
		Act.Router.goBack();
	}

	return (
		<AtomPaper extStyle={Style.wrapper} color={"MAIN_2"}>
			<div css={Style.detailWrap}>
				<TemplateItemDetail />
			</div>

			<div css={Style.btnWrap}>
				<AtomButtonMain isFullWidth text={"BUY"} color={"BLUE_2"} />
				<AtomButtonMain text={"BACK"} click={goBack} />
			</div>
		</AtomPaper>
	);
};

export default View;
