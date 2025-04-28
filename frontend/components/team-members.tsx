import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, Plus } from "lucide-react"

export function TeamMembers() {
  const members = [
    {
      name: "Sofia Davis",
      email: "m@example.com",
      role: "Owner",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SD",
    },
    {
      name: "Jackson Lee",
      email: "jl@example.com",
      role: "Member",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JL",
    },
    {
      name: "Isabella Nguyen",
      email: "in@example.com",
      role: "Member",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "IN",
    },
  ]

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <h3 className="font-medium">Team Members</h3>
        <p className="text-sm text-muted-foreground">Invite your team members to collaborate.</p>
        <div className="mt-4 space-y-3">
          {members.map((member) => (
            <div key={member.email} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.email}</p>
                </div>
              </div>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3">
                {member.role} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 absolute">
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add member</span>
          </button>
        </div>
      </div>
    </div>
  )
}
