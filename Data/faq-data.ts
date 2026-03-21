export interface FAQItem {
    id: string
    question: string
    answer: string
}

export interface FAQCategory {
    id: string
    title: string
    items: FAQItem[]
}

export const FALLBACK_FAQ_CATEGORIES: FAQCategory[] = [
    {
        id: "getting-started",
        title: "Getting Started",
        items: [
            {
                id: "gs-1",
                question: "How do I create an account?",
                answer: "Click 'Sign Up', enter your email and a password, then confirm via the link we send you.",
            },
            {
                id: "gs-2",
                question: "Is there a free trial?",
                answer: "Yes — every new account gets a 14-day free trial with full feature access. No credit card needed.",
            },
        ],
    },
    {
        id: "billing",
        title: "Billing & Plans",
        items: [
            {
                id: "bill-1",
                question: "How do I upgrade my plan?",
                answer: "Go to Settings → Billing and select a new plan. Upgrades apply immediately.",
            },
            {
                id: "bill-2",
                question: "Can I cancel at any time?",
                answer: "Yes. Cancel from Settings → Billing. Your account stays active until the billing period ends.",
            },
        ],
    },
    {
        id: "account",
        title: "Account & Security",
        items: [
            {
                id: "acc-1",
                question: "How do I reset my password?",
                answer: "Click 'Forgot password?' on the login page and follow the email link we send you.",
            },
            {
                id: "acc-2",
                question: "Is two-factor authentication available?",
                answer: "Yes — enable it under Settings → Security → Two-factor authentication.",
            },
        ],
    },
]