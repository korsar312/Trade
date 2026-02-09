import type Model from "./Model.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import type { ReactElement } from "react";
import MoleculeFormSchemaTextTriple from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextTriple";
import MoleculeFormSchemaTextBtn from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextBtn";
import MoleculeFormSchemaTextarea from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextarea";
import MoleculeGroupBtn from "../../../2.Molecules/MoleculeGroupBtn";
import AtomWrapper from "../../../1.Atoms/AtomWrapper";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import AtomButtonMain from "../../../1.Atoms/AtomButton/Variables/AtomButtonMain";

const View: NFC<typeof Model> = (props) => {
	const { formMainProps, formCardProps, formFreeProps, tabProps, btnProps, typeItem } = props;

	function getItem(): ReactElement {
		switch (typeItem) {
			case "CARD":
				return <MoleculeFormSchemaTextBtn {...formCardProps} />;
			case "FREE":
				return <MoleculeFormSchemaTextarea {...formFreeProps} />;
		}
	}

	return (
		<AtomWrapper styleType={"col"}>
			<AtomPaper>
				<AtomButtonMain {...btnProps} />
			</AtomPaper>

			<AtomPaper>
				<MoleculeFormSchemaTextTriple {...formMainProps} />
			</AtomPaper>

			<AtomPaper>
				<MoleculeGroupBtn {...tabProps} />
			</AtomPaper>

			<AtomPaper>{getItem()}</AtomPaper>
		</AtomWrapper>
	);
};

export default View;
