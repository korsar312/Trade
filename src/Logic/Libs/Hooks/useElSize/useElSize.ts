import React, { useLayoutEffect, useState } from "react";

/**
 * Хук вычисления размеров DOM-элемента
 *
 * @param ref - React ref на HTML-элемент
 * @param deps - массив зависимостей; при их изменении размеры пересчитаются
 *
 * @returns объект с актуальными {width, height}
 */
export function useElSize<T extends HTMLElement>(ref: React.RefObject<T | null>, deps: any[] = []) {
	const [size, setSize] = useState(getSize);

	function getSize() {
		const el = ref?.current;

		const width = el?.offsetWidth ?? 0;
		const height = el?.offsetHeight ?? 0;

		return {
			width,
			height,
			maxSize: Math.max(width, height),
			minSize: Math.min(width, height),
		};
	}

	useLayoutEffect(() => {
		const el = ref?.current;
		if (!el) return;

		const updateSize = () => setSize(getSize());

		updateSize();

		const observer = new ResizeObserver(updateSize);
		observer.observe(el);

		return () => observer.disconnect();
	}, [...deps]);

	return size;
}
