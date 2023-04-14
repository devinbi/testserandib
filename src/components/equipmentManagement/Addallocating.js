import React,{useState , useEffect} from 'react';
import axios from 'axios';


function AddAllocating(){ 

  const [equipmentid, setEquipmentid] = useState("");
  const [department, setDepartment] = useState("");
  const [wattage, setWattage] = useState(null);
  const [hours, setHours] = useState(null);
  const [result, setResult] = useState(0);
   

  function sendData(e){
      e.preventDefault();
    
      const newAllocating = {
        equipmentid,
        department,
        wattage,
        hours,
        result
      }
      
  console.log(newAllocating)
      axios.post("http://localhost:8070/allocating/add",newAllocating).then(()=>{
          alert("Success");
          window.location.reload()
    
      }).catch((err)=>{
          alert(err);
      })
   
  }


useEffect(() => {
  setResult((wattage ? wattage : 0) * (hours ? hours : 0));
  console.log("result", result);
}, [wattage, hours]);

  

  
//    return(
//     <div className="page-component-body ">
//                     <form onSubmit={sendData}>
//                     <div class="form-group">
//                             <label for="orderid">Order ID :</label>
//                             <input type="text" class="form-control" id="orderid"  placeholder="Enter ID "
//                             onChange={(e)=>{
//                                 setEquipmentid(e.target.value);
//                             }}/>
                        
//                         </div>
//                         <div class="form-group col-sm">
//                                     <label class="form-label-emp" for="subject">department</label>
//                                     <select
//                                         value={department}
//                                         id="vehType"
//                                         className="form-control "
//                                         onChange={(e) => {
//                                           setDepartment(e.target.value); // assign value
//                                         }}
//                                     >
//                                         <option id="car">cutting</option>
//                                         <option id="van">rolling</option>
//                                         <option id="bus">heating</option>
//                                     </select>
//                                 </div>

//                         <div className="form-group">
//                             <label for="numberofunits">wattage</label>
//                             <input type="number" class="form-control" id="numberofunits" placeholder="Enter number of units" onChange={(e)=>{
//                                 setWattage(e.target.value);
//                             }}/>
//                         </div>

//                         <div class="form-group">
//                             <label for="unitprice">hours</label>
//                             <input type="number" class="form-control" id="unitprice" placeholder="Enter unit price"
//                             onChange={(e)=>{
//                                 setHours(e.target.value);
//                             }}/>
//                         </div>
//                         <div class="form-group">
//                             <label for="unitprice">result :</label>
//                             <input type="text" class="form-control" id="unitprice" placeholder="Enter unit price"
//                             value={result}
//                             />
//                         </div>
                        
            
//                     <button type="submit" class="btn btn-info btn-lg">Submit</button>
//                     </form>
//                 </div>
         
//          )

//                         }

    return(
        <div class="page-component-body">
            {/* <Header></Header> */}
            <div class="container input-main-form-emp pt-3">
                <div class="container border-top">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                            <h3 className="topic-V text-left mt-4 mb-4">Add alocation details</h3>
                        </div>
                    </div> 
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <form id="contact-form" class="form" role="form" onSubmit={sendData}>
                                <div class="form-group">
                                    <label class="form-label" for="Name">equipment id </label>
                                    <input 
                                        type="text" 
                                        class="form-control formInput" 
                                        id="Name" 
                                        name="Name" 
                                        placeholder="Employee Name" 
                                        tabindex="1" 
                                        required
                                        onChange={(e) => {
                                            setEquipmentid(e.target.value); // assign value
                                        }}
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="form-label" for="Address">department </label>
                                    <select
                                        type="text" 
                                        class="form-control formInput" 
                                        id="Address" 
                                        name="Address"
                                        placeholder="Employee Address"
                                        tabindex="2" 
                                        required
                                        onChange={(e)=>{
                                            setDepartment(e.target.value);// assign value
                                        }}
                                        >
                                         <option id="car">cutting</option>
                                         <option id="van">rolling</option>
                                         <option id="bus">heating</option>
                                        </select>
                                </div>

                                <div className="row">
                                    <div class="form-group col-md-6">
                                        <label class="form-label" for="NIC">wattage</label>
                                        <input 
                                            type="text" 
                                            class="form-control formInput" 
                                            id="NIC" 
                                            name="NIC"
                                            placeholder="Employee NIC"
                                            tabindex="3"
                                            required
                                            onChange={(e)=>{
                                                setWattage(e.target.value);//assign value
                                            }}
                                        />
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label class="form-label" for="DOB">hOURS </label>
                                        <input 
                                            type="text" 
                                            class="form-control formInput" 
                                            id="DOB" 
                                            placeholder="Employee DOB"
                                            tabindex="4"
                                            required
                                            onChange={(e)=>{
                                                setHours(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div class="form-group col-md-6">
                                        <label class="form-label" for="Phone">result </label>
                                        <input 
                                            type="text" 
                                            class="form-control formInput" 
                                            id="Phone" 
                                            placeholder="Employee Contact Number"
                                            tabindex="5"
                                            required
                                            value={result}
                                        />
                                    </div>
                                </div>

                                <div className="row mt-2 mb-3">
                                    <div className="col py-3 text-center">
                                        <button type="submit" className="btn btn-ok">
                                            Add
                                        </button>
                                    </div>
                                    <div className="col py-3 text-center">
                                        <button type="reset" className="btn btn-reset">
                                            Cancel
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

    )
}
                        export default AddAllocating;
  
  

