import {
  Button,
  chakra,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Spacer,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";

import { StyledFormLabel } from "../form-label";

import { SelectedFile } from "./SelectedFile";
import { useFileSelect } from "./use-file-select";

import { FileType } from "@/lib";

export interface FileSelectProps {
  field: string;
  form: UseFormReturn<any>;
  allowMultiple?: boolean;
  fileTypes: FileType[];
  required?: boolean;
  label?: string;
  infoIcon?: ReactNode;
}

export const FileSelect = ({
  fileTypes,
  field,
  form,
  allowMultiple = false,
  required = false,
  label,
  infoIcon,
}: FileSelectProps) => {
  const {
    inputRef,
    fieldId,
    drag,
    selectedFiles,
    handleChange,
    handleClick,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    removeFileAtIndex,
  } = useFileSelect({ field, allowMultiple, form, fileTypes });

  const hideSelect =
    !allowMultiple && selectedFiles && selectedFiles.length > 0;

  return (
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
      <InputGroup>
        <FileSelectContainer>
          <ExistingFilesContainer>
            {selectedFiles &&
              selectedFiles.map((file, index) => (
                <WrapItem key={file.name}>
                  <SelectedFile
                    file={file}
                    onRemove={() => removeFileAtIndex(index)}
                  />
                </WrapItem>
              ))}
          </ExistingFilesContainer>
          {!hideSelect && (
            <UploadBoundary
              htmlFor={fieldId}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              bg="inputArea"
              border={drag ? "1px dashed" : "1px solid"}
              borderColor={drag ? "accent.300" : "border"}
            >
              <ButtonContainer>
                <StyledLabel>Drag & Drop</StyledLabel>
                <StyledLabel fontSize="xs" pb="10px">
                  or
                </StyledLabel>

                <Button size="sm" colorScheme="accent" onClick={handleClick}>
                  {allowMultiple ? "Choose Files" : "Choose File"}
                </Button>
              </ButtonContainer>
              <Input
                id={fieldId}
                ref={inputRef}
                hidden
                border="1px solid red"
                accept={fileTypes.toString()}
                rounded="full"
                type="file"
                required={required}
                onChange={handleChange}
                multiple={allowMultiple}
              />
            </UploadBoundary>
          )}
        </FileSelectContainer>
      </InputGroup>
    </FormControl>
  );
};

const ExistingFilesContainer = chakra(Wrap, {
  baseStyle: {},
});

const FileSelectContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    w: "full",
    gap: "5px",
  },
});

const UploadBoundary = chakra(FormLabel, {
  baseStyle: {
    rounded: "md",
    textAlign: "center",
    w: "full",
    p: "20px",
    boxShadow: "inner",
  },
});

const ButtonContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    alignItems: "center",
  },
});

const StyledLabel = chakra(Text, {
  baseStyle: {
    textAlign: "center",
  },
});
