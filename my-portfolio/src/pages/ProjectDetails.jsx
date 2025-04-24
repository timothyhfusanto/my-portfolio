import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../utils/projectData';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Button } from '@/components/ui/button';
import {
  ChevronDown,
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  Link,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Presentation,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ExternalLink, Figma, FileText, Paperclip } from 'react-feather';


export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const navigate = useNavigate();
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api]);

  if (!project) {
    return <div className="text-center mt-20 text-lg">Project not found 😢</div>;
  }

  return (
    <section className="min-h-screen py-25 bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-16 text-center items-center justify-center flex flex-col ">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full text-left justify-between flex mt-4"
        >
          <Button onClick={handleBack} variant='link' className="inline-block text-blue-600 hover:underline text-sm">
            ← Back to Projects
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>View Project <ChevronDown /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-200 dark:border-gray-700 shadow-lg">
              {project.link.github && (
                <DropdownMenuItem
                  onClick={() => window.open(project.link.github, "_blank")}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 flex items-center gap-2"
                >
                  <Github className="w-4 h-4 text-black dark:text-white" />
                  <span>GitHub</span>
                  <DropdownMenuShortcut>
                    <ExternalLink className="w-4 h-4 text-black dark:text-white" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              )}

              {project.link.report && (
                <DropdownMenuItem
                  onClick={() => window.open(project.link.report, "_blank")}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-black dark:text-white" />
                  <span>Report</span>
                  <DropdownMenuShortcut>
                    <ExternalLink className="w-4 h-4 text-black dark:text-white" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              )}

              {project.link.slides && (
                <DropdownMenuItem
                  onClick={() => window.open(project.link.slides, "_blank")}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 flex items-center gap-2"
                >
                  <Presentation className="w-4 h-4 text-black dark:text-white" />
                  <span>Slide deck</span>
                  <DropdownMenuShortcut>
                    <ExternalLink className="w-4 h-4 text-black dark:text-white" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              )}

              {project.link.figma && (
                <DropdownMenuItem
                  onClick={() => window.open(project.link.figma, "_blank")}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 flex items-center gap-2"
                >
                  <Figma className="w-4 h-4 text-black dark:text-white" />
                  <span>Figma</span>
                  <DropdownMenuShortcut>
                    <ExternalLink className="w-4 h-4 text-black dark:text-white" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              )}

            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>

        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{project.fullDescription}</p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className='items-center justify-center flex flex-col w-full'
        >
          <h2 className="text-2xl font-semibold mb-4">Screenshots / Preview</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-5/6 "
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                pauseOnTouch: true,
              }),
            ]}
          >
            <CarouselContent>
              {project.images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <img
                      src={img}
                      alt={`Screenshot ${index + 1}`}
                      className="object-cover rounded-3xl shadow-md"
                    />
                  </div>
                </CarouselItem>
              ))}

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="py-2 text-center text-lg text-muted-foreground">
            {current} of {count}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left w-full"
        >
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech, i) => (
              <div key={i} className="bg-blue-100 dark:text-white flex items-center text-blue-800 dark:bg-blue-800 gap-2 px-4 py-2 rounded-lg shadow-sm transform-scale-100 hover:scale-105 transition duration-300 ease-in-out">
                <img src={tech.logo} alt={tech.name} className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-800 dark:text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left w-full"
        >
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-3 list-disc list-inside text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            {project.keyFeatures.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>


      </div>
      <div className="mt-20 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Timothy Fusanto. All rights reserved.
      </div>
    </section>
  );
}