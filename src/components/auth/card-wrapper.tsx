"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { BackButton } from "./back-button";
import { Header } from "./header";
interface CardWrapperProps {
  children: React.ReactNode;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  backButtonLabel,
  backButtonHref,
}: //showSocial,
CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-none">
      <CardHeader>
        <Header />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <BackButton label={backButtonLabel} href={backButtonHref} />
      <CardFooter></CardFooter>
    </Card>
  );
};
