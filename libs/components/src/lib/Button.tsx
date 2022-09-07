import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ComponentsProps {}

const Btn = styled.button`
  all: unset;
  background-color: hotpink;
  color: white;
  padding: 10px 20px;
  border: 3px solid white;
  border-radius: 10px;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 18px;
  &:hover {
    border: 3px solid limegreen;
  }
`;

export const Button: FC<PropsWithChildren> = (props) => <Btn>{props.children}</Btn>;
