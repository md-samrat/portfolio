import { cn } from "@/lib/utils";
import { RevealText } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-14 flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-gold" />
        <span className="text-xs uppercase tracking-[0.28em] text-gold">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-4xl font-semibold leading-[1.1] text-balance sm:text-5xl">
        <RevealText text={title} />
      </h2>
    </div>
  );
}
