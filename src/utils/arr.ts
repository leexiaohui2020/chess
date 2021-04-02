export function randomSort<T>(arr: T[]) {
  return arr.slice().sort((a, b) => Math.random() - 0.5)
}

export function randomGet<T>(arr: T[]) {
  const index = Math.round(Math.random() * (arr.length - 1))
  return arr[index]
}
