import React from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";
import styles from "./btn.module.scss";

interface btnProps {
  label: string;
  icon?: boolean;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "outline" | "clear" | "link";
  className?: string;
}

const Btn = ({
  label,
  icon,
  variant = "primary",
  className = "",
}: btnProps) => {
  let variantClass = "";
  switch (variant) {
    case "outline":
      variantClass = styles.buttonOutline;
      break;
    case "clear":
      variantClass = styles.buttonClear;
      break;
    case "link":
      variantClass = styles.buttonLink;
      break;
    default:
      variantClass = styles.buttonPrimary;
  }

  const classNames = ["", variantClass, className];
  const finalClassName = classNames.join(" ");

  const Buttons = () => (
    <>
      <button type="button" id="one">
        Hover
      </button>
      <button type="button" id="two">
        Hover focus
      </button>
      <button type="button" id="three">
        Hover focus active
      </button>
    </>
  );
  Buttons.parameters = {
    pseudo: {
      hover: ["#one", "#two", "#three"],
      focus: ["#two", "#three"],
      active: "#three",
    },
  };

  return (
    <>
      {icon ? (
        <button type="button" className={finalClassName}>
          {label} <ArrowSmallRightIcon className={styles.buttonIcon} />
        </button>
      ) : (
        <>
          <button type="button" className={finalClassName}>
            {label}
          </button>
          {Buttons()}
        </>
      )}
    </>
  );
};

export default Btn;
