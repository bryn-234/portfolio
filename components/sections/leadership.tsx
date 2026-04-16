import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, BookOpen, Code } from "lucide-react"

const activities = [
  {
    icon: Code,
    title: "ACM Student Chapter",
    role: "Vice President",
    period: "2024 - Present",
    description:
      "Lead a team organizing hackathons, tech talks, and networking events for 200+ members. Coordinate with industry sponsors and manage chapter operations and outreach.",
  },
  {
    icon: Users,
    title: "Engineering Ambassadors",
    role: "Student Ambassador",
    period: "2023 - Present",
    description:
      "Represent the College of Engineering at recruitment events, campus tours, and outreach programs. Mentor prospective students and share experiences to inspire future engineers.",
  },
  {
    icon: Award,
    title: "HackArizona",
    role: "Participant & Mentor",
    period: "2024, 2025",
    description:
      "Competed in Arizona's largest collegiate hackathon, building projects in 24-hour sprints. Returned as a mentor to guide first-time participants through ideation and development.",
  },
  {
    icon: BookOpen,
    title: "CS Tutoring Center",
    role: "Peer Tutor",
    period: "2024 - Present",
    description:
      "Provide drop-in tutoring for introductory CS courses including CSC 110 and CSC 120. Help students with Python fundamentals, debugging, and problem-solving strategies.",
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
