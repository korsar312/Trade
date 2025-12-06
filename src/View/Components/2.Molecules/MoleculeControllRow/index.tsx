import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IBtnI } from "../../1.Atoms/AtomButton/Variables/AtomButtonIcon";
import type { IComponent as IText } from "../../0.Cores/Text";

export interface IComponent {
	btnLeft?: IBtnI;
	btnRight?: IBtnI;
	title?: IText;
}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
