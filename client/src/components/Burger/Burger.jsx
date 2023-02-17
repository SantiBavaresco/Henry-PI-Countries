import { useRef, useState } from "react";
import styles from "./Burger.module.css";

const Icon = ({ children, iconRef, className }) => (
  <span
    ref={iconRef}
    className={`${className || ""} material-symbols-outlined`}
  >
    {children}
  </span>
);

export default function Burger () {
  const buttonRef = useRef(null);
  const chevronRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [menuTop, setMenuTop] = useState();
  const [menuRight, setMenuRight] = useState();

  const handleClick = () => {
    const buttonRect = buttonRef?.current?.getBoundingClientRect();
    const chevronRect = chevronRef?.current?.getBoundingClientRect();

    if (buttonRect && chevronRect && isOpen) {
      const menuRight = buttonRect.right - chevronRect.right;
      const menuTop = chevronRect.top - buttonRect.top;
      setMenuRight(`${menuRight}px`);
      setMenuTop(`${menuTop}px`);
    } else {
      setMenuRight("0");
      setMenuTop("78px");
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.dropdown} ${isOpen ? styles.open : ""}`}>
    <button ref={buttonRef} onClick={handleClick}>
      <Icon>account_circle</Icon>
      <span>Preferences</span>
      <Icon
        iconRef={chevronRef}
        className={`${styles.chevron} material-symbols-outlined ${
          isOpen ? styles.close : ""
        }`}
      >
        {isOpen ? "close" : "expand_more"}
      </Icon>
    </button>
    <div
      className={`${styles.menu} ${isOpen ? styles.open : ""}`}
      style={{ right: menuRight, top: menuTop }}
    >
      <button>
        <Icon>dark_mode</Icon>
        <span>Dark Mode</span>
      </button>
      <button>
        <Icon>widgets</Icon>
        <span>Widgets</span>
      </button>
      <button>
        <Icon>lock</Icon>
        <span>Account</span>
      </button>
    </div>
  </div>
  );
};