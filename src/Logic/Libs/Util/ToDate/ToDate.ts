type TDateId = "DD" | "MM" | "YY" | "YYYY" | "hh" | "mm" | "ss";
type TSep = ":" | "." | "-" | "/" | " ";

type TDatePart = TDateId | `${TSep}${TDateId}`;
type TDateFormat = [TDatePart, ...TDatePart[]];

export class ToDate {
	static execute() {
		return function (timestamp: number, format: TDateFormat): string {
			const date = new Date(timestamp);
			const pad = (n: number) => String(n).padStart(2, "0");

			const tokens: Record<TDateId, string> = {
				DD: pad(date.getDate()),
				MM: pad(date.getMonth() + 1),
				YY: String(date.getFullYear()).slice(-2),
				YYYY: String(date.getFullYear()),
				hh: pad(date.getHours()),
				mm: pad(date.getMinutes()),
				ss: pad(date.getSeconds()),
			};

			const regex = new RegExp(
				Object.keys(tokens)
					.sort((a, b) => b.length - a.length)
					.join("|"),
			);

			return format.map((part) => part.replace(regex, (token) => tokens[token as TDateId] ?? token)).join("");
		};
	}
}
