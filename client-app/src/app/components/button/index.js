import styled, { css } from "styled-components";
const cssPrimary = css`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.textColorDisabled : theme.colors.mainColor};
  border: 1px solid
    ${({ theme, disabled }) =>
      disabled ? theme.colors.textColorDisabled : theme.colors.mainColor};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.textColorLight : theme.colors.textColorContrast};
  box-shadow: ${({ disabled }) =>
    disabled ? "none" : "0px 4px 16px rgba(255, 85, 51, 0.2)"};
`;
const cssSecondary = css`
  background-color: ${({ theme }) => theme.colors.mainColorContrast};
  border: 2px solid
    ${({ theme, disabled }) =>
      disabled ? theme.colors.textColorDisabled : theme.colors.mainColor};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.textColorDisabled : theme.colors.mainColor};
  box-shadow: ${({ disabled }) =>
    disabled ? "none" : "0px 4px 16px rgba(255, 85, 51, 0.2)"};
`;
const cssTertiary = css`
  background-color: transparent;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.textColorDisabled : theme.colors.mainColor};
  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.mainColorLight};
  }
  &:focus {
    background-color: ${({ theme }) => theme.colors.mainColorLight};
  }
`;
const ButtonStyled = styled.button`
  position: relative;
  border-radius: 8px;
  outline: none;
  padding: 7px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  ${({ btnType }) =>
    (btnType === "primary" && cssPrimary) ||
    (btnType === "secondary" && cssSecondary) ||
    (btnType === "tertiary" && cssTertiary)};
`;
export default ButtonStyled;
