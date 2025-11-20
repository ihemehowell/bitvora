'use client';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";


export default function FinalCTA() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">

        <div className="rounded-3xl p-16 text-center relative bg-linear-to-br from-[#319198]/70 to-[#319198]/95 overflow-hidden">

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white text-2xl font-semibold mb-4"
          >
            Ready to Start Your Project?
          </motion.h2>

          <p className="text-gray-300 max-w-xl mx-auto mb-6">
            Let's discuss how we can bring your ideas to life.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href='quote'>
             <Button  size="lg" className="bg-[#319198]/50 text-white hover:bg-[#319198]/80">
              Get Free Quote
            </Button>
            </Link>
           


            <Link href='contact'>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Contact Us
            </Button>
            </Link>
            
          </div>

        </div>

      </div>
    </section>
  );
}
