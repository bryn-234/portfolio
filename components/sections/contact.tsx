import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-sm font-mono text-primary mb-2">05.</h2>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Get In Touch</h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I&apos;m currently looking for internship opportunities for Summer 2026 and am 
            always open to discussing new projects, creative ideas, or opportunities to 
            be part of something impactful. Whether you have a question or just want to 
            say hi, feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" asChild>
              <a href="mailto:bryn@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Say Hello
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:bryn@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
