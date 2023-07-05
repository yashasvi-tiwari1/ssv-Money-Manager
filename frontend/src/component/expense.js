import React from "react";
import '../style/income.css'
import {createSearchParams,  useNavigate} from "react-router-dom";

function Expense(){
    const Navigate = useNavigate();
    function navigatorFunction(fa_code,name){
        Navigate({
            pathname:'/details',
            search:createSearchParams({
                fa_code:fa_code,
                name:name,
                category:"expense",
            }).toString(),
        });
    }
    const expenses = [
        {
            fa_code:"fa-solid fa-utensils",
            name: "Foods"
        },
        {
            fa_code: "fa-solid fa-money-bill",
            name: "Bills"
        },
        {
            fa_code: "fa-sharp fa-solid fa-person-dress",
            name:"Clothes"
        },
        {
            fa_code: "fa-solid fa-taxi",
            name:"Transportation"
        }

    ];

    return(
        <div className="detail">
            <div className="body">
            <div className="top">
                <button className="eexpense">
                    Expenses <i className="fa-regular fa-face-sad-cry"></i>
                </button>
                <button className="eincome"  onClick={()=>Navigate('/income')}>
                    Income <i className="fa-solid fa-brain"></i>
                </button>
            </div>

            <div className="content">
                {expenses.map((itemss)=>{
                    return(

                        <div className="items" onClick={()=>navigatorFunction(itemss.fa_code,itemss.name)}>
                            <span><i className={itemss.fa_code}></i></span>
                            <span>{itemss.name}</span>
                        </div>
                        );
                })}

            </div>
            </div>
        </div>
    );
}
export default Expense;