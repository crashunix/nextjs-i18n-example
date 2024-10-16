"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import { Link as NextLink, Pathnames } from "@/i18n/routing";

export default function Link<Pathname extends Pathnames>({
  href,
  ...rest
}: ComponentProps<typeof NextLink<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <NextLink
      aria-current={isActive ? "page" : undefined}
      href={href}
      {...rest}
    />
  );
}
