import type { TModel } from "../../../../CreateComponent.tsx";
import type { TComponent, TMoleculeFormSchemaRow, TMoleculeFormSchemaRowNorm } from "../";

function Model({ Props }: TModel<TComponent>) {
	const { schema, form } = Props;

	const schemaNorm = normalizeRow(schema) ?? ({ ...schema, value: [] } satisfies TMoleculeFormSchemaRowNorm);

	function normalizeRow(row?: TMoleculeFormSchemaRow): TMoleculeFormSchemaRowNorm | null {
		if (row?.value == null) return null;

		if (Array.isArray(row.value)) {
			const list = row.value.map(normalizeRow).filter((x): x is TMoleculeFormSchemaRowNorm => x != null);
			return { extStyle: row.extStyle ?? {}, value: list };
		}

		return { extStyle: row.extStyle, value: row.value };
	}

	return { schemaNorm, form };
}

export default Model;
