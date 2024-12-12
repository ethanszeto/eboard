import React, { ReactNode } from "react";

export type BoxProps = {
  className?: string;
  children?: ReactNode;
};

export function Box({ className, children }: BoxProps) {
  return <div className={className}>{children}</div>;
}
