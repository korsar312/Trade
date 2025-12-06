import type { IComponent } from "../index";
import { type SyntheticEvent, useEffect, useState } from "react";
import getImage from "../Images.tsx";

function Model(props: IComponent) {
	const { img, color, extStyle, size } = props;

	useEffect(() => {
		setIsShow(true);
	}, [img]);

	const [isShow, setIsShow] = useState(true);

	const imageIcon = img && getImage(img);

	function handleErrorImage(e: SyntheticEvent<HTMLImageElement, Event>) {
		const target = e.target as HTMLImageElement;
		target.onerror = null;
		target.src = getImage("IconBug");
	}

	return { imageIcon, img, color, extStyle, handleErrorImage, isShow, size };
}

export default Model;
