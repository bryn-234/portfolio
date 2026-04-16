import { Badge } from "@/components/ui/badge"

const skills = [
  "Python",
  "Java",
  "C/C++",
  "JavaScript",
  "TypeScript",
  "Verilog",
  "SQL",
  "React",
  "Node.js",
  "PostgreSQL",
  "Git",
  "Docker",
  "AWS",
  "TensorFlow",
  "PyTorch",
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
              I&apos;m a junior pursuing a B.S. in Computer Science at the University of Arizona 
              with a 3.8 GPA. My journey in tech spans from low-level hardware design with 
              Verilog to building full-stack web applications and exploring machine learning.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Last summer, I interned at Raytheon RTX where I developed real-time data 
              processing pipelines and worked on radar signal analysis tools. I&apos;m also 
              an undergraduate research assistant at the UA Artificial Intelligence Lab, 
              where I contribute to computer vision research using deep learning.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Outside of academics, I serve as Vice President of the ACM Student Chapter, 
              organizing hackathons and tech talks for our 200+ member community. I&apos;m 
              currently seeking Summer 2026 internship opportunities in software engineering.
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
