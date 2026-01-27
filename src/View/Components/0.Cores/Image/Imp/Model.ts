import type { IComponent } from "../index";
import { type SyntheticEvent, useEffect, useState } from "react";
import getImage from "../Images.tsx";
import { Consts } from "../../../../../Logic/Config/Consts.ts";

function Model(props: IComponent) {
	const { img, color, extStyle, size } = props;

	const [isShow, setIsShow] = useState(true);

	const imageIcon = img && getImage(img);

	useEffect(() => {
		setIsShow(true);
	}, [img]);

	function handleErrorImage(e: SyntheticEvent<HTMLImageElement, Event>) {
		const target = e.target as HTMLImageElement;
		target.onerror = null;
		target.src = Consts.basePath + "vite.svg";
	}

	return { imageIcon, img, color, extStyle, handleErrorImage, isShow, size };
}

export default Model;
