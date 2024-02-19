'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import eventformSchema from "@/lib/database/validator"
import { Button } from "@/components/ui/button"
import Dropdown from "./Dropdown"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import { eventDefaultValues } from "@/constants"
import FileUploader from "./FileUploader"
import { useState } from "react"
import Image from "next/image"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "../ui/checkbox"

type EventFromProps = {
  userId: string,
  type: "Create" | "Update"
}

const EventForm = ({ userId, type }: EventFromProps) => {


  const [files, setFiles] = useState<File[]>([])
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  const intialValues = eventDefaultValues
  const form = useForm<z.infer<typeof eventformSchema>>({
    resolver: zodResolver(eventformSchema),
    defaultValues: intialValues
  })

  // 2. Define a submit handler.'
  function onSubmit(values: z.infer<typeof eventformSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Event Title" {...field}
                    className="input-field mt-4"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className=" w-full mt-3">
                <FormControl>
                  <Dropdown onChangeHandler={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-52">
                  <Textarea placeholder="Description" {...field} className="textarea rounded-2xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 y-2">
                    <Image
                      src="/assets/icons/location-grey.svg"
                      alt='calendar'
                      width={24}
                      height={24}
                    />
                    <Input placeholder=" Event location or online" {...field} />
                  </div>
                </FormControl>
              </FormItem>
            )}>
          </FormField>

        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="startDateTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 y-2">
                    <Image
                      src="/assets/icons/calendar.svg"
                      alt='calendar'
                      width={24}
                      height={24}
                    />
                    <p className="ml-3 bg-gray-50 ">startDateTime:</p>
                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date) => setStartDate(date)}
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat="MM/dd/yyy h:mm:aa"
                      wrapperClassName="DatePicker"
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}>
          </FormField>
          <FormField
            control={form.control}
            name="endDateTIme"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 y-2">
                    <Image
                      src="/assets/icons/calendar.svg"
                      alt='calendar'
                      width={24}
                      height={24}
                    />
                    <p className="ml-3 bg-gray-50 ">endDateTime:</p>
                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date) => setEndDate(date)}
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat="MM/dd/yyy h:mm:aa"
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}>
          </FormField>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 y-2">
                    <Image
                      src="/assets/icons/dollar.svg"
                      alt='calendar'
                      width={24}
                      height={24}
                    />
                    <Input type="number" className="p-regular-16  border-0 bg-gray-50 outline-offset-0
                    focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0" placeholder="Price" />
                    <FormField
                      control={form.control}
                      name="isFree"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <div className="flex items-center">
                              <label className="whitespace-nowrap pr-3 leaading-none
                                    peer-disabled:cursor-not-allowed peer-disabled:opacity-70
                                    ">Free Ticket:</label>
                              <Checkbox id="isFree" className="mr-2 h-5 w-5 border-2 border-primary-500" />
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    >
                    </FormField>

                  </div>
                </FormControl>
              </FormItem>
            )}>
          </FormField>
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 y-2">
                    <Image
                      src="/assets/icons/link.svg"
                      alt='link'
                      width={24}
                      height={24}
                    />
                    <Input placeholder="Enter Url" {...field}
                      className="input-field mt-4"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button 
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full"
        >
          {form.formState.isSubmitting ? (
            'Submitting...'
          ): `${type} Event `}</Button>
      </form>
    </Form>

  )
}
export default EventForm