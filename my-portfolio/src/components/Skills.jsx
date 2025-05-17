import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs"
import { productSkills, techStackAnalytics, techStackBackendFramework, techStackDatabases, techStackDevOps, techStackFrontendFramework, techStackLanguages } from '@/utils/skillsData';

const SectionCard = ({ title, items }) => (
  <motion.div
    initial={{ opacity: 0, y: -60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    viewport={{ once: true }}
    className="w-full"
  >
    <Card className="shadow-md rounded-2xl py-4 px-6 h-full flex flex-col">
      <h4 className="text-lg text-left font-semibold">{title}</h4>
      <CardContent className="flex flex-wrap gap-4 p-0">
        {items.map((item, index) => (
          <Badge
            key={index}
            className="text-xs px-3 py-1 bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-100"
          >
            {item.logo && (
              <img
                src={item.logo}
                alt={item.name}
                className="w-4 h-4 mr-1 inline-block"
              />
            )}
            {item.name && (
              <span>{item.name}</span>
            )}
          </Badge>
        ))}
      </CardContent>
    </Card>
  </motion.div>
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 py-20 px-6"
    >
      <div className="mx-auto text-center w-full min-h-screen px-6 justify-center items-center flex flex-col">
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full p-4 justify-between mb-10'>
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className='text-left'
          >
            <div className="text-lg font-light mb-4">SKILLS</div>

            <motion.div
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-6xl uppercase leading-[1]">
                Tools that
                shape solutions
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-end text-right mt-5 lg:mt-0">
            <p className="text-xl font-light uppercase leading-relaxed">
              Blending technical expertise with problem-solving
              to build robust and user-focused applications.
            </p>
          </motion.div>
        </div>
        <Tabs defaultValue="technical" className="w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TabsList className="mb-8 bg-white dark:bg-gray-800 shadow-md">
              <TabsTrigger
                value="technical"
                className="px-6 py-2 text-lg font-medium  transition-colors data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900"
              >
                Technical
              </TabsTrigger>
              <TabsTrigger
                value="product"
                className="px-6 py-2 text-lg font-medium  transition-colors data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900"
              >
                Product
              </TabsTrigger>
            </TabsList>

          </motion.div>

          {/* Technical Skills Tab */}
          <TabsContent value="technical" className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <SectionCard title="Programming Languages" items={techStackLanguages} />
            <SectionCard title="Backend Development" items={techStackBackendFramework} />
            <SectionCard title="Frontend Development" items={techStackFrontendFramework} />
            <SectionCard title="Databases" items={techStackDatabases} />
            <SectionCard title="DevOps & Tools" items={techStackDevOps} />
            <SectionCard title="Analytics" items={techStackAnalytics} />
          </TabsContent>

          {/* Product Skills Tab */}
          <TabsContent value="product" className="w-5/6 grid grid-rows-1 gap-6">
            <SectionCard title="Product Management Skills" items={productSkills} />
          </TabsContent>
        </Tabs>

      </div>
    </section>
  );
}