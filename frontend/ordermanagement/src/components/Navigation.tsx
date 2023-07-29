import {Link} from "react-router-dom";
import {Button} from "flowbite-react";

 const Navigation = () => {
    return (
        <div className={'sticky top-0 left-0 z-10'}>
            <div className={'max-w-xl'}>
                <div>
                    
                    <div>
                        <Link to={'/'}>Order control system</Link>
                    </div>
                    <div className={'flex'}>
                        <Button  key={'Customers'}>
                            <Link to={'/customers'}>Customers</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navigation;