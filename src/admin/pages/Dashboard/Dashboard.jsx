"use client";
import React, { useEffect, useState } from 'react';
import GetMethod from '../../../api_calls/get-method/GetMethod';
 


const Dashboard = () => {
     const [page, setPage] = useState(0);
    const [totalusers, setTotausers] = useState(0);
    const [productList, setproductList] = useState([]);
     const [totalProducts, setTotalProducts] = useState(0);
     const [totalOrder, setTotalOrder] = useState(0);



    useEffect(() => {
        handleUserData1();
    }, [page]);

    const handleUserData1 = async () => {

        let url = "users";
    
        // if (page > 0) {
        //     url += "?pageNo=" + parseInt(page);
        // }
    
        const response = await GetMethod(url, "");
    
        const totaluserCount = Math.ceil(response.data.totalUsers);
    
        setTotausers(totaluserCount);
        //  console.log("userlist",response.data)
    //    dispatch(listUsers(response.data.data));

    let url2 = "products";
    let url3 = "order";

    const response2 = await GetMethod(url2, "");
    const response3 = await GetMethod(url3, "");



    // if (page > 0) {
    //     url += "?pageNo=" + parseInt(page);
    // }
    const keysCount = Object.keys(response2.data.data).length;
    const keysCountorder = Object.keys(response3.data.data).length;


 
     setTotalProducts(keysCount);
    setTotalOrder(response3.data.totalOrder);
    // console.log("jitu total products",keysCount,(response3.data.totalOrder))
    // setTotalPages(totalPages);



    }
    return (
        <>
            <section className="mx-auto w-full max-w-7xl py-4 px-3 md:px-0">
                <div className="gap-4 grid md:grid-cols-3 md:space-y-0">
                    <div className="bg-base-100 shadow-xl w-full rounded-md">
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <label className='font-bold'>Total Users</label>
                                <label className='text-3xl font-bold'>{totalusers}</label>
                            </div>
                        </div>
                    </div>
                    <div className="bg-base-100 shadow-xl w-full rounded-md">
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <label className='font-bold'>Total Products</label>
                                <label className='text-3xl font-bold'>{totalProducts}</label>
                            </div>
                        </div>
                    </div>
                    <div className="bg-base-100 shadow-xl w-full rounded-md">
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <label className='font-bold'>Total Orders</label>
                                <label className='text-3xl font-bold'>{totalOrder}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard