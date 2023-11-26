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
  <div className="form-control w-full max-w-xs">
    <label className="label">
      {topLeftLabel && <span className="label-text">{topLeftLabel}</span>}
      {topRightLabel && <span className="label-text-alt">{topRightLabel}</span>}
    </label>
    <div className="flex gap-2">
      <input {...props} {...register} />
      {actionButton}
    </div>
    <label className="label">
      {bottomLeftLabel && (
        <span className="label-text-alt">{bottomLeftLabel}</span>
      )}
      {bottomRightLabel && (
        <span className="label-text-alt">{bottomRightLabel}</span>
      )}
    </label>
  </div>
);
