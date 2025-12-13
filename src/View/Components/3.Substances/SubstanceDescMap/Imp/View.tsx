import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Text from "../../../0.Cores/Text";
import type { TSubstanceDescMapRow } from "../index.tsx";
import MoleculeRowControl from "../../../2.Molecules/MoleculeRowControl";
import { Fragment } from "react";

const View: NFC<typeof Model> = (props) => {
	const { rows } = props;

	function row({ key, value }: TSubstanceDescMapRow) {
		return (
			<tr>
				<td css={Style.key}>
					<Text {...key} color={key.color ?? "SECOND_2"} />
				</td>

				<td css={Style.value}>
					<MoleculeRowControl {...value} />
				</td>
			</tr>
		);
	}

	return (
		<table css={Style.wrapper}>
			<tbody>
				{rows.map((el) => (
					<Fragment key={el.id}>{row(el)}</Fragment>
				))}
			</tbody>
		</table>
	);
};

export default View;
