// @/types/button.ts
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { IconBaseProps, IconType } from "react-icons";

export type Icon = IconType | "arrow";

type BaseProps = {
  variant?: "fill" | "outline" | "ghost" | "link";
  color?: "primary" | "secondary" | "accent" | "red";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  icon?: Icon;
  iconProps?: IconBaseProps & {
    position?: "before" | "after";
  };
  badge?: number | string;
  fullWidth?: boolean;
  rounded?: "sm" | "md" | "lg" | "full";
  noTruncate?: boolean;
};

type ButtonAsButton = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps> & {
    as?: "button";
    href?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof BaseProps> & {
    as?: "a";
    href: string;
  };

type ButtonAsComponent = BaseProps & {
  as: React.ElementType;
  href?: never;
  [key: string]: any;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsComponent;
