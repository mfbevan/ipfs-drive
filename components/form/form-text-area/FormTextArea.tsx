import {
  FormControl,
  FormHelperText,
  chakra,
  InputGroup,
  ChakraStyledOptions,
  Spacer,
  HStack,
  Textarea,
  TextareaProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { StyledFormLabel } from "../form-label";

export interface FormTextAreaProps extends TextareaProps, ChakraStyledOptions {
  label?: string;
  infoIcon?: ReactNode;
  helperText?: string;
  required?: boolean;
  register: UseFormRegisterReturn<string>;
}

/**
 * Styled and abstracted form text area component.
 */
export const FormTextArea = ({
  label,
  helperText,
  infoIcon,
  required,
  register,
  ...props
}: FormTextAreaProps) => (
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
    <InputGroup size={props.size ?? "md"}>
      <Textarea
        rounded="md"
        bg="inputArea"
        borderColor="border"
        required={required}
        {...register}
        {...props}
      />
    </InputGroup>
    <FormHelperText>{helperText}</FormHelperText>
  </FormControl>
);
