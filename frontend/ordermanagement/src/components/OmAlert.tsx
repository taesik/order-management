import {Alert} from "flowbite-react";

interface Props {
    title:string;
    message:string;
    status:string; //success, failure ,info, warning
}
export  default function OmAlert({title,message,status}:Props) {
    return (
        <div className={'flex'}>
            <Alert color={status}>
              <span>
                <p>
                  <span className="font-medium">
                   {title}
                  </span>
                    {message}
                </p>
              </span>
            </Alert>
        </div>
    );
}