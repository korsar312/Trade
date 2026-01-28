import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import type { TSubstanceFormConstructCompType } from "../";
import { type ReactElement } from "react";
import AtomButtonMain from "../../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import MoleculeGroupBtn from "../../../2.Molecules/MoleculeGroupBtn";
import MoleculeFormSchemaTextPair from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextPair";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import MoleculeFormSchemaTextareaChoice from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextareaChoice";

const View: NFC<typeof Model> = (props) => {
	const { compRow } = props;

	function render({ type, options }: TSubstanceFormConstructCompType): ReactElement {
		switch (type) {
			case "FORM_TEXT_PAIR":
				return <MoleculeFormSchemaTextPair {...options} />;
			case "FORM_TEXTAREA":
				return <MoleculeFormSchemaTextareaChoice {...options} />;
			case "BTN_MAIN":
				return <AtomButtonMain {...options} />;
			case "TABS":
				return <MoleculeGroupBtn {...options} />;
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
