export type ScalarType<T = void> =
  | string
  | number
  | boolean
  | Record<string, T>;
export type RecordScalar<T = void> = Record<string, ScalarType<T>>;
