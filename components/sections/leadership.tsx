import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, BookOpen, Code } from "lucide-react"

const activities = [
  {
    icon: Users,
    title: "CS Student Association",
    role: "Vice President",
    period: "2024 - Present",
    description:
      "Lead a team of 15 officers organizing hackathons, tech talks, and networking events for 500+ members. Increased event attendance by 40% through improved outreach strategies.",
  },
  {
    icon: Code,
    title: "Open Source Club",
    role: "Project Lead",
    period: "2023 - Present",
    description:
      "Guide weekly sessions introducing students to open source contribution. Led 20+ students through their first pull requests to major projects including React and VS Code.",
  },
  {
    icon: BookOpen,
    title: "Peer Tutoring Program",
    role: "Senior Tutor",
    period: "2023 - Present",
    description:
      "Provide one-on-one tutoring for Data Structures and Algorithms courses. Mentored 30+ students with average grade improvement of one letter grade.",
  },
  {
    icon: Award,
    title: "Hackathon Organizer",
    role: "Technical Director",
    period: "2024",
    description:
      "Organized annual 48-hour hackathon with 300+ participants. Managed technical infrastructure, mentored teams, and coordinated with 15+ sponsor companies.",
  },
]

export function Leadership() {
  return (
    <section id="leadership" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-mono text-primary mb-2">04.</h2>
        <h3 className="text-2xl sm:text-3xl font-bold mb-12">Leadership & Activities</h3>

        <div className="grid sm:grid-cols-2 gap-6">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <Card key={activity.title} className="border-border/50">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{activity.title}</CardTitle>
                      <p className="text-sm text-primary font-medium">
                        {activity.role}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono">
                        {activity.period}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {activity.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
