"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import Countries from "@/lib/json/countries.json";
import { BillingInfoInputValidation } from "@/lib/validations"
import makeApiCallService from "@/lib/service/apiService"
import { useEffect, useState } from "react"
import MainButton from "../common/MainButton"
import { useAtom } from "jotai"
import { billingAtom } from "@/storage/jotai"

const FormSchema = BillingInfoInputValidation;


function CheckoutBillingForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);
    const [billingInfo, setBillingInfo] = useAtom(billingAtom);
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            company: "",
            country: "",
            street: "",
            town: "",
            province: "",
            zipCode: "",
            phone: "",
            email: "",
            additionalInfo: "",
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        setIsLoading(true);
        if (billingInfo) {
            await makeApiCallService<IResponse>("/api/billing", {
                method: "PUT",
                body: { data, billingId: billingInfo?._id },
            }).then((res) => {
                // NOTE: Save ID into localStorage => Persisting state
                setBillingInfo(res?.response?.data);
                setIsLoading(false);
            }).catch(() => {
                setIsLoading(false);
            });
        } else {
            await makeApiCallService<IResponse>("/api/billing", {
                method: "POST",
                body: data,
            }).then((res) => {
                // NOTE: Save ID into localStorage => Persisting state
                setBillingInfo(res?.response?.data);
                setIsLoading(false);
            }).catch(() => {
                setIsLoading(false);
            });
        }


    }

    useEffect(() => {
        async function fetchBillingInfo() {
            console.log("~ fetch ~ billingInfo: ", billingInfo);
            if (billingInfo) {
                form.setValue("firstName", billingInfo?.firstName);
                form.setValue("lastName", billingInfo?.lastName);
                form.setValue("company", billingInfo?.company);
                form.setValue("country", billingInfo?.country);
                form.setValue("street", billingInfo?.street);
                form.setValue("town", billingInfo?.town);
                form.setValue("province", billingInfo?.province);
                form.setValue("zipCode", billingInfo?.zipCode);
                form.setValue("phone", billingInfo?.phone);
                form.setValue("email", billingInfo?.email);
                form.setValue("additionalInfo", billingInfo?.additionalInfo);
                setRefreshKey(Math.random());
            }

        }

        fetchBillingInfo();
    }, [billingInfo]);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 pb-32">
                <p className="font-bold text-24">Billing details</p>
                <div className="flex gap-[31px] w-full">
                    <div className="flex-grow">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your First Name" {...field} className="h-[50px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex-grow">
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your Last Name" {...field} className="h-[50px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company Name (Optional)</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your Company Name" {...field} className="h-[50px]" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    key={refreshKey}
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Country/Region</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Country/Region" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Countries.map((country, index) => (
                                            <SelectItem key={index} value={country.name}>
                                                {country.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="street"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Street address</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your Street address" {...field} className="h-[50px]" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="town"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Town/City</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your Town or city" {...field} className="h-[50px]" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="province"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Province</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your Province" {...field} className="h-[50px]" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>ZIP Code</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your zip code" {...field} className="h-[50px]" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your phone" {...field} className="h-[50px]" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email address</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your email address" {...field} className="h-[50px]" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="additionalInfo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Additional Information</FormLabel>
                            <FormControl>
                                <Input placeholder="Additional Information" {...field} className="h-[50px]" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="mt-6">
                    <MainButton
                        text="Save Billing Info"
                        isSubmitable
                        isLoading={isLoading}
                        classes="rounded-[15px] h-[55px]"
                    />
                </div>
            </form>
        </Form>
    )
}

export default CheckoutBillingForm