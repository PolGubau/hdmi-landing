import type { Testimonial } from "~/app/sections/testimonials/Testimonials.astro";

type Props = {
  testimonial: Testimonial;
};

export const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <li className="border-foreground/10 border rounded-2xl shadow-2xl max-w-xl h-[350px] p-8 sm:p-10 grid grid-rows-[1fr_auto] gap-2">
      <header className="h-full flex flex-col gap-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_) => (
            <span className="bg-primary rounded-full h-5 w-5 fill-accent" />
          ))}
        </div>
        <blockquote className="text-pretty text-xl font-medium leading-relaxed text-card-foreground sm:text-2xl">
          {testimonial.text}
        </blockquote>
      </header>

      <div className="h-fit border-t border-border pt-4">
        <p className="text-lg font-bold text-foreground">
          {testimonial.author}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {testimonial.company}
        </p>
      </div>
    </li>
  );
};
