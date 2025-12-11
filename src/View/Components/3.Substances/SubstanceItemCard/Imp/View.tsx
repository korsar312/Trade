import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Image from "../../../0.Cores/Image";
import Text from "../../../0.Cores/Text";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import AtomButtonMain from "../../../1.Atoms/AtomButton/Variables/AtomButtonMain";

const View: NFC<typeof Model> = (props) => {
	const { image, name, btnList, click } = props;

	return (
		<AtomPaper onClick={click} color={"MAIN_3"} extStyle={Style.wrapper}>
			<AtomPaper color={"MAIN_4"} extStyle={Style.imageWrap}>
				<Image size={"100%"} img={image} extStyle={Style.image} />
			</AtomPaper>

			<div css={Style.body}>
				<div css={Style.textWrap}>
					<Text text={name} font={"ElementHeading"} />
				</div>

				<div css={Style.btnWrap}>
					{btnList.map((el) => (
						<AtomButtonMain key={el.text} {...el} />
					))}
				</div>
			</div>
		</AtomPaper>
	);
};

export default View;
