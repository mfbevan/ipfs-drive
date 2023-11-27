import { chakra, Text } from "@chakra-ui/react";
import get from "lodash/get";
import { UseFormReturn } from "react-hook-form";

export interface FormErrorProps {
  form: UseFormReturn<any>;
  field: string;
}

export const FormError = ({
  form: {
    formState: { errors },
  },
  field,
}: FormErrorProps) => (
  <FormErrorMessage>{get(errors, field)?.message?.toString()}</FormErrorMessage>
);

export const FormErrorMessage = chakra(Text, {
  baseStyle: {
    fontSize: "sm",
    color: "red.500",
    textAlign: "right",
  },
});
