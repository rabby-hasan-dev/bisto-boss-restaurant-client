import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items,coverImg,title }) => {
    return (
        <div className="py-8">
            {
                title &&<Cover img={coverImg} title={title} ></Cover>
            }

            <div className="grid md:grid-cols-2 gap-10 mt-16">

                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="md:w-3/12 mx-auto text-center mt-16">
                <button className="btn btn-outline border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>

    );
};

export default MenuCategory;