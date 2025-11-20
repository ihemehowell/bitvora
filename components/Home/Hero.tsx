"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";



export default function HeroSection() {
  return (
    <section className="relative bg-linear-to-br from-gray-50 via-white to-primary-50  mb-5">
      <div className="container mx-auto px-6 py-20 max-md:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-gray-900 mb-6 text-7xl font-black">
              We Build Websites That{" "}
              <span className="bg-linear-to-br from-[#319198] to-[#319198]/80 bg-clip-text text-transparent">
                Grow Your Business
              </span>
            </h1>
            <p className="text-gray-600 mb-8 text-xl">
              High-performance websites, landing pages, and eCommerce solutions designed to convert visitors into customers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href='quote' className="px-8 flex items-center gap-2 py-3 text-lg rounded-xl bg-[#319198] text-white hover:bg-[#319198]/80 transition-colors">
                  Get a Quote
                <ArrowRight size={20} />
              </Link>
              
              <Link href='portfolio'   className="px-8 py-3 text-lg rounded-xl bg-white hover:bg-gray-300 outline">
                View Portfolio
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <h3 className="text-primary-600 text-2xl font-bold">250+</h3>
                <p className="text-gray-600 text-sm">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-primary-600 text-2xl font-bold">98%</h3>
                <p className="text-gray-600 text-sm">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-primary-600 text-2xl font-bold">5+</h3>
                <p className="text-gray-600 text-sm">Team Members</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Web Design Workspace"
                className="w-full"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-[115px] transform -translate-x-1/2 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 mb-6">
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h6 className="text-gray-900">Project Delivered</h6>
                  <p className="text-gray-500 text-sm">On Time & Budget</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
