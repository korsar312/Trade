import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import type { TSubstanceFormConstructCompType } from "../";
import { type ReactElement } from "react";
import MoleculeGroupBtn from "../../../2.Molecules/MoleculeGroupBtn";
import MoleculeFormSchemaTextBtn from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextBtn";
import MoleculeFormSchemaTextTriple from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextTriple";
import MoleculeFormSchemaInput from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaInput";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import MoleculeFormSchemaTextarea from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextarea";
import MoleculeRowControl from "../../../2.Molecules/MoleculeRowControl/";

const View: NFC<typeof Model> = (props) => {
	const { compRow } = props;

	function render({ type, options }: TSubstanceFormConstructCompType): ReactElement {
		switch (type) {
			case "FORM_TEXT_TRIPLE":
				return <MoleculeFormSchemaTextTriple {...options} />;
			case "FORM_TEXT_BTN":
				return <MoleculeFormSchemaTextBtn {...options} />;
			case "FORM_TEXTAREA":
				return <MoleculeFormSchemaTextarea {...options} />;
			case "FORM_INPUT":
				return <MoleculeFormSchemaInput {...options} />;
			case "TABS":
				return <MoleculeGroupBtn {...options} />;
			case "ROW":
				return <MoleculeRowControl {...options} />;
		}
	}

	return (
		<div css={Style.wrapper}>
			{compRow.map((el) => (
				<AtomPaper key={el.id} color={"MAIN_2"}>
					{render(el)}
				</AtomPaper>
			))}
		</div>
	);
};

export default View;
