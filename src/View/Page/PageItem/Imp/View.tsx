import type { TPresent } from "../";
import TemplateItemDetail from "../../../Components/Templates/Comp/TemplateItemDetail";
import AtomPaper from "../../../Components/1.Atoms/AtomPaper";
import AtomButtonMain from "../../../Components/1.Atoms/AtomButton/Variables/AtomButtonMain";
import Image from "../../../Components/0.Cores/Image";
import PropsBuyItemBtn from "../../../Components/Templates/Props/PropsBuyItemBtn.ts";
import { Act } from "../../../Init.ts";

const View: TPresent = ({ Model, Style }) => {
	const { image, itemId, goBack } = Model;

	return (
		<AtomPaper extStyle={Style.wrapper} color={"MAIN_2"}>
			<main css={Style.content}>
				<figure css={Style.imageWrap}>
					<Image size={"100%"} img={image} />
				</figure>

				<div css={Style.detailWrap}>
					<TemplateItemDetail itemId={itemId} />
				</div>
			</main>

			<div css={Style.btnWrap}>
				<AtomButtonMain {...PropsBuyItemBtn(Act, { id: itemId })} isFullWidth />
				<AtomButtonMain text={"BACK"} color={"MAIN_3"} click={goBack} />
			</div>
		</AtomPaper>
	);
};

export default View;
