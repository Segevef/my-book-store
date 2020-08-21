import React from "react";
import Button from "@material-ui/core/Button";
import "./LoaderButton.css";
import LoopIcon from "@material-ui/icons/Loop";

export default function LoaderButton({
  // @ts-ignore
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <LoopIcon className="spinning" />}
      {props.children}
    </Button>
  );
}
