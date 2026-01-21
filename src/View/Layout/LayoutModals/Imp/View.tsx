import type Model from "./Model.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import TemplateModalFormChoiceParam from "../../../Components/Templates/TemplateModalFormChoiceParam";
import { Fragment } from "react";

const View: NFC<typeof Model> = (props) => {
	const { modalList } = props;

	return (
		<>
			{modalList.map((_el, i) => {
				return (
					<Fragment key={i}>
						<TemplateModalFormChoiceParam type={"bank"} submitFn={console.log} />
					</Fragment>
				);
			})}
		</>
	);
};

export default View;
