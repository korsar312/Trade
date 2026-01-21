import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import type { ReactElement } from "react";
import type { TMoleculeFormSchemaField, TMoleculeFormSchemaRow } from "../index.tsx";
import Form from "../../../0.Cores/Form";
import Text from "../../../0.Cores/Text";
import type { TDeepCSSObject } from "../../../../ViewUtils.tsx";
import AtomButtonIcon from "../../../1.Atoms/AtomButton/Variables/AtomButtonIcon";
import AtomButtonMain from "../../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import AtomInput from "../../../1.Atoms/AtomInput";
import AtomToggleSwitch from "../../../1.Atoms/AtomToggle/Variables/AtomToggleSwitch";

const View: NFC<typeof Model> = (props) => {
	const { schema, form } = props;

	function typeChoice(field: TMoleculeFormSchemaRow, id: number): ReactElement {
		const { value: element, extStyle } = field;
		const value = Array.isArray(element) ? element.map((el, i) => typeChoice(el, i)) : fieldChoice(element);

		return elementWrapper(value, id, extStyle);
	}

	function fieldChoice(field: TMoleculeFormSchemaField) {
		switch (field.type) {
			case "text":
				return <Text {...field.options} />;
			case "input":
				return <AtomInput {...field.options} />;
			case "btnIcon":
				return <AtomButtonIcon {...field.options} />;
			case "btn":
				return <AtomButtonMain {...field.options} />;
			case "switch":
				return <AtomToggleSwitch {...field.options} />;
		}
	}

	function elementWrapper(fields: ReactElement | ReactElement[], id: number, extStyle?: TDeepCSSObject) {
		return (
			<div key={id} css={extStyle}>
				{fields}
			</div>
		);
	}

	return (
		<Form css={Style.form} {...form}>
			{typeChoice(schema, 1)}
		</Form>
	);
};

export default View;
