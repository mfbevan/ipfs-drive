import {
  chakra,
  Select,
  FormControl,
  FormLabel,
  ChakraStyledOptions,
  Spacer,
  HStack,
  SelectProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface FormSelectProps extends SelectProps {
  label?: string;
  options: string[];
  disabledOptions?: string[];
  defaultValue?: string;
  infoIcon?: ReactNode;
  register?: UseFormRegisterReturn<string>;
  required?: boolean;
  value?: string;
  setValue?: (value: string) => void;
}

export const FormSelect = ({
  label,
  options,
  disabledOptions,
  defaultValue,
  infoIcon,
  register,
  required,
  value,
  setValue,
  ...props
}: FormSelectProps & ChakraStyledOptions) => (
  <FormControl>
    {label && (
      <HStack>
        <StyledFormLabel>
          {label}
          {required && " *"}
        </StyledFormLabel>
        <Spacer />
        {infoIcon}
      </HStack>
    )}
    <Select
      rounded="md"
      bg="inputArea"
      borderColor="border"
      {...props}
      {...register}
      defaultValue={defaultValue}
      value={value}
      onChange={(e) => setValue && setValue(e.target.value)}
    >
      {options.map((o) => (
        <option key={o} disabled={disabledOptions && disabledOptions.includes(o)}>
          {o}
        </option>
      ))}
    </Select>
  </FormControl>
);

const StyledFormLabel = chakra(FormLabel, {
  baseStyle: {
    fontSize: "0.7rem",
    mb: "4px",
    ml: "2px",
  },
});
