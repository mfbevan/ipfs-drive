import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface FormInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  topLeftLabel?: string;
  topRightLabel?: string;
  bottomLeftLabel?: string;
  bottomRightLabel?: string;
  actionButton?: React.ReactNode;
  register?: UseFormRegisterReturn;
}

export const FormInput = ({
  topLeftLabel,
  topRightLabel,
  bottomLeftLabel,
  bottomRightLabel,
  actionButton,
  register,
  ...props
}: FormInputProps) => (
  <div className="form-control w-full ">
    <label className="label pt-0 pb-1">
      {topLeftLabel && (
        <span className="label-text text-xs">{topLeftLabel}</span>
      )}
      {topRightLabel && <span className="label-text-alt">{topRightLabel}</span>}
    </label>
    <div className="flex gap-2">
      <input {...props} {...register} />
      {actionButton}
    </div>
    <label className="label pt-1 pb-0">
      {bottomLeftLabel && (
        <span className="label-text-alt text-red-500">{bottomLeftLabel}</span>
      )}
      {bottomRightLabel && (
        <span className="label-text-alt">{bottomRightLabel}</span>
      )}
    </label>
  </div>
);
