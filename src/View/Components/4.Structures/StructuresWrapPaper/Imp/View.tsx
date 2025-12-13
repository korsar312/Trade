import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import MoleculeRowControl from "../../../2.Molecules/MoleculeRowControl";
import type { TStructuresWrapPaperCompType } from "../index.tsx";
import type { ReactElement } from "react";

const View: NFC<typeof Model> = (props) => {
	const { innerStruct, wrapProp } = props;

	function render({ type, options }: TStructuresWrapPaperCompType): ReactElement {
		switch (type) {
			case "ROW_CONTROL":
				return <MoleculeRowControl {...options} />;
		}
	}

	return (
		<AtomPaper {...wrapProp} extStyle={[Style.wrapper, wrapProp.extStyle]}>
			{render(innerStruct)}
		</AtomPaper>
	);
};

export default View;
