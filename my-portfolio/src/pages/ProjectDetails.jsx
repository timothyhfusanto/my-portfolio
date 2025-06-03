import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../utils/projectData';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card"
import chioqrImg from '../assets/chio/qrcode.png';
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
  Laptop,
  LifeBuoy,
  Link,
  LogOut,
  Mail,
  MessageSquare,
  PersonStanding,
  Plus,
  PlusCircle,
  Presentation,
  Settings,
  SmartphoneCharging,
  SmartphoneIcon,
  User,
  UserCog,
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
import { AlertTriangle, ExternalLink, Figma, FileText, Globe, Paperclip, Phone, Smartphone } from 'react-feather';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert } from '@/components/ui/alert';
import { AlertDescription, AlertTitle } from '@/components/ui/alert';
import LiveSiteNotice from '@/components/LiveSiteNotice';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const navigate = useNavigate();
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [openDialog, setOpenDialog] = useState(null)

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
        {project.sites.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className='mb-2'
          >
            {project.type === "app" && 
              <LiveSiteNotice />
            }

          </motion.div>
        )}

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full justify-between flex mt-4"
        >
          <Button onClick={handleBack} variant='link' className="inline-block text-blue-600 hover:underline text-sm">
            ← Back to Projects
          </Button>
          <div className='md:space-x-4 space-y-4 text-right'>
            <DropdownMenu>
              {(project.link.github || project.link.report || project.link.slides) && (
                <DropdownMenuTrigger asChild>
                  <Button variant='outline'>View project details<ChevronDown /></Button>
                </DropdownMenuTrigger>
              )}
              <DropdownMenuContent className="w-56 bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-200 dark:border-gray-700 shadow-lg">
                {project.link.github && (
                  <DropdownMenuItem
                    onClick={() => window.open(project.link.github, "_blank")}
                    className="hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 flex items-center gap-2 cursor-pointer"
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
            {project.sites.length > 0 && (
              <>
                {project.sites.length > 1 ? (
                  // Multiple sites -> Show dropdown
                  <Dialog open={openDialog !== null} onOpenChange={(open) => !open && setOpenDialog(null)}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button>
                          <Globe />
                          Live Sites
                          <ChevronDown className="w-4 h-4" />
                        </Button>

                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56 bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-200 dark:border-gray-700 shadow-lg">
                        {project.sites.map((site, index) => (
                          <DialogTrigger asChild key={index}>
                            <DropdownMenuItem
                              onClick={() => setOpenDialog(site.name)}
                              className="hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 flex items-center gap-2 cursor-pointer"
                            >
                              {site.name === 'Chio Admin'
                                ? <UserCog className="w-4 h-4 text-black dark:text-white" />
                                : site.name === 'Chio'
                                  ? <Smartphone className="w-4 h-4 text-black dark:text-white" />
                                  : <Link className="w-4 h-4 text-black dark:text-white" />
                              }
                              <span>{site.name}</span>
                              <DropdownMenuShortcut>
                                <ExternalLink className="w-4 h-4 text-black dark:text-white" />
                              </DropdownMenuShortcut>
                            </DropdownMenuItem>
                          </DialogTrigger>
                        ))}

                      </DropdownMenuContent>
                    </DropdownMenu>

                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>{openDialog}</DialogTitle>
                        <DialogDescription>
                          {openDialog === 'Chio Admin'
                            ? 'This is the login credential for the Chio Admin site.'
                            : 'Scan this QR code to open the Chio app on your phone via Expo Go.'}
                        </DialogDescription>
                      </DialogHeader>

                      <div className="grid items-center gap-2 py-5">
                        {openDialog === 'Chio Admin' ? (
                          <>
                            <div>Username: SuperAdmin</div>
                            <div>Password: password</div>
                          </>
                        ) : (
                          <img src={chioqrImg} alt="Chio QR Code" className="rounded-lg shadow-md w-48 mx-auto" />
                        )}
                      </div>

                      <DialogFooter>
                        <Button
                          className="cursor-pointer"
                          onClick={() => {
                            const selectedSite = project.sites.find((site) => site.name === openDialog);
                            if (selectedSite) {
                              window.open(selectedSite.link, "_blank");
                            }
                          }}
                        >
                          {openDialog === 'Chio Admin' ? 'Go to Chio Admin' : 'View Github'} <ExternalLink />
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                ) : (
                  // Only one site -> Direct Button
                  <Button
                    onClick={() => window.open(project.sites[0].link, "_blank")}
                    className='cursor-pointer'
                  >
                    Live Site <ExternalLink className="w-4 h-4" />
                  </Button>
                )}
              </>
            )}
          </div>

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
                delay: 5000,
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
          <h2 className="text-2xl font-semibold mb-4">{project.type === "app" ? "Tech Stack" : "Product Skills"}</h2>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech, i) => (
              <div key={i} className="bg-blue-100 dark:text-white flex items-center text-blue-800 dark:bg-blue-800 gap-2 px-4 py-2 rounded-lg shadow-sm transform-scale-100 hover:scale-105 transition duration-300 ease-in-out">
                {tech.logo && (
                  <img src={tech.logo} alt={tech.name} className="w-5 h-5" />
                )}
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
          <h2 className="text-2xl font-semibold mb-4">{project.type === "app" ? "Key Features" : "Key Highlights"}</h2>
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