
"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AncientAdenaIcon, BlueStoneIcon, GreenStoneIcon, RedStoneIcon } from "@/components/icons"
import { Separator } from "./ui/separator"
import { motion } from "framer-motion"
import { Server } from "lucide-react"

const formSchema = z.object({
  redStones: z.coerce.number().int().min(0).default(0),
  greenStones: z.coerce.number().int().min(0).default(0),
  blueStones: z.coerce.number().int().min(0).default(0),
  serverRates: z.coerce.number().min(0).default(1),
})

export function Calculator() {
  const [totalAdena, setTotalAdena] = useState(0)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      redStones: 0,
      greenStones: 0,
      blueStones: 0,
      serverRates: 1,
    },
  })

  const watchedValues = form.watch();

  useEffect(() => {
    const { redStones, greenStones, blueStones, serverRates } = watchedValues;
    const adena = ((redStones * 10) + (greenStones * 5) + (blueStones * 3)) * (serverRates || 1);
    setTotalAdena(adena);
  }, [watchedValues]);

  return (
    <Card className="w-full max-w-sm bg-card/80 backdrop-blur-sm border-accent/20">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Seal Stone Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6">
            <FormField
              control={form.control}
              name="redStones"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center justify-between text-lg">
                    <div className="flex items-center gap-2">
                      <RedStoneIcon className="h-6 w-6" /> Red Seal Stones
                    </div>
                    <span className="text-sm text-muted-foreground font-normal">10 AA</span>
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
                  <FormLabel className="flex items-center justify-between text-lg">
                     <div className="flex items-center gap-2">
                      <GreenStoneIcon className="h-6 w-6" /> Green Seal Stones
                    </div>
                    <span className="text-sm text-muted-foreground font-normal">5 AA</span>
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
                  <FormLabel className="flex items-center justify-between text-lg">
                    <div className="flex items-center gap-2">
                      <BlueStoneIcon className="h-6 w-6" /> Blue Seal Stones
                    </div>
                    <span className="text-sm text-muted-foreground font-normal">3 AA</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="0" {...field} className="text-base" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Separator className="my-4 bg-accent/20" />
        <div className="p-6 pt-0 flex items-end justify-between space-x-4">
            <div className="flex-none w-28">
                <Form {...form}>
                    <FormField
                    control={form.control}
                    name="serverRates"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="flex items-center gap-2 text-muted-foreground text-sm">
                            <Server className="h-4 w-4" />
                            Server Rates
                        </FormLabel>
                        <FormControl>
                            <Input 
                                type="number" 
                                placeholder="1" 
                                {...field} 
                                className="text-base"
                            />
                        </FormControl>
                        </FormItem>
                    )}
                    />
                </Form>
            </div>
            <div className="flex-1 text-right">
                <p className="text-muted-foreground text-sm">Total Ancient Adena Yield</p>
                <div className="flex items-center justify-end gap-3 mt-2">
                    <AncientAdenaIcon className="h-8 w-8" />
                    <p className="text-4xl font-bold text-primary tracking-wider">
                    {totalAdena.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
      </motion.div>
    </Card>
  )
}
