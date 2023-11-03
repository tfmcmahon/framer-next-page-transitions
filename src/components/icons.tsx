import { icons } from "lucide-react";

interface IconProps {
  absoluteStrokeWidth?: boolean;
  className?: string;
  color?: string;
  name: keyof typeof icons;
  size?: number;
  strokeWidth?: number;
}

const Icons = ({
  absoluteStrokeWidth,
  className,
  color,
  name,
  size,
  strokeWidth,
}: IconProps) => {
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      absoluteStrokeWidth={absoluteStrokeWidth}
      className={className}
      color={color}
      size={size}
      strokeWidth={strokeWidth}
    />
  );
};

export default Icons;
