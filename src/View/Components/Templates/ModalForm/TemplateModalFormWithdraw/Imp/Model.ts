import type { TModel } from "../../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { TComponent as IProp } from "../../../../3.Substances/SubstanceModal";
import type { TSchemaTextDuble } from "../../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextDuble";

function Model({ Props, Act }: TModel<TComponent>) {
	const { submitFn, ...propRest } = Props;

	function submit(data: TSchemaTextDuble) {
		submitFn({ address: data.title, amount: Number(data.subtitle) });
	}

	const propsComponent: IProp = {
		...propRest,
		form: {
			type: "TEXT_DUBLE",
			options: {
				title: { text: "WITHDRAWAL_OF_FUNDS" },
				labelTitle: { placeholder: "ADDRESS_WALLET", required: true },
				labelSubtitle: {
					placeholder: "WITHDRAWAL_AMOUNT",
					type: "number",
					required: true,
					valid: [(val) => ({ error: "CANCEL_PAYMENT", isValid: !Act.Wallet.isWithdrawEnoughFunds(Number(val)) })],
				},
				btn: { text: "APPLY" },
				submit,
			},
		},
	};

	return { propsComponent };
}

export default Model;
