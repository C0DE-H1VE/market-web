"use client";

import Link from "next/link";

interface IButtonBaseProps {
  label: string;
}

interface IButtonAsButtonProps
  extends IButtonBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  as: "button";
}

interface IButtonAsAnchorProps
  extends IButtonBaseProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  as: "a";
}

type IButtonProps = IButtonAsButtonProps | IButtonAsAnchorProps;

export default function Button(props: IButtonProps) {
  const { label, as, ...rest } = props;
  if (as === "a") {
    const { type, ...anchorRest } =
      rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return <Link {...anchorRest} href={anchorRest.href ?? "#"}>{label}</Link>;
  }

  const buttonProps = {
    ...rest,
    type:
      (rest as React.ButtonHTMLAttributes<HTMLButtonElement>).type ?? "button",
  } as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return <button {...buttonProps} onClick={buttonProps.onClick}>{label}</button>;
}
