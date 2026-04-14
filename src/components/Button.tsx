import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonLinkProps = ButtonBaseProps &
  Omit<ComponentProps<typeof Link>, "className" | "children"> & {
    href: ComponentProps<typeof Link>["href"];
  };

type NativeButtonProps = ButtonBaseProps &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: never;
  };

type ButtonProps = ButtonLinkProps | NativeButtonProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-amber-500 hover:bg-amber-400 text-emerald-950 shadow-lg shadow-amber-500/30",
  secondary:
    "bg-emerald-800 hover:bg-emerald-700 text-white border border-emerald-600",
  outline:
    "bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-emerald-950",
};

export function Button(props: ButtonProps) {
  const { children, className = "", variant = "primary" } = props;
  const classes = [
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300",
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href !== undefined) {
    const {
      children: ignoredChildren,
      className: ignoredClassName,
      variant: ignoredVariant,
      ...linkProps
    } = props;
    void ignoredChildren;
    void ignoredClassName;
    void ignoredVariant;

    return (
      <Link className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const {
    children: ignoredChildren,
    className: ignoredClassName,
    variant: ignoredVariant,
    ...buttonProps
  } = props;
  void ignoredChildren;
  void ignoredClassName;
  void ignoredVariant;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
