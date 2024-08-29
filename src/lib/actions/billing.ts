import { connectToDatabase } from "../database/connection/mongoose";
import BillingModel, { IBilling } from "../database/models/billing.model";

export async function saveBillingInfo(input: IBilling) {
    await connectToDatabase();
    const billing = await BillingModel.create(input);
    return billing;
}