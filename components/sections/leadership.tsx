import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Megaphone, Trophy, GraduationCap } from "lucide-react"

const activities = [
  {
    icon: Trophy,
    title: "University of Arizona Club Tennis",
    role: "Vice President",
    period: "Aug. 2023 - Present",
    description:
      "Manage a 150+ member roster, oversee scheduling, and coordinate team travel logistics for tournaments and events.",
  },
  {
    icon: Megaphone,
    title: "Engineering Ambassadors",
    role: "Engineering Ambassador",
    period: "Aug. 2025 - Present",
    description:
      "Represent the College of Engineering at recruitment events and lead campus tours for prospective students and families.",
  },
  {
    icon: GraduationCap,
    title: "Semiconductor Industry Fast Track Program",
    role: "Participant",
    period: "Feb. 2025 - Apr. 2025",
    description:
      "Worked on a team solution addressing semiconductor shortages, including location selection, economic impact, and community benefits and detriments.",
  },
  {
    icon: Users,
    title: "W.A. Franke Honors College",
    role: "Honors Student",
    period: "2023 - Present",
    description:
      "Pursuing a B.S. in Computer Science and Engineering at the University of Arizona while also completing minors in Mathematics and Electrical Engineering.",
  },
]

export function Leadership() {
  return (
    <section id="leadership" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-mono text-primary mb-2">05.</h2>
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
                      <p className="text-sm text-primary font-medium">{activity.role}</p>
                      <p className="text-xs text-muted-foreground font-mono">{activity.period}</p>
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