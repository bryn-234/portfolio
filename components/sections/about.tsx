import { Badge } from "@/components/ui/badge"

const skills = [
  "Java",
  "C/C++",
  "Python",
  "Julia",
  "MIPS Assembly",
  "Verilog",
  "SQL",
  "PostgreSQL",
  "Spring",
  "GitHub",
  "Vivado",
  "Neon",
  "PSpice",
]

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-mono text-primary mb-2">01.</h2>
        <h3 className="text-2xl sm:text-3xl font-bold mb-8">About Me</h3>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m pursuing a B.S. in Computer Science and Engineering at the University of Arizona 
              in the W.A. Franke Honors College, with minors in Mathematics and Electrical Engineering. 
              I maintain a 3.9 GPA and have studied abroad in Greece.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I&apos;m a Software Engineering Intern at HartSci, where I&apos;m building 
              a Julia-based data visualization application for adaptive optics systems. My work 
              involves transforming raw system inputs into interpretable plots and dashboards 
              for non-technical users.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Outside of academics, I serve as Vice President of UA Club Tennis, managing a 150+ 
              member roster and handling team logistics. I also represent the College of Engineering 
              as an Engineering Ambassador, leading campus tours and recruitment events.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Technologies I work with</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="font-mono text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
