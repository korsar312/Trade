import type { FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceModal/index.tsx";
import { PublicInterface } from "../../../../Logic/Core/Services/Public.interface.ts";
import type { TMoleculeFormSchemaImageQtyChoiceForm } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaImageQtyChoice";

type TModal = Pick<IProp, "bgClick" | "color">;

export interface IComponent extends TModal {
	submitFn: (val: PublicInterface.TRating | null) => void;
}

const Index: FC<IComponent> = (props) => {
	const { submitFn, ...propRest } = props;

	const list = [0, 1, 2, 3, 4] as PublicInterface.TRating[];

	function submit(data: TMoleculeFormSchemaImageQtyChoiceForm) {
		const index = data.qtyIndex.trim();
		if (index === "") return submitFn(null);

		const n = Number(index);
		return submitFn(Number.isFinite(n) ? (n as PublicInterface.TRating) : null);
	}

	const propsComponent: IProp = {
		...propRest,
		form: {
			type: "IMAGE_QTY",
			options: {
				title: { text: "SELECT_RATING_QTY" },
				submit,
				btnImageList: list.map(() => ({ icon: "Star" })),
				btn: { text: "APPLY" },
			},
		},
	};

	return <Substance {...propsComponent} />;
};

export default Index;
