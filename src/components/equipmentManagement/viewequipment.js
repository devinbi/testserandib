import axios from 'axios'
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2'

import TestModal from './viewequipment';

import UpdateEquipmentModal from "./updateequipment";
// import Header from "../../Header";



function Viewequipment() {

    // const [search, setSearch] = useState("");

    const [equipments, setEquipments] = useState([]);

    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);


    const [modalDataUpdate, setModalDataUpdate] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);
    



    useEffect(() => {

        function getequipments() {
            axios.get("http://localhost:8070/equipment/").then((res) => {


                setEquipments(res.data.reverse());

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

        getequipments();

    }, []);

        const deleteRental = async (data) => {
            console.log("----------------",data._id);
            
                    // console.log("modalDataDelete.fyiff",modalDataDelete);
                        const value = axios.post(`http://localhost:8070/equipment/delete/${data._id}`);
                        //console.log("deletedddd", value);
                        if (value) {
                            console.log("Value",value.data);
                            // alert("**Permenantly deleted the Vehicle Record");
                            // window.""location.replace("/viewReservation");
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

    const openModal = (equipment) => {
        setData(equipment);
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

    const openModalUpdate = (data) => {

        //console.log("request came for modal updateeeeeee", data);
        setModalDataUpdate(data);
        setModalUpdate(true);

    }


    // function searchVehicles(e) {


    //     e.preventDefault();
    //     //console.log("search val", search);
    //     axios.get(`http://localhost:8070/vehicle/searchV/${search}`).then((res) => {


    //         setVehicles(res.data.data.reverse());
    //     }).catch((error) => {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Oops...',
    //             text: 'No data found!',
    //             confirmButtonColor: '#207159',

    //         })
    //     })
    // }


   

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
                        <h3 className="float-left ">Equipment Details</h3>
                    </div>
                </div>

                {/* <div class="row table-head-search">
                    <div className="col-md-8"></div>
                    <div className="col">
                        <div class="input-group input-group-search">
                            <div class="searchbar">
                                <form id="contactform" class="form" onSubmit={searchVehicles}>
                                    <input class="search_input" type="text" name="" placeholder="Search..." value={search} onChange={(event) => { setSearch(event.target.value) }} required />
                                    <button class="btn search_icon" type="submit" id="submit" name="submit"><i class="fa fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> */}



                <table class="table table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th class="text-center">Equipment ID</th>
                            <th class="text-center">Equipment Name</th>
                            <th class="text-center">Equipment Type</th>
                            <th class="text-center">Date</th>
                            <th class="text-center">Department</th>
                            <th class="text-center">Intertek</th>
                            <th class="text-center">Status</th>
                            <th class="text-center">Action</th>

                           
                        </tr>

                    </thead>
                    <tbody>
                        {equipments.map((equipments) => {

                            return (
                                <tr>
                                     <td onClick={() => openModal(equipments)} data-toggle="tooltip" data-placement="right" title="Click to view details" className="view-td" class="text-center">
                                        {equipments.equipmentid}
                                    </td>
                                    <td class="text-center">{equipments.equipmentname}</td>
                                    <td class="text-center">{equipments.equipmenttype}</td>
                                    <td class="text-center">{equipments.date}</td>
                                    <td class="text-center">{equipments.department}</td>
                                    <td class="text-center">{equipments.intertek}</td>
                                    <td class="text-center">{equipments.status}</td>
                                    <td class="text-center">
                                        <button
                                            class="btn btn-light btn-sm"
                                            onClick={() => openModalUpdate(equipments)}
                                        >
                                            update
                                        </button>
                                        <button
                                            id="btnDelete"
                                            class="btn btn-danger btn-sm"
                                            onClick={() => openModalDelete(equipments)}
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

         {/* modal for update the data of vehicle  */}
        <Modal
        show={modalUpdate}
        onHide={() => setModalUpdate(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <UpdateEquipmentModal
            data={modalDataUpdate}
            onHide={() => setModalUpdate(false)}
        />
        </Modal>

        </div>


    )
}

export default Viewequipment;
