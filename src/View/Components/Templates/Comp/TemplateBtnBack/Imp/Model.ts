import type { TModel } from "../../../../../CreateComponent.tsx";
import type { TComponent } from "../index.tsx";
import type { TComponent as IBtn } from "../../../../../Components/1.Atoms/AtomButton/Variables/AtomButtonMain";

function Model({ Props, Act }: TModel<TComponent>) {
	const {} = Props;

	const params: IBtn = {
		text: "BACK",
		color: "MAIN_3",
		click: Act.Router.goBack,
		...Props,
	};

	return { params };
}

export default Model;
