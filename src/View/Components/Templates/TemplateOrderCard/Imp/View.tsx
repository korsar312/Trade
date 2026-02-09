import type Model from "./Model.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import StructuresTabCard from "../../../4.Structures/StructuresTabCard";

const View: NFC<typeof Model> = (props) => {
	const { rowProps } = props;

	return <StructuresTabCard {...rowProps} />;
};

export default View;
