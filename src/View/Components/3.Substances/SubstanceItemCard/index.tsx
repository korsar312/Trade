import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { TImageComponent } from "../../0.Cores/Image";
import type { MessageInterface } from "../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { IComponent as IBtn } from "../../1.Atoms/AtomButton/Variables/AtomButtonMain";

export interface IComponent {
	click?: () => void;
	image: TImageComponent;
	name: MessageInterface.EWordAll;
	btn: IBtn[];
}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
