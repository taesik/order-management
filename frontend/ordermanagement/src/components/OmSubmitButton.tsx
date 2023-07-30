import { useFormikContext} from "formik";
import {Button} from "flowbite-react";

interface Props {
    children: any,
    otherProps:any
}

export function OmSubmitButton({children,otherProps}:Props) {
    const {submitForm} = useFormikContext();
    
    function handleSubmit() {
        submitForm();
    }
    
    const configButton = {
        ...otherProps,
        color: 'primary',
        variant: 'contained',
        fullWidth: true,
        onClick: handleSubmit
    }
    
    return (
        <Button {...configButton}>
            {children}
        </Button>
    );
}