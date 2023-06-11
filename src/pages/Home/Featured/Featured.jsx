import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import featuredImg from '../../../assets/home/featured.jpg'
 import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            heading={"Featured item"}
            subHeading={"Check it out"}
            ></SectionTitle>

            <div className="md:flex justify-content-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36">
            <div>
                <img src={featuredImg} alt="" />
            </div>

                <div className="md:ml-10">
                    <p>March 20, 2023</p>
                    <h3 className="uppercase">WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline mt-4 border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;