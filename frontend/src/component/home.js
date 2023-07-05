import React, {useCallback, useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../style/home.css';
import {createSearchParams, useNavigate} from "react-router-dom";


function Home(){
    const url = "http://localhost:8000";
    const Navigate = useNavigate();
    const [startDate,setStartDate] = useState(new Date());
    const[managers,setManagers] = useState([]);

    function functionNavigator(log_info) {
        Navigate({
            pathname:'/edit',
            search:createSearchParams({
                id:log_info._id,
                fa_code:log_info.fa_code,
                name:log_info.name,
                amount:log_info.amount,
                date:log_info.date,
                description:log_info.description
            }).toString(),
        });
    }

    const fetchManager = useCallback(()=>{
        fetch(url)
            .then(response => response.json())
            .then(data => {setManagers(data)})
            .catch(error => console.error(error))
    },[url]);
    useEffect(()=>{
        fetchManager();
    },[fetchManager]);
    let esum= 0;
    let isum= 0;
    let bsum= 0;
    managers.map((money)=>{
       if( money.category === "expense"){
           esum+=money.amount;
       }
       else{
           isum+=money.amount;
       }
    })
    bsum = isum - esum;
    let w=50;
    if(isum<esum){
        w = 35;
    }
    else if( isum>esum){
        w = 70;
    }



    console.log(managers);
    return(
        <div className="main">
            <div className="Date">
            <button className="ShowDate" >
                <DatePicker selected={startDate}  onChange={(date)=>setStartDate(date)} dateFormat="MMM" className="ShowDate"/>
            </button>
            </div>
            <div className="bar">
                <div className="showIncome" style={{width:`${w}%`}}>
                    Total Income = {isum}</div>
                {esum>isum &&
                <div className="showBalance" style={{left:'28.7%'}} >Balance
                    <div className="balancename">= {bsum}</div>
                </div>
                }
                {isum>esum &&
                    <div className="showBalance" style={{left:'62.8%'}} >Balance
                        <div className="balancename">= {bsum}</div>
                    </div>
                }
                {esum===isum &&
                    <div className="showBalance" style={{left:'43%'}} >Balance
                        <div className="balancename">= {bsum}</div>
                    </div>
                }
                <div className="showExpense">
                    Total Expense = {esum} </div>
            </div>

            <div className="addItem">
                {managers.map((log) => {
                    let date = new Date(log.date);
                    if(date.getMonth()===startDate.getMonth()) {


                        return (
                            <div className="log-show" onClick={() => functionNavigator(log)}>
                                <span><i className={log.fa_code}></i></span>
                                <span className="desc">{log.description}</span>
                                {log.category === "expense" &&
                                    <span className="eamt">{log.amount}</span>
                                }
                                {log.category === "income" &&
                                    <span className="amt">{log.amount}</span>
                                }


                            </div>
                        )
                    }
                })}
            </div>
            <button className="plus" onClick={()=>Navigate('/expense')}>  <i className="fa-sharp fa-solid fa-circle-plus"></i> </button>

        </div>

    );
}
export default Home;