import React, {useCallback, useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import '../style/detail.css';
import {useNavigate, useSearchParams} from "react-router-dom";


function Details(){
    let url='http://localhost:8000';
    const[amount,setAmount] = useState("");
    const[search_params] =useSearchParams();
    let initialdesc =search_params.get("name");
    const [description,setDescription] = useState(initialdesc);
    const Navigate = useNavigate();
    const[startDate,setStartDate] = useState(new Date());

    const handle_amount = (e) =>{
        setAmount(e.target.value)
    }
    const handle_description = (e)=>{
        setDescription(e.target.value)
    }
    function postData(){
        // let Description = description.charAt(0).toUpperCase()+description.slice(1);
        let info={
            date:startDate,
            amount:amount,
            description:description,
            name:search_params.get("name"),
            category:search_params.get("category"),
            fa_code:search_params.get("fa_code"),
        };
        fetch(`${url}/adddetails`,{
            method:"POST",
            headers:{
                "content-type":"Application/json",
            },
            body: JSON.stringify(info)
        })
            .then(()=>Navigate("/"))
        .catch(error => console.error(error));
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

          <div className="setAmount">
              <div className="amount">Amount</div>
              <input type="text" placeholder="Enter the amount" onChange={handle_amount}/>
          </div>
          <div className="setDescription">
              <div>Description</div>
              <input type="text" placeholder="Enter the Expense"  value={description} onChange={handle_description}/>
          </div>
          <div className="footer">
               <button className="add" onClick={postData}>ADD</button>
          </div>
          </div>
      </div>
    );
}
export default Details;