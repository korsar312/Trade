import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { TImageComponent } from "../../0.Cores/Image";
import type { MessageInterface } from "../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";

export interface IComponent {
	image: TImageComponent;
	name: MessageInterface.EWordAll;
	price: MessageInterface.EWordAll;
}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
