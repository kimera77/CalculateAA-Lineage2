
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
import { X } from "lucide-react"

const formSchema = z.object({
  redStones: z.coerce.number().int().min(0).optional(),
  greenStones: z.coerce.number().int().min(0).optional(),
  blueStones: z.coerce.number().int().min(0).optional(),
  serverRates: z.coerce.number().min(0).default(1),
  priceAA: z.coerce.number().min(0).optional(),
})

export function Calculator() {
  const [totalAdena, setTotalAdena] = useState(0)
  const [totalMarketAdena, setTotalMarketAdena] = useState(0)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serverRates: 1,
    },
  })

  const watchedValues = form.watch();

  useEffect(() => {
    const { redStones, greenStones, blueStones, serverRates, priceAA } = watchedValues;
    const adena = (( (redStones || 0) * 10) + ((greenStones || 0) * 5) + ((blueStones || 0) * 3)) * (serverRates || 1);
    setTotalAdena(adena);
    setTotalMarketAdena(adena * (priceAA || 0));
  }, [watchedValues]);

  return (
    <Card className="w-full max-w-2xl bg-card/80 backdrop-blur-sm border-accent/20">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Seal Stone Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-8">
            <Form {...form}>
              <form className="space-y-6 md:w-2/5">
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
                        <Input type="number" placeholder="0" {...field} className="text-base" value={field.value ?? ''} />
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
                        <Input type="number" placeholder="0" {...field} className="text-base" value={field.value ?? ''} />
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
                        <Input type="number" placeholder="0" {...field} className="text-base" value={field.value ?? ''} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>

            <div className="hidden md:block">
              <Separator orientation="vertical" className="bg-accent/20 h-full" />
            </div>
            <div className="md:hidden">
              <Separator orientation="horizontal" className="bg-accent/20 w-full" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex-1 space-y-6"
            >
                <div className="flex gap-4">
                    <Form {...form}>
                        <FormField
                        control={form.control}
                        name="serverRates"
                        render={({ field }) => (
                            <FormItem className="w-[110px]">
                            <FormLabel className="flex items-center gap-2 text-muted-foreground text-sm whitespace-nowrap">
                                <X className="h-4 w-4" />
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
                        <FormField
                        control={form.control}
                        name="priceAA"
                        render={({ field }) => (
                            <FormItem className="w-[120px]">
                              <FormLabel className="text-muted-foreground text-sm">Price AA</FormLabel>
                              <FormControl>
                                  <Input 
                                      type="number" 
                                      placeholder="0" 
                                      {...field} 
                                      className="text-base"
                                      value={field.value ?? ''}
                                  />
                              </FormControl>
                            </FormItem>
                        )}
                        />
                    </Form>
                </div>
                <Separator className="bg-accent/20" />
                <div className="text-right space-y-4">
                    <div>
                      <p className="text-muted-foreground text-sm">Total Ancient Adena Yield</p>
                      <div className="flex items-center justify-end gap-3 mt-1">
                          <AncientAdenaIcon className="h-8 w-8" />
                          <p className="text-4xl font-bold text-primary tracking-wider">
                          {totalAdena.toLocaleString()}
                          </p>
                      </div>
                    </div>
                    {totalMarketAdena > 0 && (
                      <div>
                          <p className="text-muted-foreground text-sm">Total Adena</p>
                          <p className="text-2xl font-bold text-green-400 tracking-wider">
                            {totalMarketAdena.toLocaleString()}
                          </p>
                      </div>
                    )}
                </div>
            </motion.div>
        </div>
      </CardContent>
    </Card>
  )
}
