import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Text from "../../../0.Cores/Text";
import type { TSubstanceDescMapRow } from "../index.tsx";
import MoleculeRowControl from "../../../2.Molecules/MoleculeRowControl";
import { Fragment, type ReactElement } from "react";

const View: NFC<typeof Model> = (props) => {
	const { rows } = props;

	function row(props: TSubstanceDescMapRow): ReactElement {
		switch (props.type) {
			case "vert":
				return rowVertical(props);

			default:
				return rowHorizontal(props);
		}
	}

	function rowHorizontal(props: TSubstanceDescMapRow) {
		return (
			<tr>
				<td css={Style.keyG}>{renderKey(props)}</td>
				<td css={Style.valueG}>{renderValue(props)}</td>
			</tr>
		);
	}

	function rowVertical(props: TSubstanceDescMapRow): ReactElement {
		return (
			<Fragment>
				<tr>
					<td css={Style.keyV} colSpan={2}>
						{renderKey(props)}
					</td>
				</tr>
				<tr>
					<td css={[Style.valueV]} colSpan={2}>
						{renderValue(props)}
					</td>
				</tr>
			</Fragment>
		);
	}

	function renderKey({ key }: TSubstanceDescMapRow) {
		return <Text {...key} color={key.color ?? "SECOND_2"} />;
	}

	function renderValue({ value }: TSubstanceDescMapRow) {
		return <MoleculeRowControl {...value} />;
	}

	return (
		<div css={Style.wrapper}>
			<table css={Style.table}>
				<tbody>
					{rows.map((el) => (
						<Fragment key={el.id}>{row(el)}</Fragment>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default View;
