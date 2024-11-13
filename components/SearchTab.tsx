"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  mov: z.string().min(1).max(50),
})


function SearchTab() {
    const router = useRouter();

     // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mov: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    router.push(`search/${values.mov}`)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="mov"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className='rounded-xl' placeholder="Search" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default SearchTab