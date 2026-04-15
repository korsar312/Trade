import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";

function Model({ Props, Act, Pub }: TModel<TComponent>) {
	const {} = Props;

	const isInit = Act.App.isInit();
	const router = Act.Router.getRouteObj();

	document.title = Pub.getNamePage();

	return { router, isInit };
}

export default Model;
