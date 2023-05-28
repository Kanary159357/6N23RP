export function sortCharacterRow<T extends { [s: string]: string }>(
  row: T,
  sortMap: readonly (keyof T)[]
) {
  return Object.fromEntries(
    Object.entries(row).sort(([k1], [k2]) =>
      sortMap.indexOf(k1 as keyof T) > sortMap.indexOf(k2 as keyof T) ? 1 : -1
    )
  );
}
