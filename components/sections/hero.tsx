import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="mx-auto max-w-5xl w-full">
        <div className="max-w-2xl">
          <p className="text-primary font-mono text-sm mb-4">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Bryn Neal
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6">
            Computer Science & Engineering Student
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
            I&apos;m passionate about building software that makes a difference. 
            Currently exploring the intersection of systems design, machine learning, 
            and user experience to create meaningful digital solutions.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Button asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:bryn@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown className="h-5 w-5 animate-bounce" />
            <span className="sr-only">Scroll to about section</span>
          </a>
        </div>
      </div>
    </section>
  )
}
