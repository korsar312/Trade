import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import AtomPaperCard from "../../../1.Atoms/AtomPaper/Variables/AtomPaperCard";
import Image from "../../../0.Cores/Image";
import Text from "../../../0.Cores/Text";

const View: NFC<typeof Model> = (props) => {
	const { image, name, price } = props;

	return (
		<AtomPaperCard extStyle={Style.wrapper}>
			<div css={Style.image}>
				<Image color={"MAIN_2"} size={"100%"} img={image} />
			</div>

			<div css={Style.body}>
				<div css={Style.name}>
					<Text text={name} font={"ElementHeading"} />
				</div>

				<Text text={price} font={"BlockHeading"} />
			</div>

			<div css={Style.count}></div>
		</AtomPaperCard>
	);
};

export default View;
