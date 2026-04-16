import type { TModel } from "../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import Util from "../../../../../Logic/Libs/Util";

function Model({ Props }: TModel<TComponent>) {
	const { date, ...rest } = Props;

	const dateString = Util.toDate(date, ["DD", ".MM", ".YY", " hh", ":mm"]);

	return { dateString, ...rest };
}

export default Model;
