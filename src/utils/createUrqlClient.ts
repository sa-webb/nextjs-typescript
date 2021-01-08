import { cacheExchange, dedupExchange, fetchExchange } from "urql";

export const createUrqlClient = (ssrExchange: any) => ({
  url: "https://postgres-dev-001.herokuapp.com/graphql",
  exchanges: [dedupExchange, cacheExchange, ssrExchange, fetchExchange],
});