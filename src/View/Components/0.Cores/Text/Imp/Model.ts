import type { IComponent } from "../index";
import { Act } from "../../../../../Logic/Core";

function Model(props: IComponent) {
	const { text, color, caseWord, extStyle, font, opacity, addContent, pos, addStyle, label } = props;

	const textFind = Act.Message.getWord(text, { case: caseWord, arrReplace: addContent, arrStyle: addStyle });

	return { textFind, color, extStyle, font, opacity, pos, label };
}

export default Model;
