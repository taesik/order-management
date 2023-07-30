import {Spinner} from "flowbite-react";

export default function OmLoading() {
    return (
        <div className={'flex'}>
           <Spinner aria-label={'Default status example'}/>
        </div>
    );
}