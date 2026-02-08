import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import { type ReactNode, type Ref } from "react";

export interface IComponent extends TFormPick {
	children?: ReactNode;
	ref?: Ref<HTMLFormElement>;
}

type TFormPick = Partial<Pick<HTMLFormElement, "onSubmit" | "id">>;

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
