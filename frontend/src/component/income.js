import React from "react";
import '../style/income.css'
import {createSearchParams, useNavigate} from "react-router-dom";
function Income(){
    const Navigate = useNavigate();
    function navigatorFunction(fa_code,name){
        Navigate({
            pathname:"/details",
            search:createSearchParams({
                fa_code:fa_code,
                name:name,
                category:"income",

            }).toString(),
        });
    }
    const categories= [
        {
            fa_code:"fa-solid fa-cash-register",
            name:"Salary",
        },
        {
            fa_code: "fa-solid fa-house-lock",
            name: "Rental",
        },
        {
            fa_code: "fa-solid fa-cash-register",
            name: "Lottery",
        },
        {
            fa_code: "fa-solid fa-tag",
            name: "Sale"
        }
    ];
    return(
        <div className="detail">
            <div className="body">
            <div className="top">
                <button className="expense" onClick={()=>Navigate('/expense')}>
                    Expenses
                </button>
                <button className="income" >
                    Income
                </button>
            </div>

            <div className="content">
                {categories.map((item)=>{
                    return(
                    <div className="items" onClick={()=>navigatorFunction(item.fa_code,item.name)}>
                        <span><i className={item.fa_code}></i></span>
                        <span>{item.name}</span>
                    </div>
                    )
                })}

            </div>
            </div>
        </div>
    );
}
export default Income;