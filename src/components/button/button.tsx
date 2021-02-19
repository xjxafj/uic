import React, { FC } from 'react';
import classNames from 'classnames';
type ButtonSize="lg"|"sm";
type ButtonType="primary"|"default"|"danger"|"link";
interface ButtonProps{
    btnType?: ButtonType;
    size?: ButtonSize;
    className?: string;
    disabled?: boolean;
    href?: string;
    children?: React.ReactNode;
}

const Button: FC<ButtonProps>=(props)=>{
    const { btnType,className,children,size,disabled,href}=props;
    // btn btn-lg btn-primary
    const classes= classNames('btn',{
      [`btn-${btnType}`]:btnType,
      [`btn-${size}`]:size,
      ['disabled']:(btnType==='link'&& disabled)
    });
    if(btnType==='link'&& href){
        return(
            <a className={classes} href={href}>{children}</a>
        )
    }
    else{
        return(
            <button className={classes} disabled={disabled}>{children}</button>
        )
    };
}

Button.defaultProps = {
    disabled: false,
    btnType: "default",
    children:""

}

export default Button;
// export default null;