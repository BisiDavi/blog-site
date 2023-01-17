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
}
export default function Button(props: Props) {
  const {
    text,
    type = "button",
    className,
    onClick,
    icon,
    iconPosition = "left",
  } = props;

  return (
    <button
      {...props}
      className={className}
      type={type}
      title={text}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && (
        <Image
          src={icon}
          alt="icon"
          height={50}
          width={50}
          className="w-1/5 mr-1"
        />
      )}
      {text ? text : ""}
      {icon && iconPosition === "right" && (
        <Image
          src={icon}
          alt="icon"
          height={50}
          width={50}
          className="w-1/5 mr-1"
        />
      )}
    </button>
  );
}
