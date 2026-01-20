import type Model from "./Model.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import TemplateModalFormChoiceBank from "../../../Components/Templates/TemplateModalFormChoiceBank";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	return (
		<>
			<TemplateModalFormChoiceBank submitFn={console.log} />
		</>
	);
};

export default View;
