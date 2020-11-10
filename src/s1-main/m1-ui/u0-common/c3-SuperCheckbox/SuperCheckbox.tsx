import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./SuperCheckbox.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
};

export const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type,
        onChange,
        onChangeChecked,
        className,
        spanClassName,
        children,

        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);

        onChangeChecked && onChangeChecked(e.currentTarget.checked)
    }

    const finalInputClassName = `${s.checkbox} ${className ? className : ""}`;

    return (
        <label className={finalInputClassName}>
            <input
                type={"checkbox"}
                onChange={onChangeCallback}
                // className={finalInputClassName}

                {...restProps}
            />
            <span className={s.check}></span>
            {children && <span className={s.spanClassName}>{children}</span>}
        </label>
    );
}
