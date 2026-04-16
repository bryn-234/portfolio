"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "Tech Startup Inc.",
    role: "Software Engineering Intern",
    period: "Summer 2025",
    description: [
      "Developed and deployed microservices handling 10,000+ daily requests using Node.js and AWS Lambda",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with cross-functional teams to deliver features ahead of schedule",
      "Contributed to codebase documentation and onboarding materials for new team members",
    ],
    tech: ["TypeScript", "AWS", "Docker", "PostgreSQL"],
  },
  {
    company: "University Research Lab",
    role: "Undergraduate Research Assistant",
    period: "Jan 2024 - Present",
    description: [
      "Conducting research on efficient algorithms for large-scale graph processing",
      "Implemented parallel computing solutions achieving 4x speedup on benchmark datasets",
      "Co-authored paper currently under review for publication",
      "Present findings at weekly lab meetings and mentored junior researchers",
    ],
    tech: ["Python", "CUDA", "C++", "HPC"],
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2023 - Present",
    description: [
      "Built custom web applications for small businesses and startups",
      "Delivered 5+ production-ready applications with focus on performance and UX",
      "Managed client relationships and gathered requirements for project scoping",
      "Provided ongoing maintenance and feature updates for existing clients",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "Supabase"],
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
