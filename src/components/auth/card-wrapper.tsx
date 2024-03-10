"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
interface CardWrapperProps {
  children: React.ReactNode;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
}: //showSocial,
CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-none">
      <CardHeader className="mb-16">
        <Header />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
