import React,{useEffect,useState} from 'react';
import axios from 'axios';




function Addmonitor(){ 

  const [monitorid, setMonitorid] = useState("");
  const [runtime, setRuntime] = useState(null);
  const [productiontime, setproductiontime] = useState(null);
  const [availability, setavailability] = useState(0);
  const [goodcount, setgoodcount] = useState(null);
  const [totalcount, settotalcount] = useState(null);
  const [quality, setquality] = useState(0);
  const [idealcycle, setidealcycle] = useState("");
  const [count, setcount] = useState("");
  const [rtime, setrtime] = useState("");
  const [performance, setperformance] = useState(0);
  const [availability1, setavailability1] = useState("");
  const [performance1, setperformance1] = useState("");
  const [quality1, setquality1] = useState("");
  const [oee, setoee] = useState("");
  const [status, setStatus] = useState("");

  

  function sendData(e){
      e.preventDefault();
    
      const newEquipment= {
         
        monitorid,
        runtime,
        productiontime,
        availability,
        goodcount,
        totalcount,
        quality,
        idealcycle,
        count,
        rtime,
        performance,
        availability1,
        performance1,
        quality1,
        oee,
        status
        
      }
      
  console.log(newEquipment)
      axios.post("http://localhost:8070/monitor/add",newEquipment).then(()=>{
          alert("Success");
          window.location.reload()
         
      

      }).catch((err)=>{
          alert(err);
      })
    
     //calculation availability
  }
  useEffect(() => {
    setavailability((runtime ? Number(runtime) : 0) / (productiontime ? Number(productiontime) : 0));
    console.log("availability", availability);

    //calculation quality

    setquality((goodcount ? Number(goodcount) : 0) / (totalcount ? Number(totalcount) : 0));
    console.log("quality", quality);

    //calculation preformance

    setperformance((idealcycle ? Number(idealcycle) : 0) * (count? Number(count) : 0) /(rtime ? Number(rtime) : 0));
    console.log("performance", performance);

    //calculaton oee as a percentage 

    const product = (availability1 ? Number(availability1) : 0) * (performance1 ? Number(performance1) : 0) * (quality1 ? Number(quality1) : 0);
    const oeePercentage = product / 10000;
    setoee(oeePercentage);
    console.log("oee", oeePercentage);
  }, [runtime, productiontime,goodcount,totalcount,idealcycle,count,rtime,availability1,performance1,quality1]);
     
  
  
  
   return(
       
      <div class="page-component-body">
         <div class="container input-main-form-emp pt-3">
                         <div class="container border-top">
                             <div class="row">
                                 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                     <h3 className="topic-V text-left mt-4 mb-4">OEE Calculation</h3>
                                 </div>
                      </div>
                  <title Add expense />
                    <form onSubmit={sendData}>
                    <div class="form-group">
                            <label for="expenseid">Monitor ID :</label>
                            <input type="text" class="form-control" id="expenseid" pattern="[E][0-9]{4}" placeholder="Enter expense id"
                            onChange={(e)=>{
                                setMonitorid(e.target.value);
                            }}/>
                        
                        </div>


                        <div class="form-group">
                            <label for="totalamount">Run Time:</label>
                            <input type="text" class="form-control" id="runtime" 
                            onChange={(e)=>{
                                setRuntime(e.target.value);
                            }}/>

                        </div>
                        <div class="form-group">
                            <label for="totalamount">Planned Production Time:</label>
                            <input type="text" class="form-control" id="production" 
                            onChange={(e)=>{
                                setproductiontime(e.target.value);
                            }}/>

                        </div>
                        <div class="form-group">
                            <label for="totalamount">Result For Availability:</label>
                            <input type="text" class="form-control" id="availabilty" disabled
                            value={availability}
                            />

                        </div>
                        <div class="form-group">
                            <label for="totalamount">Good Count:</label>
                            <input type="text" class="form-control" id="totalamount" 
                            onChange={(e)=>{
                                setgoodcount(e.target.value);
                            }}/>

                        </div>
                        <div class="form-group">
                            <label for="totalamount">Total Count:</label>
                            <input type="text" class="form-control" id="totalamount" 
                            onChange={(e)=>{
                                settotalcount(e.target.value);
                            }}/>

                        </div>
                        <div class="form-group">
                            <label for="totalamount">Result For Quality:</label>
                            <input type="text" class="form-control" id="quality" disabled
                            value={quality}/>

                        </div>
                        <div class="form-group">
                            <label for="totalamount">Ideal Cycle Time:</label>
                            <input type="text" class="form-control" id="idealcycle" 
                            onChange={(e)=>{
                                setidealcycle(e.target.value);
                            }}/>

                        </div>
                        <div class="form-group">
                            <label for="totalamount">Total Count:</label>
                            <input type="text" class="form-control" id="setcount" 
                            onChange={(e)=>{
                                setcount(e.target.value);
                            }}/>

                        </div>
                        <div class="form-group">
                            <label for="totalamount">Run Time:</label>
                            <input type="text" class="form-control" id="totalamount" 
                            onChange={(e)=>{
                                setrtime(e.target.value);
                            }}/>

                        </div>
                        <div class="form-group">
                            <label for="totalamount">Reults For Performance:</label>
                            <input type="text" class="form-control" id="totalamount" disabled
                            value={performance}/>

                        </div>
                        <div class="form-group">
                            <label for="totalamount">Availability result:</label>
                            <input type="text" class="form-control" id="totalamount" 
                            onChange={(e)=>{
                                setavailability1(e.target.value);
                            }}/>

                        </div>
                        <div class="form-group">
                            <label for="totalamount">Perfromanve Result:</label>
                            <input type="text" class="form-control" id="totalamount" 
                            onChange={(e)=>{
                                setperformance1(e.target.value);
                            }}/>

                        </div>
                        <div class="form-group">
                            <label for="totalamount">Quality Result:</label>
                            <input type="text" class="form-control" id="totalamount" 
                            onChange={(e)=>{
                                setquality1(e.target.value);
                            }}/>

                        </div>
                        <div class="form-group">
                            <label for="totalamount">Overrall Equipment Effectivness In Percentage:</label>
                            <input type="text" class="form-control" id="totalamount" disabled 
                            value={oee}/>

                        </div>

                        <div class="form-group">
                            <label for="expensetype">Select the status of the Equipment:</label>
                            <select name ="expensetype" class="form-control" id="expensetype" 
                            onChange={(e)=>{
                                setStatus(e.target.value);
                                
                            }}>
                             <option >CHOOSE</option>  
                             <option value="good">good</option>
                             <option value="bad">bad</option>
                            </select>
                         </div>

                        
                   <div className="col py-3 text-center">
                    <button  type="submit" class="btn btn-info btn-lg" >Submit</button>
                    </div>
                    
                    </form>
                </div>
                </div>
                </div>
            
   )

              }
    
   
                     export default Addmonitor;
    
