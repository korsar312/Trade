import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Util from "../../../../../Logic/Libs/Util/index.ts";
import type { CSSObject } from "@emotion/react";
import { Consts } from "../../../../../Logic/Config/Consts.ts";

const View: NFC<typeof Model> = (props) => {
	const { imageIcon: ImageIcon, img, color, extStyle, handleErrorImage, isShow, size } = props;

	function imageComponent(style: CSSObject[]) {
		if (!img || !isShow) return null;
		if (ImageIcon) return <ImageIcon css={style} />;

		return <img css={style} draggable={false} onError={handleErrorImage} src={Consts.basePath + img} />;
	}

	return imageComponent([Style.wrapper, Style.scale(size), Style.color(color), ...Util.getArray(extStyle)]);
};

export default View;
