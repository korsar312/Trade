import type { CSSObject } from "@emotion/react";
import type { typesUtils } from "../Logic/Libs/Util/TypesUtils";
import React from "react";

export type TDeepCSSObject = typesUtils.TDeepTypeObject<CSSObject>;

type TagOf<E extends Element> = {
	[K in keyof HTMLElementTagNameMap]: [HTMLElementTagNameMap[K]] extends [E] ? K : never;
}[keyof HTMLElementTagNameMap];

export type TTagPartial<E extends HTMLElement, K extends keyof React.ComponentPropsWithoutRef<TagOf<E>>> = Partial<
	Pick<React.ComponentPropsWithoutRef<TagOf<E>>, K>
>;
