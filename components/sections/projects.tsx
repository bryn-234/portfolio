import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Folder } from "lucide-react"

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

const featuredProjects = [
  {
    title: "Bakery Database",
    description:
      "Designed a multi-entity relational database using a 20,000 transaction dataset. Built a cloud-hosted PostgreSQL database using Neon with normalized schemas, data integrity constraints, and optimized analytical queries. Conducted benchmarking tests comparing indexed vs. non-indexed queries.",
    tech: ["PostgreSQL", "SQL", "Neon", "Database Design"],
    github: "https://github.com/bryn-234/bakery-database",
  },
  {
    title: "Pipelined MIPS Datapath",
    description:
      "Implemented a 5-stage pipelined MIPS datapath in Verilog with ALU, register file, control unit, and pipeline registers. Applied NOP-based hazard mitigation to ensure correct execution across hazards. Verified functionality through Vivado waveform simulation and FPGA board testing.",
    tech: ["Verilog", "MIPS Assembly", "Vivado", "FPGA"],
    github: "https://github.com/bryn-234/mips-pipeline",
  },
  {
    title: "Game of Trains",
    description:
      "Built a digital version of the card game in C, implementing gameplay mechanics and data structures for card management, player turns, and game state tracking.",
    tech: ["C", "Data Structures", "Algorithms"],
    github: "https://github.com/bryn-234/game-of-trains",
  },
]

const otherProjects = [
  {
    title: "Adaptive Optics Visualizer",
    description: "Julia-based data visualization application transforming raw system inputs into interpretable plots and dashboards. Built during internship at HartSci.",
    tech: ["Julia", "Data Visualization", "Linux"],
  },
  {
    title: "Portfolio Website",
    description: "This very website! Built with Next.js and Tailwind CSS, featuring smooth animations and full dark mode support.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/bryn-234/portfolio",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-mono text-primary mb-2">02.</h2>
        <h3 className="text-2xl sm:text-3xl font-bold mb-12">Projects</h3>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono text-primary mb-1">
                      Featured Project
                    </p>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <GitHubIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} live`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <h4 className="text-xl font-semibold mb-6 text-center">
          Other Noteworthy Projects
        </h4>
        <div className="grid sm:grid-cols-2 gap-4">
          {otherProjects.map((project) => (
            <Card
              key={project.title}
              className="group hover:border-primary/50 transition-colors"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Folder className="h-8 w-8 text-primary" />
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GitHubIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 line-clamp-3">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
