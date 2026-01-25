import type Model from "./Model.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import TemplateModalFormChoiceParam from "../../../Components/Templates/TemplateModalFormChoiceParam";
import { Fragment } from "react";
import { AppInterface } from "../../../../Logic/Core/Services/ServiceApp/App.interface.ts";

const View: NFC<typeof Model> = (props) => {
	const { modalList, closeModal } = props;

	function renderModal<T extends AppInterface.EModalName>(
		name: T,
		fn: (val: AppInterface.TModalPayloadMap[T]) => void,
		close: () => void,
	) {
		switch (name) {
			case "BANK":
				return <TemplateModalFormChoiceParam type={"bank"} submitFn={fn} bgClick={close} />;
		}
	}

	return (
		<>
			{modalList.map((el, i) => (
				<Fragment key={i}>{renderModal(el.type, el.successFn, () => closeModal(el.id))}</Fragment>
			))}
		</>
	);
};

export default View;
