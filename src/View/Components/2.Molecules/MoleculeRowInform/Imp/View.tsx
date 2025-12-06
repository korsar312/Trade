import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Image from "../../../0.Cores/Image";
import Text from "../../../0.Cores/Text";
import AtomLine from "../../../1.Atoms/AtomLine";
import AtomPaper from "../../../1.Atoms/AtomPaper";

const View: NFC<typeof Model> = (props) => {
	const { extStyles, row } = props;

	return (
		<AtomPaper color={"MAIN_2"} extStyle={[Style.wrapper, extStyles]}>
			{row.map((el, i) => (
				<>
					{i >= 1 && <AtomLine isVert />}

					<div css={[Style.field, el.extStyles]}>
						{el.icon && <Image {...el.icon} />}
						{el.text && <Text {...el.text} />}
					</div>
				</>
			))}
		</AtomPaper>
	);
};

export default View;
