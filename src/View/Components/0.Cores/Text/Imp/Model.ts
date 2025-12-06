import type { IComponent } from "../index";
import { Act } from "../../../../../Logic/Core";

function Model(props: IComponent) {
	const { text, color, caseWord, extStyle, font, opacity, addContent, pos } = props;

	const textFind = Act.Message.getWord(text, { case: caseWord, arrReplace: addContent });

	return { textFind, color, extStyle, font, opacity, pos };
}

export default Model;
