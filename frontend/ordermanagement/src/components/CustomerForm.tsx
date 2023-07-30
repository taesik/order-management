import { Customer} from "../graphql/generated/schema";
import * as yup from 'yup';
import {useEffect, useState} from "react";
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
        id:customer?.id || 9,
        firstName:customer?.firstName || '',
        lastName:customer?.lastName || '',
        contactNumber:customer?.contactNumber || '',
        email:customer?.email || '',
        addressLine1:customer?.address?.addressLine1 || '',
        addressLine2:customer?.address?.addressLine2 || '',
        city:customer?.address?.city || '',
        state:customer?.address?.state || '',
        country:customer?.address?.country || '',
    }
    const [detail , setDetail] = useState(customer );
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    function addOrUpdateCustmerDtl(val:any) {
        console.log(val)
    }
    function changeHandler(e:any) {
        setDetail({
            ...detail,
            [e.target.name]:e.target.value,
        })
    }

    useEffect(() => {
        console.log('detail',detail)
        return () => {
            
        };
    }, [detail]);
    
    return (
        <div>
            <div>
                <Formik initialValues={INITIAL_FORM_STATE}
                    validationSchema={FORM_VALIDATION}
                    onSubmit={()=>addOrUpdateCustmerDtl('')}
                >
                    <Form>
                        <div>
                            <div>
                            {/*  TODO:  text field*/}
                                <label htmlFor="firstName">first name</label>
                                <input value={detail?.firstName} onChange={(e)=>{
                                    changeHandler(e);
                                }} type="text" name="firstName" id="firstName"/>
                            </div>
                            <div>
                                {/*  TODO:  text field*/}
                                <label htmlFor="lastName">last name</label>
                                <input type="text" value={detail?.lastName} onChange={e=>{
                                    changeHandler(e)
                                }} name="lastName" id="lastName"/>
                            </div>
                            <div>
                                {/*  TODO:  text field*/}
                                <label htmlFor="email">email</label>
                                <input value={detail?.email} onChange={e=>{
                                    changeHandler(e)
                                }} type="text" name="email" id="email"/>
                            </div>
                            <div>
                                {/*  TODO:  text field*/}
                                <label htmlFor="contactNumber">contact number</label>
                                <input value={detail?.contactNumber} onChange={e=>{
                                    changeHandler(e)
                                }} type="text" name="contactNumber" id="contactNumber"/>
                            </div>
                            <div>
                                <h1>Address</h1>
                                
                            </div>
                            <div>
                                {/*  TODO:  text field*/}
                                <label htmlFor="addressLine1">Address Line 1</label>
                                <input value={address1} onChange={e=> {
                                    setAddress1(e.target.value);
                                }}  type="text" name="addressLine1" id="addressLine1"/>
                            </div>
                            <div>
                                {/*  TODO:  text field*/}
                                <label htmlFor="addressLine2">Address Line 2</label>
                                <input value={address2} onChange={(e) => {
                                    setAddress2(e.target.value)
                                }} type="text" name="addressLine2" id="addressLine2"/>
                            </div>
                            <div>
                                {/*  TODO:  text field*/}
                                <label htmlFor="city">City</label>
                                <input value={city} onChange={e=>setCity(e.target.value)}
                                       type="text" name="city" id="city"/>
                            </div>
                            <div>
                                {/*  TODO:  text field*/}
                                <label htmlFor="state">State</label>
                                <input value={state} onChange={e=>setState(e.target.value)}
                                       type="text" name="state" id="state"/>
                            </div>
                            <div>
                                {/*  TODO:  text field*/}
                                <label htmlFor="country">Country</label>
                                <input value={country} onChange={e=>setCountry(e.target.value)}
                                       type="text" name="country" id="country"/>
                            </div>
                            <div>
                                <OmSubmitButton otherProps={{}}>
                                    {!customer?.id ? 'Add new Customer': 'Update Customer'}
                                </OmSubmitButton>
                            </div>
                        </div>
                    </Form>
                </Formik>
                
            </div>
        </div>
    );
}