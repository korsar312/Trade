import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import TemplateCreateListing from "../../../Components/Templates/TemplateCreateListing";

const View: NFC<typeof Model> = (props) => {
	const { typeFormat } = props;

	return (
		<div css={Style.wrapper}>
			<TemplateCreateListing typeItem={typeFormat} />
		</div>
	);
};

export default View;
