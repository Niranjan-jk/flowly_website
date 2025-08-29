"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Sarah Johnson",
    userName: "Sales Director",
    comment:
      "Flowly CRM has transformed how we manage our client relationships. The email templates save us hours each week!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Michael Chen",
    userName: "Marketing Manager",
    comment:
      "The lead research and viral Twitter posts finder have helped us identify and engage with prospects we never would have found otherwise.",
    rating: 4.8,
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Emma Rodriguez",
    userName: "Small Business Owner",
    comment:
      "As a solo entrepreneur, Flowly CRM helps me stay organized and professional. The calendar integration is a game-changer!",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "David Wilson",
    userName: "Customer Success Manager",
    comment:
      "The Kanban board visualization makes it easy to track our entire client pipeline. Our team adoption was seamless.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Lisa Thompson",
    userName: "Business Development",
    comment:
      "Client document management has never been easier. We've reduced document retrieval time by 80% since switching to Flowly.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Robert Kim",
    userName: "Tech Startup Founder",
    comment:
      "Flowly's intuitive interface and powerful features make it the perfect CRM for growing businesses. Worth every penny!",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};