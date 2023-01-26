//Parts
import { Link } from "react-router-dom";
import ButtonMUI from "@mui/material/Button"

export function Button(props) {
    const {
        disabled, type, children, to, variant
    } = props;
    return (
        <ButtonMUI disabled={disabled} type={type} variant={variant}>
            {
                to 
                    ? <Link to={to}>{children}</Link>
                    : children
            }
        </ButtonMUI>
    )
}

Button.defaultProps = {
    variant: "contained",
}