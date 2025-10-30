
"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
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
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AncientAdenaIcon, BlueStoneIcon, GreenStoneIcon, RedStoneIcon } from "@/components/icons"
import { Separator } from "./ui/separator"
import { motion, AnimatePresence } from "framer-motion"

const formSchema = z.object({
  redStones: z.coerce.number().int().min(0).default(0),
  greenStones: z.coerce.number().int().min(0).default(0),
  blueStones: z.coerce.number().int().min(0).default(0),
})

export function Calculator() {
  const [totalAdena, setTotalAdena] = useState<number | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      redStones: 0,
      greenStones: 0,
      blueStones: 0,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const adena = (values.redStones * 10) + (values.greenStones * 5) + (values.blueStones * 3)
    setTotalAdena(adena)
  }

  return (
    <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm border-accent/20">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Seal Stone Calculator</CardTitle>
        <CardDescription>Enter the amount of each Seal Stone you have.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="redStones"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-lg">
                    <RedStoneIcon className="h-6 w-6" /> Red Seal Stones
                  </FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="0" {...field} className="text-base" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="greenStones"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-lg">
                    <GreenStoneIcon className="h-6 w-6" /> Green Seal Stones
                  </FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="0" {...field} className="text-base" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="blueStones"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-lg">
                    <BlueStoneIcon className="h-6 w-6" /> Blue Seal Stones
                  </FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="0" {...field} className="text-base" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <CardFooter className="flex-col items-stretch p-0 pt-6">
                <Button type="submit" className="w-full text-lg py-6">Calculate</Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>

      <AnimatePresence>
        {totalAdena !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Separator className="my-4 bg-accent/20" />
            <div className="p-6 pt-0 text-center">
              <p className="text-muted-foreground text-sm">Total Ancient Adena Yield</p>
              <div className="flex items-center justify-center gap-3 mt-2">
                <AncientAdenaIcon className="h-8 w-8" />
                <p className="text-4xl font-bold text-primary tracking-wider">
                  {totalAdena.toLocaleString()}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}
