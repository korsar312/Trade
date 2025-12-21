import type { FC } from "react";
import Substance, {
	type IComponent as IProp,
	type TMoleculeFormSchemaLoginForm,
} from "../../../Components/2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaLogin";

export interface IComponent {
	onAction: (isOk: boolean) => void;
}

const Index: FC<IComponent> = (props) => {
	const { onAction } = props;

	async function login({ login, password }: TMoleculeFormSchemaLoginForm) {
		console.log(login, password, onAction);
	}

	const propsComponent: IProp = {
		title: "ADMINISTRATION",
		labelLog: "LOGIN",
		labelPas: "PASSWORD",
		btnImg: "Block",
		submit: login,
	};

	return <Substance {...propsComponent} />;
};

export default Index;
