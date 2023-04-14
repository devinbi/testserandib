import { React, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";






function UpdateallocatingModal(allocating) {

    console.log("update modal dataaaaaa", allocating);

    useEffect(() => {
        try {

            setEquipmentid(allocating.data.equipmentid);
            setDepartment(allocating.data.department);
            setWattage(allocating.data.wattage);
            setHours(allocating.data.hours);
            setResult(allocating.data.result);
            

        } catch {
            window.alert("something went wrong");
        }
    }, [allocating.data]);

    const [equipmentid, setEquipmentid] = useState("");
    const [department, setDepartment] = useState("");
    const [wattage, setWattage] = useState(null);
    const [hours, setHours] = useState(null);
    const [result, setResult] = useState(0);
     


   function sendData (e){
    e.preventDefault();

            const newAllocating = {
                equipmentid,
                department,
                wattage,
                hours,
                result

            }

            axios.put(`http://localhost:8070/allocating/update/${allocating.data._id}`, newAllocating)

                .then(() => {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Vehicle Details Added Succesfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    }
                    ).then(() => {
                        window.location.replace("/allocating/viewallocating");

                    })
                    window.location.replace("/allocating/viewallocating");

                }).catch((err) => {
                    const msgerr = err.response.data.status
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: `${msgerr}`,
                        confirmButtonColor: '#1fc191',

                    })
                })

             
        

   }
   useEffect(() => {
    setResult((wattage ? wattage : 0) * (hours ? hours : 0));
    console.log("result", result);
  }, [wattage, hours]);
  
           
  return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>equipment id : {allocating.data.equipmentid}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="px-4">

                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form id="contact-form" class="form" action="#" method="POST" role="form" onSubmit={sendData}>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <h3 className="topic-V text-left mt-1 mb-4">equipment Details</h3>
                                </div>
                            </div>
                            <div className="row">


                                <div class="form-group ">

                                    <div class=" row ml-1">
                                        <div class="col-6">
                                            <label class="form-label-V mt-2" for="RegNo">equipment id </label>
                                        </div>
                                        <div class="col-5">
                                            <input
                                                disabled
                                                id="regNo"
                                                type="text"
                                                className="form-control "
                                                placeholder="ABC-XXXX"
                                                value={equipmentid}

                                                onChange={(e) => {
                                                  setEquipmentid(e)
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group col-sm">
                                    <label class="form-label-emp" for="subject">department</label>
                                    <select
                                        value={department}
                                        id="vehType"
                                        className="form-control "
                                        onChange={(e) => {
                                          setDepartment(e.target.value); // assign value
                                        }}
                                    >
                                        <option id="car">cutting</option>
                                        <option id="van">rolling</option>
                                        <option id="bus">heating</option>
                                    </select>
                                </div>
                            

                            <div className="row">
                                <div class="form-group col-sm">
                                    <label class="form-label-emp" for="name">wattage</label>
                                    <input type="text" class="form-control formInput" id="VehicleBrand" name="VehicleBrand" placeholder="eg : Toyota , Nissan" tabindex="1" required

                                        value={wattage}

                                        onChange={(e) => {
                                          setWattage(e.target.value); // assign value
                                        }}


                                    />

                                </div>
                                <div class="form-group col-sm">
                                    <label class="form-label-emp" for="email">hours</label>
                                    <input type="text" class="form-control formInput" id="vehModal" name="vehModal" placeholder=" eg : KDH, Axio " tabindex="2" required

                                        value={hours}
                                        onChange={(e) => {
                                          setHours(e.target.value); // assign value
                                        }}

                                    />
                                </div>
                               
                            </div>


                            <hr></hr>


                            <div className="row">
                                <div class="form-group col-md-6">
                                    <label class="form-label-emp" for="subject"> result</label>
                                    <input required type="text" class="form-control formInput" id="InsCom" name="InsCom" placeholder="Insurance Company Name" tabindex="2" 
                                        value={result}
                                        onChange={(e) => {
                                          setResult(e.target.value);
                                        }}

                                    />
                                </div>
                            </div>


                            <div className="row mt-3 mb-4">
                                <div className="col py-3 text-center">
                                    <button type="submit" className="btn btn-ok">
                                        Update
                                    </button>
                                </div>
                                <div className="col py-3 text-center">
                                    <button type="reset" className="btn btn-reset" onClick={allocating.onHide}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </Modal.Body>
        </div>
        
    )
                                  
                                  
                          }                                                            

export default UpdateallocatingModal