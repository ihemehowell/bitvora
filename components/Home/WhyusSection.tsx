'use client';

import { whyChooseUs } from "../../Data/Data";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

export default function WhyChooseUsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">

        <SectionHeading
          title="Why Choose Us"
          subtitle="We combine expertise, creativity, and dedication to deliver exceptional results"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl p-5 text-center h-full flex flex-col items-center gap-3 border"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center">
                <item.icon size={32} className={item.color} />
              </div>
              <h5 className="text-gray-900 font-medium text-xl">{item.title}</h5>
              <p className="text-gray-600 text-md">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
