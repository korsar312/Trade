import type { MessageInterface as Interface } from "../Message.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";
import type { CSSObject } from "@emotion/react";

class MessageImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private getCurrentLang(store: Interface.Store): Interface.ELang {
		return store.lang;
	}

	private getStoreWord(store: Interface.Store, word: Interface.EWordAll, lang: Interface.ELang): string {
		if (word && word in store.dictionary) return store.dictionary[word as keyof typeof store.dictionary][lang];

		switch (typeof word) {
			case "boolean":
			case "string":
			case "number":
				return String(word);
			default:
				return "";
		}
	}

	private textReplace(text: string, arrReplace: Interface.EWordAll[]): string {
		return text.replace(/\{\{(\d+)}}/g, (_, group1) => {
			const idx = Number(group1) - 1;
			const replacement = arrReplace[idx];
			return replacement !== undefined ? String(replacement) : `{{${group1}}}`;
		});
	}

	private styleReplace(text: string, arrStyle: CSSObject[]): Interface.TWordChunk[] {
		const chunks: Interface.TWordChunk[] = [];
		let rest = text;

		for (let sIdx = 0; sIdx < arrStyle.length; sIdx++) {
			const open = `[[${sIdx + 1}]]`;
			const close = `[[${sIdx + 2}]]`;

			const openPos = rest.indexOf(open);
			if (openPos === -1) break;

			const afterOpen = openPos + open.length;
			const closePos = rest.indexOf(close, afterOpen);
			if (closePos === -1) break;

			const before = rest.slice(0, openPos);
			if (before) chunks.push({ text: before });

			const inside = rest.slice(afterOpen, closePos);
			if (inside) chunks.push({ text: inside, style: arrStyle[sIdx] });

			rest = rest.slice(closePos + close.length);
		}

		if (rest) chunks.push({ text: rest });

		return chunks;
	}

	private changeCase(text: string, wordCase: Interface.ECase): string {
		switch (wordCase) {
			case "CAPITAL":
				return text.toUpperCase();
			case "SMALL":
				return text.toLowerCase();
			default:
				return text;
		}
	}

	private buildText(word: Interface.EWordAll, param?: Interface.TWordParam): string {
		const lang = this.getCurrentLang(this.store);
		let text = this.getStoreWord(this.store, word, lang);

		if (param?.case) text = this.changeCase(text, param.case);
		if (param?.arrReplace?.length) text = this.textReplace(text, param.arrReplace);

		return text;
	}

	private toChunks(text: string, param?: Interface.TWordParam): Interface.TWordChunk[] {
		if (param?.arrStyle?.length) return this.styleReplace(text, param.arrStyle);
		return [{ text }];
	}

	//==============================================================================================

	constructor(props: IServiceProps, dictionary: Interface.TDictionary) {
		const store: Interface.Store = {
			dictionary,
			lang: "RU",
		};

		super(props, store);
	}

	//==============================================================================================

	public getWord(word: Interface.EWordAll, param?: Interface.TWordParamBase & { arrStyle?: undefined }): string;
	public getWord(word: Interface.EWordAll, param: Interface.TWordParamBase & { arrStyle: CSSObject[] }): Interface.TWordChunk[];
	public getWord(word: Interface.EWordAll, param?: Interface.TWordParam) {
		const text = this.buildText(word, param);

		if (param?.arrStyle?.length) return this.toChunks(text, param);
		return text;
	}
}

export default MessageImp;
