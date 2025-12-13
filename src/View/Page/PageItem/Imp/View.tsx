import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import TemplateItemDetail from "../../../Components/Templates/TemplateItemDetail";
import AtomPaper from "../../../Components/1.Atoms/AtomPaper";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	return (
		<div css={Style.wrapper}>
			<AtomPaper color={"MAIN_3"}>
				<TemplateItemDetail />
			</AtomPaper>
		</div>
	);
};

export default View;
