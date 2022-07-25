import React from "react";
import cx from "classnames";
import "./Textarea.scss";
import { useField } from "formik";

const Textarea = ({
  title,
  placeholder,
  required,
  onChange,
  type,
  variant,
  variantlabel,
  name,
}) => {
  const [field, meta, helpers] = useField({ name });

  const hasError = !!meta.error && meta.touched;

  return (
    <div className="form-input-wrapper">
      <div className="form-input">
        <textarea
          {...field}
          type={type}
          name={name}
          placeholder={placeholder}
          className={cx(
            "input",
            variant && `input-${variant}`,
            hasError && "input-error"
          )}
          onChange={(e) => {
            const value = e.target.value;
            helpers.setValue(value);
            !!onChange && typeof onChange === "function" && onChange(value);
          }}
          value={field.value}
        />
        <label
          className={cx("label", variantlabel && `label-${variantlabel}`)}
          htmlFor="submit"
        >
          {required && <span className="required">*</span>}
          <span className="label-text">{title}</span>
        </label>
      </div>
      {hasError && <div className="error-text">{meta.error}</div>}
    </div>
  );
};

export default Textarea;
