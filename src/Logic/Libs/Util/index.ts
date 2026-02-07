import { GetArray } from "./GetArray/GetArray";
import { ToArray } from "./ToArray/ToArray";
import { ToMoney } from "./ToMoney/ToMoney.ts";
import { IdGen } from "./IdGen/IdGen.ts";
import { Trigram } from "./Trigram/Trigram.ts";

class Index {
	/** Возвращает массив */
	public getArray = GetArray.execute();

	/** Преобразует в массив */
	public toArray = ToArray.execute();

	/** Преобразует в денежный формат */
	public toMoney = ToMoney.execute();

	/** ID генератор */
	public idGen = IdGen.execute();

	/** Поиск в 3 буквы */
	public trigram = Trigram.execute();
}

export default new Index();
