"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
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
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
    firstName: z.string().min(2, {
        message: "First Name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last Name must be at least 2 characters.",
    }),
    company: z.string(),
    country: z.string({
        required_error: "Country required field",
    }),
    street: z.string({
        required_error: "Street required field",
    }),
    town: z.string({
        required_error: "Town required field",
    }),
    province: z.string({
        required_error: "Province required field",
    }),
    zipcode: z.string({
        required_error: "Zip Code required field",
    }),
    phone: z.string().min(7, {
        message: "Phone must be at least 7 characters.",
    }).max(20, {
        message: "Phone must be at least 20 characters.",
    }),
    email: z.string().email(),

})


function CheckoutBillingForm() {
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
            phone: "",
            email: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                <div className="flex gap-[31px] w-full">
                    <div className="flex-grow">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your First Name" {...field} className="h-[50px]"/>
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
                                        <Input placeholder="Enter your Last Name" {...field} className="h-[50px]"/>
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
                                    <Input placeholder="Enter your Company Name" {...field} className="h-[50px]"/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default CheckoutBillingForm