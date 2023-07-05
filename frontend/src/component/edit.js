import React, {useState} from "react";
import DatePicker from "react-datepicker";
import {useNavigate, useSearchParams} from "react-router-dom";
import '../style/detail.css';


function Edit(){
    const url="http://127.0.0.1:8000";
    const Navigate= useNavigate();
    const[search_params]=useSearchParams();
    const showDate=search_params.get("date")
    const[startDate,setStartDate]=useState(new Date(showDate));
    const showDesc = search_params.get("name")
    const [description,setDescription]=useState(showDesc)
    const showamt=search_params.get("amount");
    const [amount,setAmount]=useState(showamt);

    const  handle_amount= (e) => {
        setAmount(e.target.value)
    }
    const handle_description = (e)=>{
        setDescription(e.target.value)
    }
    const updateData = ()=>{

            let info={
            date:startDate,
            amount:amount,
            description:description,
        };
        const  id=  search_params.get("id");
        fetch(`${url}/categories/${id}`,{
            method:"PUT",
            headers:{
                'content-type':'Application/json'
            },
            body:JSON.stringify(info),
        })
            .then(()=>Navigate('/'))
            .catch(err=>console.log(err));
    };
    const removeData=()=> {
        let id =search_params.get("id");
        console.log(id);
        fetch(`${url}/catagories/${id}`, {
            method: "DELETE"
        })
            .then(() => Navigate('/'))
            .catch(err => console.error(err));
    }
    return(

        <div className="whole">
            <div className="form">
                <div className="detail_top">
                    <i className= {search_params.get("fa_code")}> </i>
                    <span>{search_params.get("name")}</span>
                </div>
                <div className="setDate">
                    <div>
                        Date
                    </div>
                    <DatePicker selected={startDate} className="showDate" onChange={(date)=>setStartDate(date)}/>
                </div>
                <div className="categories">
                    <label>Category</label>
                </div>
                <div className="setAmount">
                    <div className="amount">Amount</div>
                    <input type="text" placeholder="Enter the amount" value={amount} onChange={handle_amount}/>
                </div>
                <div className="setDescription">
                    <div>Description</div>
                    <input type="text" placeholder="Enter the Expense"  value={description} onChange={handle_description}/>
                </div>
                <div className="footer">
                    <button className="add" onClick={updateData}>Update</button>
                    <button className="add" onClick={removeData}>Delete</button>
                </div>
            </div>
        </div>
    );
}
export default Edit;