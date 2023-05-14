import axios from "axios";
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

const ConsumerSellerSelection = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [productName, setProductName] = useState('');
    const [paymentMode, setPaymentMode] = useState('');
    const [quantity, setQuantity] = useState('');
    const [sellerDetails, setSellerDetails] = useState([]);
    const [sellerEmailId, setSellerEmailId] = useState('');

    useEffect(() => {
        const { ProductName } = location.state;
        const { paymentMode } = location.state;
        const { quantity } = location.state;
        setProductName(ProductName);
        setPaymentMode(paymentMode);
        setQuantity(quantity);
        const emailId = sessionStorage.getItem('Consumer Email');
        getSellerDetails(emailId);
    });

    const getSellerDetails = (emailId) => {
        axios.get('http://localhost:9090/consumer/getsellersbyproductlocality', {
            params: { emailId, productName }
        }).then((response) => {
            const result = response.data;
            console.log(result);
            setSellerDetails(result);
        }).catch((error) => {
            console.log(error);
        });
    }

    const ConfirmOrder = () => {

        if (sellerEmailId != '') {
            axios.post('http://localhost:9090/consumer/placeconfirmorder', {
                consumerEmailId: sessionStorage.getItem('Consumer Email'), sellerEmailId, quantity, paymentMode, productName
            }).then((response) => {
                const result = response.data;
                toast.success("Order Placed Successfully");
                toast.info(<Link to='/consumerHome'>Go to Profile</Link>);
                navigate('/purchaseProduct');
            }).catch((error) => {
                toast.error('Error placing order ! Please try after sometime ');
            });
        } else {
            toast.warning('Please Select Seller near to you');
        }
    }

    return (

        <div className="container-md">
            <div className="card mb-3" style={{ marginTop: 50, marginLeft: 245, width: 780 }}>
                <img src="./images/banner.jpg" className="card-img-top" alt="banner" style={{ height: 300 }} />
                <div className="card-body">
                    <h5 className="card-title">Select Nearby Seller </h5><hr />
                    <div>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Seller Name</th>
                                    <th>Product</th>
                                    <th>Town</th>
                                    <th>District</th>
                                    <th>Pincode</th>
                                    <th>Select</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sellerDetails.map((list) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{list.firstName} {list.lastName}</td>
                                                <td>{productName}</td>
                                                <td>{list.address.town}</td>
                                                <td>{list.address.district}</td>
                                                <td>{list.address.pincode}</td>
                                                <td>
                                                    <div>
                                                        <input type="radio" name="selectSellerEmailId" value={list.emailId} onChange={(event) => setSellerEmailId(event.target.value)} />
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-outline-primary" onClick={ConfirmOrder}>Confirm Place Order</button>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default ConsumerSellerSelection;
