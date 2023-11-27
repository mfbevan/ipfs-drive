import {
  FormControl,
  FormHelperText,
  chakra,
  ChakraStyledOptions,
  Spacer,
  HStack,
  Switch,
  SwitchProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { StyledFormLabel } from "../form-label";

export interface FormToggleProps extends SwitchProps, ChakraStyledOptions {
  label?: string;
  infoIcon?: ReactNode;
  helperText?: string;
  required?: boolean;
  register?: UseFormRegisterReturn<string>;
}

export const FormToggle = ({
  label,
  infoIcon,
  helperText,
  required,
  register,
  ...props
}: FormToggleProps) => (
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
    <Switch rounded="md" colorScheme="accent" {...props} {...register} required={required} />
    <FormHelperText>{helperText}</FormHelperText>
  </FormControl>
);
