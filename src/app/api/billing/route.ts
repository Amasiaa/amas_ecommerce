import { saveBillingInfo } from "@/lib/actions/billing";
import { errorResponse, successResponse } from "@/lib/utils";
import { BillingInfoInputValidation } from "@/lib/validations";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const inputValidation = BillingInfoInputValidation.safeParse(body);

        if (!inputValidation.success) {
            return errorResponse(
                "Input validation failed",
                400,
                inputValidation.error
            );
        }

        const billing = await saveBillingInfo(body);

        return successResponse(billing, "Billing information save successfully", 201);
    } catch (err) {
        return errorResponse((err as any)?.message, 400);
    }
}