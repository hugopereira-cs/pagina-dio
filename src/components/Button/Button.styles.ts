import styled, { css } from 'styled-components';
import type { ButtonContainerStyles } from './types';

export const ButtonContainer = styled.button<ButtonContainerStyles>`
  background: #565656;
  border-radius: 22px;
  position: relative;
  color: #fff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;

  ${({ $variant }) =>
    $variant !== 'primary' &&
    css`
      min-width: 167px;
      height: 33px;
      background: #e4105d;
      color: #1e192c;
      transition: transform 0.5s ease;

      &:hover {
        opacity: 0.8;
        cursor: pointer;
        transform: scale(1.01);
      }

      &::after {
        content: '';
        position: absolute;
        border: 1px solid #e4105d;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }
    `}
`;
