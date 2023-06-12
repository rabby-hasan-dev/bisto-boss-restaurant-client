import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import orderCover from '../../../assets/order/order-bg.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

// to do pagination implement here?

const Order = () => {
    const categories = ["salad", "pizza", "soups", "dessert", "drinks"];
    const { category } = useParams();

    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
 
    const dessert = menu.filter(item => item.category === "dessert");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const soups = menu.filter(item => item.category === "soup");

    const drinks = menu.filter(item => item.category === "drinks");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss| Order</title>   
            </Helmet>
            <Cover title="Order Food" img={orderCover}></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad} ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza} ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soups} ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert} ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks} ></OrderTab>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Order;