import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// const defaultCartValue: IProduct[] = [];
const cartAtom = atomWithStorage<IProduct[]>("CART_ITEMS", []);

export { cartAtom }