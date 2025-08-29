import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Mail",
    title: "Email Templates",
    description:
      "Create and manage professional email templates for consistent client communication. Save time with our drag-and-drop editor.",
  },
  {
    icon: "Calendar",
    title: "Integrated Calendar",
    description:
      "Schedule meetings, set reminders, and track appointments with our powerful calendar system. Sync with popular calendar apps.",
  },
  {
    icon: "FileText",
    title: "Client Documents",
    description:
      "Store and organize all client-related documents securely. Share files with clients and team members with ease.",
  },
  {
    icon: "Search",
    title: "Lead Research",
    description:
      "Research potential leads with our built-in tools. Gather social media insights and company information automatically.",
  },
  {
    icon: "Kanban",
    title: "Kanban Board",
    description:
      "Visualize your sales pipeline and project progress with customizable Kanban boards. Drag and drop tasks for easy management.",
  },
  {
    icon: "Twitter",
    title: "Viral Twitter Posts Finder",
    description:
      "Discover trending Twitter posts and content relevant to your business. Engage with potential leads and stay updated on industry trends.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Powerful CRM Capabilities
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Flowly CRM comes packed with everything you need to manage your clients and grow your business.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};