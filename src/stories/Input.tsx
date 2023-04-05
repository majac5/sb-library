import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import styles from "./input.module.scss";

interface InputProps {
  error?: boolean;
  label?: string;
  placeholder: string;
}

export const Input = ({ error, label, placeholder }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        className={error ? styles.inputError : styles.input}
        placeholder={placeholder}
      ></input>
      <HomeIcon className={styles.heroIcon} />
    </>
  );
};
