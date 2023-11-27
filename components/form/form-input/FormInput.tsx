import {
  FormControl,
  Input,
  FormHelperText,
  chakra,
  InputAddonProps,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  ChakraStyledOptions,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { StyledFormLabel } from "../form-label";

export interface FormInputProps extends InputAddonProps, ChakraStyledOptions {
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  infoIcon?: ReactNode;
  helperText?: string;
  required?: boolean;
  register?: UseFormRegisterReturn<string>;
}

/**
 * Styled and abstracted form input component.
 */
export const FormInput = ({
  label,
  type = "text",
  helperText,
  leftAddon,
  rightAddon,
  infoIcon,
  register,
  required,
  isDisabled,
  ...props
}: FormInputProps) => (
  <FormControl>
    <Flex>
      {label && (
        <StyledFormLabel>
          {label}
          <chakra.span color="red.500">{required && " *"}</chakra.span>
        </StyledFormLabel>
      )}
      <Spacer />
      {infoIcon}
    </Flex>
    <InputGroup {...props} size={props.size ?? "md"}>
      {leftAddon && <InputLeftAddon>{leftAddon}</InputLeftAddon>}
      <Input
        type={type}
        rounded="md"
        bg="inputArea"
        borderColor="border"
        {...props}
        {...register}
        required={required}
        isDisabled={isDisabled}
      />
      {rightAddon && <InputRightAddon>{rightAddon}</InputRightAddon>}
    </InputGroup>
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormControl>
);
