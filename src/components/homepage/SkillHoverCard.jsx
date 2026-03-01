import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function SkillHoverCard({
  label,
  image,
  title,
  description,
}) {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <div className="skill-box cursor-pointer">
          {label}
        </div>
      </HoverCardTrigger>

      <HoverCardContent
        side="bottom"
  align="start"
  sideOffset={8}
  avoidCollisions={false}
  className="w-[320px] bg-black text-white border border-white/20 shadow-2xl"
  >
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-cover rounded-md mb-3"
        />

        <div className="max-h-40 overflow-y-auto text-sm leading-relaxed">
          <h4 className="font-semibold mb-2">{title}</h4>
          <p>{description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
