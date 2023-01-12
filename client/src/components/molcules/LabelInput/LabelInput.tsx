import React from 'react';
import { Input, InputContainer, Label } from './styles';

interface ILabelInput {
  id: string;
  label: string;
  type: string;
  isValue: boolean;
  isFocus: boolean;
  value: string;
  handleFocus: (e: React.FocusEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent) => void;
}

export const LabelInput = ({
  id,
  label,
  type,
  isFocus,
  isValue,
  value,
  handleFocus,
  handleChange,
  handleBlur,
}: ILabelInput) => {
  return (
    <InputContainer>
      <Label isValue={isValue}>{label}</Label>
      <Input
        id={id}
        value={value}
        onFocus={handleFocus}
        isFocus={isFocus}
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </InputContainer>
  );
};
