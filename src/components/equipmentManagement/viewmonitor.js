import axios from 'axios'
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2'

import TestModal from './viewmonitor';


function Viewmonitor() {


    const [monitors, setMonitors] = useState([]);

    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);
    



    useEffect(() => {

        function getmonitors() {
            axios.get("http://localhost:8070/monitor/").then((res) => {


                setMonitors(res.data.reverse());

                //console.log("Data recieved");

            }).catch((error) => {
                // alert(error.message);
                console.log("f354754",error);

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    confirmButtonColor: '#207159',

                })
            })

        }

        getmonitors();

    }, []);

        const deleteRental = async (data) => {
            console.log("----------------",data._id);
   
                        const value = axios.post(`http://localhost:8070/monitor/delete/${data._id}`);
  
                        if (value) {
                            console.log("Value",value.data);

                            Swal.fire({
                                title: 'Success!',
                                text: 'Permenantly deleted the Vehicle Record &  added successfully !!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 2000
                            }
                            ).then(() => {
                                window.location.reload();
                            })
            
            
            
                        }
            
                }

    const openModal = (monitor) => {
        setData(monitor);
        handleViewOnClick();
    }


    const handleViewOnClick = () => {
        //console.log("req came for modal");
        // console.log(modalData, "data came for modalllllll");
        setModalShow(true);
    }

    const openModalDelete = (data) => {
        setModalDataDelete(data);
        setModalDeleteConfirm(true);
    }


   

    return (

        <div className="page-component-body">
            {/* <Header></Header> */}

            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <TestModal
                    data={modalData}
                    onHide={() => setModalShow(false)}
                />
            </Modal>


            <div className="table-emp">
                <div class="row table-head mt-3">
                    <div class="col">
                        <h3 className="float-left ">OEE Performance Details</h3>
                    </div>
                   
                </div>


                <table class="table table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th class="text-center">Monitor ID</th>
                            <th class="text-center">Run Time</th>
                            <th class="text-center">Planed Production Time</th>
                            <th class="text-center">Availability</th>
                            <th class="text-right">Good Count</th>
                            <th class="text-right">Total Count</th>
                            <th class="text-center">Quality</th>
                            <th class="text-center">Ideal Cycle Time</th>
                            <th class="text-center">Total Count</th>
                            <th class="text-center">Run Time</th>
                            <th class="text-center">Perfromance</th>
                            <th class="text-center">Availability Result</th>
                            <th class="text-center">Performance Result</th>
                            <th class="text-center">Quality Result</th>
                            <th class="text-center">OEE Result</th>
                            <th class="text-center">Status</th>
                            <th class="text-center">Action</th>
                            
                           
                        </tr>

                    </thead>
                    <tbody>
                        {monitors.map((monitors) => {

                            return (
                                <tr>
                                     <td onClick={() => openModal(monitors)} data-toggle="tooltip" data-placement="right" title="Click to view details" className="view-td">
                                        {monitors.monitorid}
                                    </td>
                                    <td class="text-center">{monitors.runtime}</td>
                                    <td class="text-center">{monitors.productiontime}</td>
                                    <td class="text-center">{monitors.availability}</td>
                                    <td class="text-center">{monitors.goodcount}</td>
                                    <td class="text-center">{monitors.totalcount}</td>
                                    <td class="text-center">{monitors.quality}</td>
                                    <td class="text-center">{monitors.idealcycle}</td>
                                    <td class="text-center">{monitors.count}</td>
                                    <td class="text-center">{monitors.rtime}</td>
                                    <td class="text-center">{monitors.performance}</td>
                                    <td class="text-center">{monitors.availability1}</td>
                                    <td class="text-center">{monitors.performance1}</td>
                                    <td class="text-center">{monitors.quality1}</td>
                                    <td class="text-center">{monitors.oee}</td>
                                    <td class="text-center">{monitors.status}</td>

                                    <td class="text-center">
                                        <button
                                            id="btnDelete"
                                            class="btn btn-danger btn-sm"
                                            onClick={() => openModalDelete(monitors)}
                                        >
                                            remove
                                        </button>

                                    </td>
                                </tr>
                            );
                        })}


                    </tbody>
                </table>
            </div>

           

   
        {/* modal for delete employee record */}
        <Modal show={modalDeleteConfirm} onHide={() => setModalDeleteConfirm(false)} size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Are you want to delete this item ?</p>

        </Modal.Body>
        <Modal.Footer>

            <div className="row">
                <div className="col -6">
                    <button type="submit" className="btn btn-delete" onClick={() => { deleteRental(modalDataDelete); }}>
                        Confirm
                    </button>
                </div>
                <div className="col-6 text-right" onClick={() => setModalDeleteConfirm(false)}>
                    <button type="reset" className="btn btn-reset">
                        cancel
                    </button>
                </div>
            </div>
        </Modal.Footer> 
       </Modal>

        </div>


    )
}

export default Viewmonitor;
