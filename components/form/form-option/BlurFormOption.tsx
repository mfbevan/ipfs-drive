import {
  FormControl,
  HStack,
  chakra,
  Spacer,
  InputGroup,
  FormHelperText,
  Button,
  ButtonProps,
  Flex,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";

import { StyledFormLabel } from "../form-label";

export interface BlurFormOptionItemProps {
  label?: string;
  value: string;
  icon?: JSX.Element;
  isDisabled?: boolean;
}
export interface BlurFormOptionProps {
  label?: string;
  field: string;
  required?: boolean;
  helperText?: string;
  infoIcon?: ReactNode;
  options: BlurFormOptionItemProps[];
  optionStyle?: ButtonProps;
  onBlur?: (key: string, value: string) => void;
  defaultValue?: string;
}

export const BlurFormOption = ({
  label,
  helperText,
  infoIcon,
  field,
  required,
  options,
  optionStyle,
  onBlur,
  defaultValue,
}: BlurFormOptionProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleSelect = (newValue: string) => {
    setValue(newValue);
    if (onBlur) onBlur(field, newValue);
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
        <Flex justifyContent="space-evenly" gap="10px">
          {options.map((option) => (
            <Button
              size="xs"
              gap="10px"
              leftIcon={option.icon}
              flexDirection="column"
              key={option.value}
              onClick={() => handleSelect(option.value)}
              variant={value === option.value ? "standard" : "inverseStandard"}
              isDisabled={option.isDisabled}
              {...optionStyle}
            >
              {option.label}
            </Button>
          ))}
        </Flex>
      </InputGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
