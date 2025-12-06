import type { FC } from "react";

/**
 * NFC (Named Function Component).
 * Упрощённая обёртка над React.FC, где пропсы
 * берутся из возвращаемого типа переданной функции.
 *
 * Пример:
 * const makeProps = () => ({ foo: string });
 *
 * const View: NFC<typeof Model> = (props) => {
 *   return <div>{props.foo}</div>;
 * };
 */
export type NFC<T extends (...args: any[]) => any> = FC<ReturnType<T>>;

export namespace typesUtils {
	/**
	 * Рекурсивный тип: значение T или массив произвольной глубины
	 * из T | undefined | false.
	 *
	 * Пример:
	 * TDeepTypeObject<string> =>
	 * "foo"
	 * ["foo", ["bar", false]]
	 */
	export type TDeepTypeObject<T> = typesUtils.RecursiveArray<T | undefined | false> | T;

	/**
	 * Тип для массива с произвольной вложенностью.
	 * Каждый элемент — либо значение указанного типа,
	 * либо массив таких же элементов.
	 *
	 * Пример:
	 * RecursiveArray<number> =>
	 * [1, 2, [3, [4]]]
	 */
	export type RecursiveArray<type> = {
		[index: number]: RecursiveArray<type> | type;
		length: number;
	};

	/**
	 * PartialRequired делает все поля опциональными,
	 * кроме указанных ключей K — они остаются обязательными.
	 *
	 * Пример:
	 * type A = { a: string; b: number; c?: boolean };
	 * type B = PartialWithRequired<A, 'a'>;
	 *
	 * { a: "x" } ✅
	 * { a: "x", b: 1 } ✅
	 * { b: 1 } ❌ ошибка — a обязателен
	 */
	export type PartialRequired<T, K extends keyof T> = Partial<Omit<T, K>> & Required<Pick<T, K>>;

	/**
	 * ExclusiveKeys гарантирует, что в объекте будет указан
	 * ровно один ключ из набора.
	 *
	 * Пример:
	 * type A = { a: string; b: number; c: boolean };
	 * type B = ExclusiveKeys<A>;
	 *
	 * { a: "x" } ✅
	 * { b: 1 } ✅
	 * { a: "x", b: 1 } ❌ ошибка
	 */
	export type ExclusiveKeys<T> = {
		[K in keyof T]: { [P in K]: T[K] } & Partial<Record<Exclude<keyof T, K>, never>>;
	}[keyof T];

	/**
	 * XOR (exclusive OR) для типов.
	 * Позволяет выбрать либо T, либо U, но не оба сразу.
	 *
	 * Пример:
	 * type A = { a: string; };
	 * type B = { b: number; };
	 *
	 * type C = XOR<A, B>;
	 * // { a: string } ✅
	 * // { b: number } ✅
	 * // { a: string; b: number } ❌ ошибка типов
	 */
	type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
	export type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T);
}
