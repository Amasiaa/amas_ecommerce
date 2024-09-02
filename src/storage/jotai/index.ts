import { IBilling } from "@/lib/database/models/billing.model";
import { atomWithStorage } from "jotai/utils";

// const defaultCartValue: IProduct[] = [];
const cartAtom = atomWithStorage<IProduct[]>("CART_ITEMS", []);
const billingAtom = atomWithStorage<IBilling | null>("BILLING_ITEM", null);

export { cartAtom, billingAtom }