import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import TemplateCatalogue from "../../../Components/Templates/TemplateCatalogue";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	return (
		<div css={Style.wrapper}>
			<TemplateCatalogue />
		</div>
	);
};

export default View;
