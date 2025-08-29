import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Starter",
    popular: 0,
    price: 29,
    description:
      "Perfect for freelancers and small teams getting started with CRM.",
    buttonText: "Start Free Trial",
    benefitList: [
      "Up to 500 contacts",
      "Email Templates",
      "Basic Calendar",
      "Document Storage (1GB)",
      "Community support",
    ],
  },
  {
    title: "Professional",
    popular: 1,
    price: 79,
    description:
      "Ideal for growing businesses with advanced CRM needs.",
    buttonText: "Get Started",
    benefitList: [
      "Up to 5,000 contacts",
      "All Starter features",
      "Advanced Calendar",
      "Lead Research Tool",
      "Kanban Board",
      "Priority support",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 149,
    description:
      "For large organizations with complex CRM requirements.",
    buttonText: "Contact Sales",
    benefitList: [
      "Unlimited contacts",
      "All Professional features",
      "Viral Twitter Posts Finder",
      "Advanced Document Management",
      "Custom Reporting",
      "Dedicated Account Manager",
      "24/7 Phone & Email Support",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Simple, transparent pricing
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose the perfect plan for your team. All plans include a 14-day free trial.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                  onClick={() => window.open("https://drive.google.com/file/d/1ZCay2YE5jFqGQLp-5Nc7YOMiwnQlwBoW/view?usp=sharing", "_blank")}
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};