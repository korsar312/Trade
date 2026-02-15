import type { TPresent } from "../";
import type { ReactElement } from "react";
import MoleculeFormSchemaTextTriple from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextTriple";
import MoleculeFormSchemaTextBtn from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextBtn";
import MoleculeFormSchemaTextarea from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextarea";
import MoleculeGroupBtn from "../../../2.Molecules/MoleculeGroupBtn";
import AtomWrapper from "../../../1.Atoms/AtomWrapper";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import AtomButtonMain from "../../../1.Atoms/AtomButton/Variables/AtomButtonMain";

const View: TPresent = ({ Model }) => {
	const { formMainProps, formCardProps, formFreeProps, tabProps, btnProps, typeItem } = Model;

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
