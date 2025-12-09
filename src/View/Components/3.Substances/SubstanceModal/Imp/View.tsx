import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomModal from "../../../1.Atoms/AtomModal";
import MoleculeFormSchemaLogin from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaLogin";
import type { ReactNode } from "react";
import type { TSubstanceModalCompType } from "../index.tsx";

const View: NFC<typeof Model> = (props) => {
	const { isShow, form } = props;

	function render({ type, options }: TSubstanceModalCompType): ReactNode {
		switch (type) {
			case "LOGIN":
				return <MoleculeFormSchemaLogin {...options} />;
		}
	}

	return (
		<AtomModal css={Style.wrapper} isShow={isShow}>
			{render(form)}
		</AtomModal>
	);
};

export default View;
