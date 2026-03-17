import { ErrorText, IconContainer, InputContainer, InputText } from './Input.styles';
import { Controller } from 'react-hook-form';

export function Input({ leftIcon, name, control, errorMessage, ...rest }) {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          render={({ field }) => <InputText {...rest} {...field} />}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
}
