import type { TPresent, TSubstanceDescMapRow } from "../index.tsx";
import type { TComponent as IText } from "../../../0.Cores/Text";
import Text from "../../../0.Cores/Text";
import type { TComponent as IControl } from "../../../2.Molecules/MoleculeRowControl";
import MoleculeRowControl from "../../../2.Molecules/MoleculeRowControl";
import { Fragment, type ReactElement } from "react";

const View: TPresent = ({ Model, Style }) => {
	const { rows } = Model;

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
				{props.key && <td css={Style.keyG}>{renderKey(props.key)}</td>}
				<td css={Style.valueG}>{renderValue(props.value)}</td>
			</tr>
		);
	}

	function rowVertical(props: TSubstanceDescMapRow): ReactElement {
		return (
			<Fragment>
				{props.key && (
					<tr>
						<td css={Style.keyV} colSpan={2}>
							{renderKey(props.key)}
						</td>
					</tr>
				)}
				<tr>
					<td css={[Style.valueV]} colSpan={2}>
						{renderValue(props.value)}
					</td>
				</tr>
			</Fragment>
		);
	}

	function renderKey(text: IText) {
		return <Text {...text} color={text.color ?? "SECOND_2"} />;
	}

	function renderValue(value: IControl) {
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
