"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import {FALLBACK_FAQ_CATEGORIES, FAQCategory} from "@/Data/faq-data";


interface FAQCarouselProps {
    categories?: FAQCategory[]
}

export function FAQCarousel({ categories = FALLBACK_FAQ_CATEGORIES }: FAQCarouselProps) {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();

    return (
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            <div className="relative">
                {/* Navigation */}
                <div className="flex items-center justify-end gap-2 mb-6">
                    <button
                        onClick={() => carouselApi?.scrollPrev()}
                        className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        onClick={() => carouselApi?.scrollNext()}
                        className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>

                <Carousel
                    setApi={setCarouselApi}
                    opts={{ align: "start", loop: true }}
                    className="w-full mb-4"
                >
                    <CarouselContent className="py-10">
                        {categories.map((category) => (
                            <CarouselItem key={category.id}>
                                <div className="rounded-xl">
                                    <h2 className="mb-6 text-2xl font-bold text-primary">
                                        {category.title}
                                    </h2>
                                    <Accordion
                                        type="multiple"
                                        defaultValue={[category.items[0]?.id]}
                                        className="space-y-4"
                                    >
                                        {category.items.map((item) => (
                                            <AccordionItem
                                                key={item.id}
                                                value={item.id}
                                                className="rounded-lg border border-border bg-background last:mb-5"
                                            >
                                                <AccordionTrigger className="px-6 py-5 text-left font-semibold hover:no-underline data-[state=open]:text-primary">
                                                    {item.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="px-6 pb-4 text-foreground">
                                                    {item.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden" />
                    <CarouselNext className="hidden" />
                </Carousel>
            </div>

            {/* FAQ Image */}
            <div className="hidden lg:flex items-center justify-center">
                <Image
                    src="/assets/FAQ.png"
                    alt="FAQ Illustration"
                    className="w-full max-w-100 h-auto object-contain"
                    width={400}
                    height={400}
                />
            </div>
        </div>
    );
}