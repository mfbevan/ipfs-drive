import {
  FormControl,
  HStack,
  chakra,
  Spacer,
  InputGroup,
  FormHelperText,
  Wrap,
  Button,
  ButtonProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FieldValues, Path, PathValue, UseFormReturn } from "react-hook-form";

import { StyledFormLabel } from "../form-label";

export interface FormOptionItemProps {
  label?: string;
  value: string;
  icon?: JSX.Element;
  isDisabled?: boolean;
}
export interface FormOptionProps<T extends FieldValues> {
  label?: string;
  field: Path<T>;
  form: UseFormReturn<T>;
  required?: boolean;
  helperText?: string;
  infoIcon?: ReactNode;
  options: FormOptionItemProps[];
  optionStyle?: ButtonProps;
}

export const FormOption = <T extends FieldValues>({
  label,
  helperText,
  infoIcon,
  field,
  form,
  required,
  options,
  optionStyle,
}: FormOptionProps<T>) => {
  const currValue = form.watch(field);

  const handleSelect = (value: string) => {
    form.setValue(field, value as PathValue<T, Path<T>>);
  };

  return (
    <FormControl>
      <HStack>
        {label && (
          <StyledFormLabel>
            {label}
            <chakra.span color="red.500">{required && " *"}</chakra.span>
          </StyledFormLabel>
        )}
        <Spacer />
        {infoIcon}
      </HStack>
      <InputGroup>
        <Wrap justify="center">
          {options.map((option) => (
            <Button
              h="80px"
              w="150px"
              gap="10px"
              leftIcon={option.icon}
              flexDirection="column"
              key={option.value}
              onClick={() => handleSelect(option.value)}
              variant={currValue === option.value ? "standard" : "inverseStandard"}
              isDisabled={option.isDisabled}
              {...optionStyle}
            >
              {option.label}
            </Button>
          ))}
        </Wrap>
      </InputGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
