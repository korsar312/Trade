import type { TPresent, TSubstanceModalCompType } from "../index.tsx";
import type { ReactElement } from "react";
import AtomModal from "../../../1.Atoms/AtomModal";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import MoleculeFormSchemaSwitchChoice from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaSwitchChoice";
import MoleculeFormSchemaRadioChoice from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaRadioChoice";
import MoleculeFormSchemaInput from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaInput";
import MoleculeFormSchemaImageQtyChoice from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaImageQtyChoice";
import MoleculeFormSchemaTextDuble from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextDuble";

const View: TPresent = ({ Model, Style }) => {
	const { form, color, bgClick } = Model;

	function render({ type, options }: TSubstanceModalCompType): ReactElement {
		switch (type) {
			case "CHOICE_MANY":
				return <MoleculeFormSchemaSwitchChoice {...options} />;
			case "CHOICE_ONE":
				return <MoleculeFormSchemaRadioChoice {...options} />;
			case "INPUT_ONE":
				return <MoleculeFormSchemaInput {...options} />;
			case "IMAGE_QTY":
				return <MoleculeFormSchemaImageQtyChoice {...options} />;
			case "TEXT_DUBLE":
				return <MoleculeFormSchemaTextDuble {...options} />;
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
