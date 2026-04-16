import { Badge } from "@/components/ui/badge"

const skills = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "C++",
  "Java",
  "SQL",
  "Git",
  "AWS",
  "Docker",
  "Machine Learning",
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
              I&apos;m a Computer Science and Engineering student with a deep curiosity 
              for how technology can solve real-world problems. My journey in tech began 
              with building simple websites and has evolved into a passion for full-stack 
              development, systems programming, and exploring the frontiers of AI.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me contributing to open-source projects, 
              mentoring fellow students, or diving into research on distributed systems. 
              I believe in writing clean, maintainable code and building products that 
              genuinely help people.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I&apos;m focused on expanding my knowledge in cloud architecture 
              and machine learning while seeking opportunities to apply these skills 
              in impactful internships and projects.
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
