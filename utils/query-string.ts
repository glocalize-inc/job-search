export const getSearchWord = (query) => {
  const q = query.q
  return typeof q === 'object' ? q[0] : q
}