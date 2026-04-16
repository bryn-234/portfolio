"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "Raytheon RTX",
    role: "Software Engineering Intern",
    period: "May 2025 - Aug 2025",
    description: [
      "Developed real-time data processing pipelines for radar signal analysis using Python and C++",
      "Optimized existing algorithms achieving 40% improvement in processing throughput",
      "Collaborated with cross-functional teams on mission-critical defense software systems",
      "Implemented automated testing frameworks increasing code coverage by 25%",
    ],
    tech: ["Python", "C++", "Signal Processing", "Git"],
  },
  {
    company: "UA Artificial Intelligence Lab",
    role: "Undergraduate Research Assistant",
    period: "Jan 2025 - Present",
    description: [
      "Contributing to computer vision research focusing on object detection algorithms",
      "Developing and training deep learning models using TensorFlow and PyTorch",
      "Processing and augmenting large-scale image datasets for model training",
      "Presenting research findings at weekly lab meetings and collaborating with graduate students",
    ],
    tech: ["Python", "TensorFlow", "PyTorch", "OpenCV"],
  },
  {
    company: "University of Arizona",
    role: "Teaching Assistant - CSC 110",
    period: "Aug 2024 - Dec 2024",
    description: [
      "Led weekly lab sessions for 30+ students in Introduction to Computer Programming",
      "Held office hours providing one-on-one assistance with Python programming concepts",
      "Graded assignments and provided constructive feedback to help students improve",
      "Developed supplementary learning materials and practice problems",
    ],
    tech: ["Python", "Teaching", "Curriculum Development"],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-mono text-primary mb-2">03.</h2>
        <h3 className="text-2xl sm:text-3xl font-bold mb-12">Experience</h3>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-4 py-3 text-sm text-left whitespace-nowrap transition-colors",
                  "hover:bg-muted/50 hover:text-foreground",
                  "border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px",
                  activeTab === index
                    ? "border-primary text-foreground bg-muted/30"
                    : "border-transparent text-muted-foreground"
                )}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 min-h-[300px]">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={cn(
                  "transition-opacity duration-200",
                  activeTab === index ? "block" : "hidden"
                )}
              >
                <h4 className="text-lg font-semibold mb-1">
                  {exp.role}{" "}
                  <span className="text-primary">@ {exp.company}</span>
                </h4>
                <p className="text-sm text-muted-foreground font-mono mb-4">
                  {exp.period}
                </p>
                <ul className="space-y-3 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5 flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                          <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
