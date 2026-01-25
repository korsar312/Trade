import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomModal from "../../../1.Atoms/AtomModal";
import MoleculeFormSchemaLogin from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaLogin";
import type { ReactElement } from "react";
import type { TSubstanceModalCompType } from "../index.tsx";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import MoleculeFormSchemaSwitchChoice from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaSwitchChoice";

const View: NFC<typeof Model> = (props) => {
	const { form, color, bgClick } = props;

	function render({ type, options }: TSubstanceModalCompType): ReactElement {
		switch (type) {
			case "LOGIN":
				return <MoleculeFormSchemaLogin {...options} />;
			case "CHOICE_MANY":
				return <MoleculeFormSchemaSwitchChoice {...options} />;
		}
	}

	return (
		<AtomModal extStyle={Style.wrapper} bgClick={bgClick}>
			<AtomPaper color={color} extStyle={Style.content}>
				{render(form)}
			</AtomPaper>
		</AtomModal>
	);
};

export default View;
