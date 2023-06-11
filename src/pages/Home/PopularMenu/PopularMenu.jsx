import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu,setMenu]=useState([])
    
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems=data.filter(item=>item.category==="popular");
            setMenu(popularItems);
        })
    },[])
    return (
        <section className="mb-12">
            <SectionTitle
            subHeading={"Check it out"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {menu.map(item=> <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)}
            </div>
            <div className="md:w-3/12 mx-auto text-center mt-16">
                <button className="btn btn-outline border-0 border-b-4">View full menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;