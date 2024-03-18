export function uniqWith<T>(array: T[] | null | undefined, comparator?: (a: T, b: T) => boolean): T[] {
    if (!array) return [] as T[];
    return array.filter((value, index, self) =>
        index === self.findIndex((v) => comparator ? comparator(value, v) : value === v)
    );
}