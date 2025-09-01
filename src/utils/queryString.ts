// utils/queryString.ts
export function buildQueryString(params: Record<string, any>) {
  return new URLSearchParams(params).toString();
}
