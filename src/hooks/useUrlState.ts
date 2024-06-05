import { useMemoizedFn } from "./useMemoizedFn";
import { useUpdate } from "./useUpdate";
import type { ParseOptions, StringifyOptions } from "query-string";
import qs from "query-string";
import type * as React from "react";
import { useMemo, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface Options {
	navigateMode?: "push" | "replace";
	parseOptions?: ParseOptions;
	stringifyOptions?: StringifyOptions;
}

const baseParseConfig: ParseOptions = {
	parseNumbers: true,
	parseBooleans: true,
};

const baseStringifyConfig: StringifyOptions = {
	skipNull: false,
	skipEmptyString: false,
};

type UrlState = Record<string, any>;

export const useUrlState = <S extends UrlState = UrlState>(
	initialState?: S | (() => S),
	options?: Options,
) => {
	type State = S;
	const {
		navigateMode = "push",
		parseOptions,
		stringifyOptions,
	} = options || {};

	const mergedParseOptions = { ...baseParseConfig, ...parseOptions };
	const mergedStringifyOptions = {
		...baseStringifyConfig,
		...stringifyOptions,
	};

	const location = useLocation();

	const navigate = useNavigate();

	const update = useUpdate();

	const initialStateRef = useRef(
		typeof initialState === "function"
			? (initialState as () => S)()
			: initialState || {},
	);

	const queryFromUrl = useMemo(() => {
		return qs.parse(location.search, mergedParseOptions);
	}, [location.search]);

	const targetQuery: State = useMemo(
		() => ({
			...initialStateRef.current,
			...queryFromUrl,
		}),
		[queryFromUrl],
	);

	const setState = (s: React.SetStateAction<State>) => {
		const newQuery = typeof s === "function" ? s(targetQuery) : s;

		// 1. 如果 setState 后，search 没变化，就需要 update 来触发一次更新。比如 demo1 直接点击 clear，就需要 update 来触发更新。
		// 2. update 和 history 的更新会合并，不会造成多次更新
		update();
		navigate(
			{
				hash: location.hash,
				search:
        qs.stringify({ ...queryFromUrl, ...newQuery }, mergedStringifyOptions) ||
					"?",
			},
			{
				replace: navigateMode === "replace",
				state: location.state,
			},
		);
	};

	return [targetQuery, useMemoizedFn(setState)] as const;
};

