import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { ReactNode } from "react";

export interface IComponent extends TFormPick {
	children?: ReactNode;
}

type TFormPick = Partial<Pick<HTMLFormElement, "onSubmit" | "id">>;

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
