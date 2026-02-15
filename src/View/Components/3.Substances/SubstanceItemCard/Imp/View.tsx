import type { TPresent } from "../";
import Image from "../../../0.Cores/Image";
import Text from "../../../0.Cores/Text";
import AtomPaper from "../../../1.Atoms/AtomPaper";
import AtomButtonMain from "../../../1.Atoms/AtomButton/Variables/AtomButtonMain";

const View: TPresent = ({ Model, Style }) => {
	const { image, name, btnList, click } = Model;

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
