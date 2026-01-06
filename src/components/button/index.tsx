// @/components/button/index.tsx
"use client";
import { cn } from "@/lib/utils";
import { createElement, forwardRef } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ButtonProps, Icon } from "@/types/button";
import { IconType } from "react-icons";
import { btnIcons, btnStyles } from "./utils";
import Link from "next/link";

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      className,
      as,
      variant = "fill",
      color = "secondary",
      size = "md",
      disabled,
      loading,
      icon,
      iconProps,
      badge,
      fullWidth,
      rounded = "md",
      noTruncate = false,
      ...restProps
    } = props;

    // Determine component type
    const hasHref = "href" in props && props.href;
    const Component = hasHref ? Link : as ?? "button";

    const {
      size: iSize,
      className: iClass,
      position: iPosition,
      ...restIconProps
    } = iconProps || {};

    // Get the appropriate rounded style
    const roundedStyle = rounded
      ? btnStyles.rounded[rounded as "sm" | "md" | "lg" | "full"]
      : btnStyles.rounded[(size as "sm" | "md" | "lg") ?? "md"];

    const sizeStyle =
      rounded === "full"
        ? btnStyles.circular[size as "sm" | "md" | "lg"]
        : btnStyles.size[size as "sm" | "md" | "lg"];

    const cls = cn(
      btnStyles.base,
      btnStyles[variant as "fill" | "outline" | "ghost" | "link"][color as "primary" | "secondary" | "accent"],
      roundedStyle,
      sizeStyle,
      (disabled || loading) && btnStyles.disabled,
      loading && btnStyles.loading,
      fullWidth && btnStyles.fullWidth,
      badge ? btnStyles.badge : btnStyles.overflow,
      className
    );

    // Icon size based on button size
    const defaultIconSize = size === "sm" ? 16 : size === "lg" ? 24 : 20;
    const iconSize = iSize ?? defaultIconSize;
    const iconPosition = iPosition ?? "before";

    // Helper to render icon
    const renderIcon = (iconProp: Icon | undefined) => {
      if (!iconProp) return null;

      // Check if it's a predefined icon key
      const predefinedIcon = btnIcons.find((i) => i.key === iconProp);
      const IconComponent = predefinedIcon
        ? predefinedIcon.icon
        : (iconProp as IconType);

      return (
        <IconComponent
          size={iconSize}
          className={cn("shrink-0", iClass)}
          aria-hidden="true"
          {...restIconProps}
        />
      );
    };

    const content = (
      <>
        {loading && (
          <AiOutlineLoading3Quarters
            className="animate-spin shrink-0"
            size={defaultIconSize}
            aria-hidden="true"
          />
        )}
        {!loading && iconPosition === "before" && renderIcon(icon)}
        {children &&
          (noTruncate
            ? children
            : (<span className="truncate">{children}</span>)
          )
        }
        {!loading && iconPosition === "after" && renderIcon(icon)}

        {/* Shine effect on hover - only for fill and outline variants */}
        {(variant === "fill" || variant === "outline") && (
          <span
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        )}
      </>
    );

    // Create props object based on component type
    const componentProps: any = {
      // ref,
      className: cls,
      "aria-busy": loading,
      "data-badge": badge,
      ...restProps,
    };

    // Add button-specific props
    if (Component === "button" || as === "button") {
      componentProps.disabled = disabled || loading;
      componentProps.type = (restProps as any).type ?? "button";
    }

    // Add link-specific props
    if (hasHref) {
      return (
        <Link {...componentProps} ref={ref} aria-disabled={disabled || loading}>
          {content}
        </Link>
      );
    }

    return createElement(Component, {
      ...componentProps,
      // ref,
    }, content);
  }
);

Button.displayName = "Button";

export default Button;
