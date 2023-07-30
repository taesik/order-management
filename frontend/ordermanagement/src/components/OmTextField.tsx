import {useField} from "formik";

interface Props {
    name:string;
    otherProps:any;
}

export default function OmTextField({name,otherProps}:Props) {
    const [field,meta] = useField(name);
    
    const configTextField = {
        ...field,
        ...otherProps,
        variant: 'outlined',
    }
    
    if (meta && meta.touched && meta.error) {
        configTextField.error = true;
        configTextField.helperText = meta.error;
        
    }
    
    return (
        <div></div>
    );
}