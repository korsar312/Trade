import type { FC } from "react";
import Substance, {
	type IComponent as IProp,
	type TMoleculeFormSchemaLoginForm,
} from "../../../Components/2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaLogin";
import { Act } from "../../../../Logic/Core";

export interface IComponent {
	onAction: (isOk: boolean) => void;
}

const Index: FC<IComponent> = (props) => {
	const { onAction } = props;

	async function login({ login, password }: TMoleculeFormSchemaLoginForm) {
		const log = Act.Setting.loginAdmin(login, password);

		onAction(Boolean(log));
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
