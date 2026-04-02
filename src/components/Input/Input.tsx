import { ErrorText, IconContainer, InputContainer, InputText } from './Input.styles.js';
import { Controller } from 'react-hook-form';
import type { InputProps } from './types.ts';

export function Input({ leftIcon, name, control, errorMessage, ...rest }: InputProps) {
  const getAutoComplete = () => {
    if (name === 'email') return 'email';
    if (name === 'password') return 'current-password';
    return 'off';
  };

  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field: {value, onChange} }) => (
            <InputText 
              value={value} 
              onChange={onChange} 
              autoComplete={getAutoComplete()}
              spellCheck="false"
              {...rest} 
            />
          )}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
}
