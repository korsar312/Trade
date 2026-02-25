import { useParams } from "react-router";
import type { PageParam } from "../../../Config/List/Routes.ts";
import type { RouterInterface } from "../../../Domain/Services/ServiceRouter/Router.interface.ts";

/**
 * Хук параметров страницы
 *
 * @param _page - страница для типизации
 *
 * @returns объект useParams c параметрами страницы {id и тд}
 */
export function useParamPage<T extends RouterInterface.EPath>(_page: T) {
	return useParams<PageParam<T>>();
}
