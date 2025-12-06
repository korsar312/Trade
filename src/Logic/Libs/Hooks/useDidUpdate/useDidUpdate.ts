import type { DependencyList, EffectCallback } from "react";
import { useEffect, useRef } from "react";

/**
 * Хук обновления зависимостей
 *
 * @param effect - функция колбек
 * @param deps - зависимость для обновления
 */
export function useDidUpdate(effect: EffectCallback, deps: DependencyList) {
	const hasMounted = useRef(false);

	useEffect(() => {
		if (!hasMounted.current) hasMounted.current = true;
		else effect();
	}, deps);
}
