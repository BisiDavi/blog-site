import Image from "next/image";

interface Props {
  text?: string;
  type?: "submit" | "reset" | "button";
  className?: string;
  onClick?: () => void;
  icon?: string;
  onMouseMove?: () => void;
  onMouseOut?: () => void;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  iconClassName?: string;
}
export default function Button(props: Props) {
  const {
    text,
    className,
    onClick,
    icon,
    iconClassName,
    type = "button",
    iconPosition = "left",
  } = props;

  return (
    <button className={className} type={type} title={text} onClick={onClick}>
      {icon && iconPosition === "left" && (
        <Image
          src={icon}
          alt="icon"
          height={50}
          width={50}
          className={iconClassName}
        />
      )}
      {text ? text : ""}
      {icon && iconPosition === "right" && (
        <Image
          src={icon}
          alt="icon"
          height={50}
          width={50}
          className={iconClassName}
        />
      )}
    </button>
  );
}
