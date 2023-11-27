import { FileType } from "lib";
import { useRef, useState, ChangeEventHandler, DragEventHandler } from "react";
import { UseFormReturn } from "react-hook-form";
import { toast } from "react-toastify";

/**
 * File Selector Hook to abstract the logic of the FileSelect component
 * @param field The name of the field in the form
 * @param allowMultiple Whether or not to allow multiple files
 * @param form The useForm hook from react-hook-form
 * @param fileTypes The allowed file types
 */
export const useFileSelect = ({
  field,
  allowMultiple,
  form: { setValue, watch, getValues },
  fileTypes,
}: {
  field: string;
  allowMultiple: boolean;
  form: UseFormReturn<any>;
  fileTypes: FileType[];
}) => {
  /**
   * Input Ref for the input field to allow manual triggering of the input file select actions
   */
  const inputRef = useRef<HTMLInputElement>(null);
  /**
   * Id of the input field to allow for targeting
   */
  const fieldId = `file-upload-${field}`;

  /**
   * Sets the current form files to the @param files
   * @param files The files to set
   */
  const updateFiles = (files: FileList | null) => {
    const existingFiles = (getValues(field) ?? []) as File[];

    if (!files || !files.length) {
      toast.error("No files received");
      return;
    }
    if (!allowMultiple && (files.length > 1 || existingFiles.length > 0)) {
      toast.error("Expected a single file, but received multiple");
      return;
    }

    const newFiles = Array.from(files).filter(
      (file) =>
        fileTypes.includes(file.type as FileType) &&
        !existingFiles.some((existingFile) => existingFile.name === file.name)
    );
    const allFiles = [...existingFiles, ...newFiles];

    setValue(field, Array.from(allFiles));
  };

  /**
   * Handle the change event for the input field
   */
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.target;
    updateFiles(files);
  };

  const [drag, setDrag] = useState(false);

  /**
   * Handle the drag over event for the Input Container
   */
  const handleDragOver: DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  /**
   * Handle the drag leave event for the Input Container
   */
  const handleDragLeave: DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  /**
   * Handle the click event for the Input Container. Triggers the input selector to open
   */
  const handleClick = () => {
    inputRef.current?.click();
  };

  /**
   * Handle the file drop event for the Input Container
   */
  const handleDrop: DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
    const { files } = e.dataTransfer;
    updateFiles(files);
  };

  /**
   * The currently selected files
   */
  const selectedFiles = watch(field) as File[];

  /**
   * Remove an individual file from the selected files
   * @param index The index of the file to remove
   */
  const removeFileAtIndex = (index: number) => {
    const filteredFiles = selectedFiles.filter((_, i) => i !== index);
    setValue(field, filteredFiles);
  };

  /**
   * Clear all files from the selector
   */
  const clearFiles = () => {
    setValue(field, []);
  };

  return {
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
    clearFiles,
    updateFiles,
  };
};
