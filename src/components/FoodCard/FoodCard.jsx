
const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
   
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="food-Image" /></figure>
                <p className=" absolute right-0 bg-slate-900 text-white mr-4 mt-4">${price}</p>
                <div className="card-body flex flex-col items-center ">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions ">
                        <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;