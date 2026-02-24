import type { TModel } from "../../../../CreateComponent.tsx";
import type { TComponent } from "../";

function Model({ Props, Act }: TModel<TComponent>) {
	const { text, caseWord, addContent, addStyle, ...rest } = Props;

	const textFind = Act.Message.getWord(text, { case: caseWord, arrReplace: addContent, arrStyle: addStyle });

	return { textFind, ...rest };
}

export default Model;
