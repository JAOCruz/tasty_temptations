"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import * as React from "react"

import { buttonVariants } from "@/components/ui/button"

import { cn } from "@/lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "rounded-base border-2 border-border bg-main p-3 font-heading shadow-shadow",
        className,
      )}
      classNames={{
        root: "rounded-base",
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        month_caption:
          "flex justify-center pt-1 relative items-center w-full text-main-foreground",
        caption_label: "text-sm font-heading",
        nav: "gap-1 flex items-center",
        button_previous: cn(
          buttonVariants({ variant: "noShadow" }),
          "size-7 bg-transparent p-0 absolute left-1",
        ),
        button_next: cn(
          buttonVariants({ variant: "noShadow" }),
          "size-7 bg-transparent p-0 absolute right-1",
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: "flex",
        weekday:
          "text-main-foreground rounded-base w-9 font-base text-[0.8rem]",
        weeks: "flex flex-col gap-1",
        week: "flex w-full",
        day: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
        ),
        day_button: cn(
          buttonVariants({ variant: "noShadow" }),
          "size-9 p-0 font-base aria-selected:opacity-100",
        ),
        selected:
          "bg-brand-green text-brand-black rounded-base font-bold border-[3px] border-border shadow-[2px_2px_0_#222222]",
        today: "bg-secondary-background text-foreground border-2 border-brand-purple",
        outside: "text-main-foreground opacity-50",
        disabled: "text-main-foreground opacity-50 rounded-base",
        range_start: "bg-black text-white rounded-base",
        range_end: "bg-black text-white rounded-base",
        range_middle: "bg-black/50 text-white",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ className, orientation, ...props }) =>
          orientation === "left" ? (
            <ChevronLeft className={cn("size-4", className)} {...props} />
          ) : (
            <ChevronRight className={cn("size-4", className)} {...props} />
          ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
