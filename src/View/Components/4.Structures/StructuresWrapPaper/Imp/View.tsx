import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import SubstanceRowControl from "../../../3.Substances/SubstanceRowControl";
import type { TStructuresWrapPaperCompType } from "../index.tsx";
import type { ReactNode } from "react";

const View: NFC<typeof Model> = (props) => {
	const { innerStruct, wrapProp } = props;

	function render({ type, options }: TStructuresWrapPaperCompType): ReactNode {
		switch (type) {
			case "ROW_CONTROL":
				return <SubstanceRowControl {...options} />;
		}
	}

	return (
		<AtomPaper {...wrapProp} extStyle={[Style.wrapper, wrapProp.extStyle]}>
			{render(innerStruct)}
		</AtomPaper>
	);
};

export default View;
