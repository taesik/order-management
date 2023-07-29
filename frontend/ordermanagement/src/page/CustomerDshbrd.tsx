import {useGetCustomersQuery} from "../graphql/generated/schema";

const CustomerDshbrd = () => {
    const {data:customersData, loading, error} 
        = useGetCustomersQuery();
    if (loading) {
        return <div>Loading...</div>
    }
    if (error || !customersData) {
        return <div>Error</div>
    }
    
    return (
        <div>
            <h2>Customers</h2>
            <ul>
                {
                    customersData.customers?.map(customer => (
                        <li key={customer.id}>{customer.firstName}</li>
                    ))
                }
            </ul>
        </div>
    );
};
 export default CustomerDshbrd;