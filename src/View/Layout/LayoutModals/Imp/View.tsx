import type Model from "./Model.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import TemplateModalFormChoiceParam from "../../../Components/Templates/TemplateModalFormChoiceParam";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	return (
		<>
			<TemplateModalFormChoiceParam type={"bank"} submitFn={console.log} />
		</>
	);
};

export default View;
