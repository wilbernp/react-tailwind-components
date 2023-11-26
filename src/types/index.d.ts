export type IInputSizes = 'sm' | 'md' | 'lg';
export type IInputStatus = 'default' | 'error' | 'succes';

/**
 * Excluye el null de cada una de las keys.
 * @example
 * ```ts
 * type ButtonVariants = {
 * size?: "xs"  | "sm" | "md" | null;
 * color?: "primary" | "secondary" | null;
 * }
 * ```
 * Quedaria con la siguiente forma:
 * ```ts
 * type ButtonVariants = {
 * size?: "xs"  | "sm" | "md";
 * color?: "primary" | "secondary";
 * }
 * ```
 */
export type ExcludeNull<T> = { [key in keyof T]: Exclude<T[key], null> };
