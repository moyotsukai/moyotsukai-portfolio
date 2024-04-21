import React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import * as s from "./AccordionStyle"
import ArrowIcon from "../../icons/ArrowIcon"
import Divider from "../Divider"
import Spacer from "../Spacer"

type RootProps = {
  type: "single" | "multiple"
  children: React.ReactNode
}

export const Root: React.FC<RootProps> = ({ type, children, ...props }) => (
  <AccordionPrimitive.Root
    type={type}
    {...props}
    css={s.rootStyle}
  >
    {children}
  </AccordionPrimitive.Root>
)

type ItemProps = {
  value: string
  children: React.ReactNode
}

export const Item: React.FC<ItemProps> = ({ value, children, ...props }) => (
  <AccordionPrimitive.Item
    value={value}
    {...props}
    css={s.itemStyle}
  >
    {children}
  </AccordionPrimitive.Item>
)

type HeaderProps = {
  children: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({ children, ...props }) => (
  <AccordionPrimitive.Header {...props}>{children}</AccordionPrimitive.Header>
)

type TriggerProps = {
  children: React.ReactNode
}

export const Trigger: React.FC<TriggerProps> = ({ children, ...props }) => (
  <Header>
    <AccordionPrimitive.Trigger
      {...props}
      css={s.triggerStyle}
    >
      {children}
      <ArrowIcon />
    </AccordionPrimitive.Trigger>
  </Header>
)

type ContentProps = {
  children: React.ReactNode
}

export const Content: React.FC<ContentProps> = ({ children, ...props }) => (
  <AccordionPrimitive.Content
    {...props}
    css={s.contentStyle}
  >
    <div css={s.contentInsetStyle}>
      <Divider />
      <Spacer size={15} />
      {children}
      <Spacer size={15} />
    </div>
  </AccordionPrimitive.Content>
)
