import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Folder } from "lucide-react"

const featuredProjects = [
  {
    title: "TaskFlow AI",
    description:
      "An intelligent task management application that uses machine learning to predict task priorities and suggest optimal scheduling. Features real-time collaboration and natural language processing for quick task entry.",
    tech: ["React", "Node.js", "Python", "TensorFlow", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Distributed File System",
    description:
      "A fault-tolerant distributed file system implementing the Raft consensus algorithm. Supports automatic replication, leader election, and handles network partitions gracefully.",
    tech: ["Go", "gRPC", "Docker", "Kubernetes"],
    github: "https://github.com",
  },
  {
    title: "EcoTrack",
    description:
      "A mobile-first web application helping users track and reduce their carbon footprint. Integrates with smart home devices and provides personalized sustainability recommendations.",
    tech: ["Next.js", "TypeScript", "Prisma", "IoT APIs"],
    github: "https://github.com",
    live: "https://example.com",
  },
]

const otherProjects = [
  {
    title: "Compiler for Mini-Lang",
    description: "A complete compiler for a custom programming language featuring lexical analysis, parsing, semantic analysis, and code generation targeting x86 assembly.",
    tech: ["C++", "LLVM"],
  },
  {
    title: "Real-time Chat Application",
    description: "WebSocket-based chat application with end-to-end encryption, supporting group chats, file sharing, and message reactions.",
    tech: ["Socket.io", "React", "Redis"],
  },
  {
    title: "ML Model Playground",
    description: "Interactive web interface for visualizing and experimenting with machine learning algorithms, from linear regression to neural networks.",
    tech: ["Python", "Streamlit", "Scikit-learn"],
  },
  {
    title: "Portfolio Website",
    description: "This very website! Built with Next.js and Tailwind CSS, featuring smooth animations and full dark mode support.",
    tech: ["Next.js", "Tailwind CSS"],
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
                          <Github className="h-4 w-4" />
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
