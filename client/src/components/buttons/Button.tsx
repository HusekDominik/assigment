import React from "react";
import styles from "./button.module.css";

type Props = {
    onClick?: () => any;
    children?: any;
    type?: "button" | "submit";
    disabled?: boolean;
    background?:
        | "success"
        | "danger"
        | "info"
        | "warning"
        | "error"
        | "dark"
        | "white"
        | "grey"
        | "lightgray"
        | "transparent";
    className?: string;
    style?: any;
};

const backgroundPallete = {
    success: "#7FFF00",
    danger: "#dc3545",
    info: "#17a2b8",
    warning: "#ffc107",
    error: "red",
    default: "#007bff",
    white: "#ffffff",
    dark: "#343a40",
    grey: "#425B81",
    lightgray: "#D3D3D3",
    transparent: "transparent",
};

const Button: React.FC<Props> = ({ children, background, style, ...props }) => {
    const backgroundColor = background
        ? backgroundPallete[`${background}`]
        : backgroundPallete["default"];

    // @ts-ignore

    return (
        <button
            {...props}
            style={Object.assign({ backgroundColor: backgroundColor }, style)}
            className={`${props.className} ${styles["button-style"]}`}
        >
            {children}
        </button>
    );
};

export default Button;
