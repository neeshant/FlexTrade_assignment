import React, { useEffect } from "react";
import { Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { SetProducts } from "../redux/actions/ProductAction";
import Users from "./Card";

const CardList = () => {
    const data = useSelector((state) => state.allProducts.products);
  
    const dispatch = useDispatch();
    async function fetchDataAPI(){
        var current_data = await fetch('https://jsonplaceholder.typicode.com/users').then((data) => data.json());
        console.log("currentdata",current_data);
        dispatch(SetProducts(current_data));
    };
    
    useEffect(() => {
        fetchDataAPI();
        }, []);

    const renderUsers = data.map((users) => {
        return (
            <Col xs={24} sm={24} lg={8} xl={6} key={users.id}>
                <Users id={users.id} name={users.name} email={users.email} phone={users.phone} website={users.website} />
            </Col>
        );
    });
    return (<Row>{renderUsers}</Row>)
}

export default CardList;