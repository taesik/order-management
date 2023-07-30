import {Customer} from "../graphql/generated/schema";
import * as yup from 'yup';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Form, Formik} from "formik";
import {OmSubmitButton} from "./OmSubmitButton";
interface Props {
    customer:Customer
}
const FORM_VALIDATION = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    contactNumber: yup.string().required("Contact Number is required"),
    email: yup.string().email().required("Email is required"),
    addressLine1: yup.string().required("Address is required"),
    addressLine2: yup.string(),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    country: yup.string().required("Country is required"),
});
export function CustomerForm({customer}:Props) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    
    const INITIAL_FORM_STATE = {
        id:customer.id,
        firstName:customer.firstName || '',
        lastName:customer.lastName || '',
        contactNumber:customer.contactNumber || '',
        email:customer.email || '',
        addressLine1:customer.address?.addressLine1 || '',
        addressLine2:customer.address?.addressLine2 || '',
        city:customer.address?.city || '',
        state:customer.address?.state || '',
        country:customer.address?.country || '',
    }
    
    
    function addOrUpdateCustmerDtl(val:any) {
        
    }
    return (
        <div>
            <div>
                <Formik initialValues={INITIAL_FORM_STATE}
                    validationSchema={FORM_VALIDATION}
                    onSubmit={()=>addOrUpdateCustmerDtl({})}
                >
                    <Form>
                        <div>
                            <div>
                            {/*  TODO:  text field*/}
                                <label htmlFor="firstName">first name</label>
                                <input type="text" name="firstName" id=""/>
                            </div>
                            <div>
                                {/*  TODO:  text field*/}
                                <label htmlFor="lastName">last name</label>
                                <input type="text" name="lastName" id=""/>
                            </div>
                            <div>
                                {/*  TODO:  text field*/}
                                <label htmlFor="email">email</label>
                                <input type="text" name="email" id=""/>
                            </div>
                            <div>
                                {/*  TODO:  text field*/}
                                <label htmlFor="contactNumber">contact number</label>
                                <input type="text" name="contactNumber" id=""/>
                            </div>
                            <div>
                                <h1>Address</h1>
                                
                            </div>
                            <div>
                                {/*  TODO:  text field*/}
                                <label htmlFor="addressLine1">Address Line 1</label>
                                <input type="text" name="addressLine1" id=""/>
                            </div>
                            <div>
                                {/*  TODO:  text field*/}
                                <label htmlFor="addressLine2">Address Line 2</label>
                                <input type="text" name="addressLine2" id=""/>
                            </div>
                            <div>
                                {/*  TODO:  text field*/}
                                <label htmlFor="city">City</label>
                                <input type="text" name="city" id=""/>
                            </div>
                            <div>
                                {/*  TODO:  text field*/}
                                <label htmlFor="state">State</label>
                                <input type="text" name="state" id=""/>
                            </div>
                            <div>
                                {/*  TODO:  text field*/}
                                <label htmlFor="country">Country</label>
                                <input type="text" name="country" id=""/>
                            </div>
                            <div>
                                <OmSubmitButton otherProps={{}}>
                                    {!customer.id ? 'Add new Customer': 'Update Customer'}
                                </OmSubmitButton>
                            </div>
                        </div>
                    </Form>
                </Formik>
                
            </div>
        </div>
    );
}