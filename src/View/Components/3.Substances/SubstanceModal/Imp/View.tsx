import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomModal from "../../../1.Atoms/AtomModal";
import MoleculeFormSchemaLogin from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaLogin";
import type { ReactElement } from "react";
import type { TSubstanceModalCompType } from "../index.tsx";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import MoleculeFormSchemaSimpleChoice from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaSimpleChoice";

const View: NFC<typeof Model> = (props) => {
	const { isShow, form, color } = props;

	function render({ type, options }: TSubstanceModalCompType): ReactElement {
		switch (type) {
			case "LOGIN":
				return <MoleculeFormSchemaLogin {...options} />;
			case "CHOICE":
				return <MoleculeFormSchemaSimpleChoice {...options} />;
		}
	}

	return (
		<AtomModal extStyle={Style.wrapper} isShow={isShow}>
			<AtomPaper color={color} extStyle={Style.content}>
				{render(form)}
			</AtomPaper>
		</AtomModal>
	);
};

export default View;
