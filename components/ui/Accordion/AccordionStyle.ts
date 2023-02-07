import { css, keyframes } from '@emotion/react'

const breakpoint = "420px"

export const rootStyle = css`
  max-width: 800px;
  margin: 0 auto;
`

export const itemStyle = css`
  text-align: left;
  border-radius: 12px;
  overflow: hidden;
  border: solid 1px #b8c4cc;

  &:focus-within {
    border: solid 1px #222;
  }
`

export const triggerStyle = css`
  padding: 15px 25px;
  width: 100%;
  border: none;
  background-color: #fff;
  font-size: 19px;
  text-align: left;
  display: flex;
  justify-content: space-between;

  @media(max-width: ${breakpoint}) {
    padding: 15px 15px;
  }

  &:hover {
    cursor: pointer;
    background-color: #f7fbfc;
  }
  &[data-state='open'] > svg {
    transform: rotate(180deg);
  }
  &> svg {
    transition: transform 250ms cubic-bezier(0.8, 0, 0.2, 1);
  }
`

const slideDown = keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`

const slideUp = keyframes`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const disappear = keyframes`
   rom {
    opacity: 1;
   }
  to {
    opacity: 0;
  }
 `

export const contentStyle = css`
  background-color: #fff;
  overflow-wrap: break-word;
  font-size: 16px;
  &[data-state='open'] {
    animation: ${slideDown} 250ms cubic-bezier(0.75, 0, 0.25, 1);
  }
  &[data-state='closed'] {
    animation: ${slideUp} 250ms cubic-bezier(0.25, 0, 0.75, 1);
  }
  &[data-state='open'] > div {
    animation: ${appear} 250ms cubic-bezier(0.75, 0, 0.25, 1);
  }
  &[data-state='closed'] > div {
    animation: ${disappear} 250ms cubic-bezier(0.25, 0, 0.75, 1);
  }
`

export const contentInsetStyle = css`
  padding: 0 25px;

    @media(max-width: ${breakpoint}) {
    padding: 0 15px;
  }
`
