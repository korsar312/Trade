import type { TModel } from "../../../../CreateComponent.tsx";
import type { TComponent } from "../";

function Model({ Props, Act }: TModel<TComponent>) {
	const { text, color, caseWord, extStyle, font, opacity, addContent, pos, addStyle, label } = Props;

	const textFind = Act.Message.getWord(text, { case: caseWord, arrReplace: addContent, arrStyle: addStyle });

	return { textFind, color, extStyle, font, opacity, pos, label };
}

export default Model;
