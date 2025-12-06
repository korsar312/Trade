import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import type { ReactElement } from "react";
import type { TMoleculeFormSchemaField, TMoleculeFormSchemaRow } from "../index.tsx";
import Form from "../../../0.Cores/Form";
import Text from "../../../0.Cores/Text";
import type { TDeepCSSObject } from "../../../../ViewUtils.tsx";
import AtomButtonMajor from "../../../1.Atoms/AtomButton/Variables/AtomButtonIcon";
import AtomInput from "../../../1.Atoms/AtomInput";
import AtomPaper from "../../../1.Atoms/AtomPaper";

const View: NFC<typeof Model> = (props) => {
	const { schema, extStyle, color, form } = props;

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
			case "btn":
				return <AtomButtonMajor {...field.options} />;
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
		<Form {...form}>
			<AtomPaper extStyle={[Style.form, extStyle]} color={color}>
				{typeChoice(schema, 1)}
			</AtomPaper>
		</Form>
	);
};

export default View;
