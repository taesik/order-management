import {useField, useFormikContext} from "formik";

interface Props {
    name:string;
    label:string;
    legend:string;
    otherProps:any;
}
export function OmCheckBox({legend,otherProps,label,name}:Props) {
    const {setFieldValue} = useFormikContext();
    const [field,meta] = useField(name);
    
    function handleChange(event:any) {
        const {checked} = event.target
        setFieldValue(name, checked);
    }
    
    const configCheckBox = {
        ...field,
        ...otherProps,
        onChange: handleChange,
        checked: meta.value,
    }
    
    const configFormControl:any = {};
    if (meta && meta.touched && meta.error) {
        configFormControl.error = true;
        configFormControl.helperText = meta.error;
    }
    
    
    
    return (
        <>
        </>
    );
}