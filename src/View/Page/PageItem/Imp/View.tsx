import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import TemplateItemDetail from "../../../Components/Templates/TemplateItemDetail";
import AtomPaper from "../../../Components/1.Atoms/AtomPaper";
import AtomButtonMain from "../../../Components/1.Atoms/AtomButton/Variables/AtomButtonMain";
import { Act } from "../../../../Logic/Core";
import { useParamPage } from "../../../../Logic/Libs/Hooks/useParamPage/useParam.ts";
import Image from "../../../Components/0.Cores/Image";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	const param = useParamPage("ITEM");
	const itemId = param.id || "";
	const image = Act.Catalogue.getImage(itemId);

	function goBack() {
		Act.Router.goBack();
	}

	return (
		<AtomPaper extStyle={Style.wrapper} color={"MAIN_2"}>
			<div css={Style.imageWrap}>
				<Image size={"100%"} img={image} />
			</div>

			<div css={Style.detailWrap}>
				<TemplateItemDetail itemId={itemId} />
			</div>

			<div css={Style.btnWrap}>
				<AtomButtonMain isFullWidth text={"BUY"} color={"BLUE_2"} />
				<AtomButtonMain text={"BACK"} color={"MAIN_3"} click={goBack} />
			</div>
		</AtomPaper>
	);
};

export default View;
