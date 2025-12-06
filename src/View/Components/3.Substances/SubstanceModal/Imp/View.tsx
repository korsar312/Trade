import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomModal from "../../../1.Atoms/AtomModal";
import MoleculeFormSchemaLogin from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaLogin";

const View: NFC<typeof Model> = (props) => {
	const { isShow, form, type } = props;

	const Component = getComponent();

	function getComponent() {
		switch (type) {
			case "LOGIN":
				return MoleculeFormSchemaLogin;
			default:
				throw new Error("");
		}
	}

	return (
		<AtomModal css={Style.wrapper} isShow={isShow}>
			<Component {...(form as any)} />
		</AtomModal>
	);
};

export default View;
