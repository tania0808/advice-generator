import React, { ReactNode } from "react";
import {
  Wrapper,
  Heading,
  Body,
  Divider,
  DividerLine,
  IconDivider,
  Button,
  ButtonIcon,
} from "./Advice.styled";

interface ContentProps {
  children?: ReactNode;
}

interface ImageProps extends ContentProps {
  alt: string;
  src: string;
}

interface ButtonProps extends ContentProps {
  onClick?: () => { id: number; advice: string };
}

export const Advice = ({ children, ...restProps }: ContentProps) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Advice.Heading = function AdviceHeading({
  children,
  ...restProps
}: ContentProps) {
  return <Heading {...restProps}>{children}</Heading>;
};

Advice.Body = function AdviceBody({ children, ...restProps }: ContentProps) {
  return <Body {...restProps}>{children}</Body>;
};

Advice.Divider = function AdviceDivider({
  children,
  ...restProps
}: ContentProps) {
  return <Divider {...restProps}>{children}</Divider>;
};

Advice.DividerLine = function AdviceDividerLine({
  children,
  ...restProps
}: ContentProps) {
  return <DividerLine {...restProps}>{children}</DividerLine>;
};

Advice.IconDivider = function AdviceIconDivider({
  src,
  alt,
  children,
  ...restProps
}: ImageProps) {
  return (
    <IconDivider src={src} alt={alt} {...restProps}>
      {children}
    </IconDivider>
  );
};

Advice.Button = function AdviceButton({
  children,
  onClick,
  ...restProps
}: ButtonProps) {
  return (
    <Button onClick={onClick} {...restProps}>
      {children}
    </Button>
  );
};

Advice.ButtonIcon = function AdviceButton({
  src,
  alt,
  children,
  ...restProps
}: ImageProps) {
  return (
    <ButtonIcon src={src} alt={alt} {...restProps}>
      {children}
    </ButtonIcon>
  );
};
