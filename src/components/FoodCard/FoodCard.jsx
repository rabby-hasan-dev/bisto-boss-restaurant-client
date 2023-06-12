import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { _id, name, image, price, recipe } = item;
    const { user } = useContext(AuthContext);
    const handleAddToCart = (item) => {
        

        if (user && user?.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }

            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res =>res.json())
                .then(data => {
                    if (data.insertedId) {

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food Added On the Cart ',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        console.log(data)
                    }

                })
        }

        else {
            Swal.fire({
                title: 'Please Login now?',
                text: "User Login successfully!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="food-Image" /></figure>
                <p className=" absolute right-0 bg-slate-900 text-white mr-4 mt-4">${price}</p>
                <div className="card-body flex flex-col items-center ">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions ">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;