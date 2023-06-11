import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";
import menuImg from '../../../assets/menu/menu-bg.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'



const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === "dessert");
    const salads = menu.filter(item => item.category === "salad");
    const pizzas = menu.filter(item => item.category === "pizza");
    const soups = menu.filter(item => item.category === "soup");
    const offered = menu.filter(item => item.category === "offered");


    return (
        <div>
            <Helmet>
                <title>Bistro Boss| Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"our menu"} ></Cover>
            {/* main cover */}
            <SectionTitle
                heading={"TODAY'S OFFER"} subHeading={"Don't miss "}
            ></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert menu items */}

            <MenuCategory items={desserts} coverImg={desertImg} title="dessert"
            ></MenuCategory>

            {/* pizza menu items */}

            <MenuCategory items={pizzas} coverImg={pizzaImg} title="pizza"
            ></MenuCategory>

            {/* salad menu items */}
            <MenuCategory items={salads} coverImg={saladImg} title="salad"
            ></MenuCategory>

            {/* soup menu items */}
            <MenuCategory items={soups} coverImg={soupImg} title="soups" ></MenuCategory>

        </div>
    );
};

export default Menu;