// components/faq-search.tsx
"use client"
import { useState } from "react"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {FALLBACK_FAQ_CATEGORIES, FAQCategory} from "@/Data/faq-data";


interface FAQSearchProps {
    categories?: FAQCategory[]
}

export function FAQSearch({ categories = FALLBACK_FAQ_CATEGORIES }: FAQSearchProps) {
    const [query, setQuery] = useState('')
    const [activeCategory, setActiveCategory] = useState<string | null>(null)
    const [showFilter, setShowFilter] = useState(false)

    const filtered = categories
        .filter(cat => !activeCategory || cat.id === activeCategory)
        .map(cat => ({
            ...cat,
            items: cat.items.filter(
                item =>
                    !query ||
                    item.question.toLowerCase().includes(query.toLowerCase()) ||
                    item.answer.toLowerCase().includes(query.toLowerCase())
            ),
        }))
        .filter(cat => cat.items.length > 0)

    return (
        <div className="space-y-4">
            {/* Search bar */}
            <div className="flex gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="Search here..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="h-12 pl-12 pr-4"
                    />
                    {query && (
                        <button
                            onClick={() => setQuery('')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    )}
                </div>
                <Button
                    variant={showFilter ? "default" : "outline"}
                    size="lg"
                    className="h-12 gap-2 px-6"
                    onClick={() => setShowFilter(prev => !prev)}
                >
                    <SlidersHorizontal className="h-5 w-5" />
                    Filter
                </Button>
            </div>

            {/* Category filter pills */}
            {showFilter && (
                <div className="flex flex-wrap gap-2 pt-1">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                            !activeCategory
                                ? 'bg-primary text-primary-foreground'
                                : 'border border-border hover:bg-muted'
                        }`}
                    >
                        All
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)}
                            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                                activeCategory === cat.id
                                    ? 'bg-primary text-primary-foreground'
                                    : 'border border-border hover:bg-muted'
                            }`}
                        >
                            {cat.title}
                        </button>
                    ))}
                </div>
            )}

            {/* Results summary */}
            {(query || activeCategory) && (
                <p className="text-sm text-muted-foreground">
                    {filtered.reduce((acc, cat) => acc + cat.items.length, 0)} result(s) found
                    {query && <span> for <strong>&quot;{query}&quot;</strong></span>}
                    {activeCategory && <span> in <strong>{categories.find(c => c.id === activeCategory)?.title}</strong></span>}
                </p>
            )}

            {/* Filtered FAQ results shown inline when searching */}
            {(query || activeCategory) && filtered.length === 0 && (
                <div className="py-8 text-center text-muted-foreground">
                    No results found. Try a different search term or category.
                </div>
            )}
        </div>
    )
}