import React, { useState, useEffect } from "react";
import { Modal,Button } from "react-bootstrap";

function Equipmentview(equipment) {

    //console.log("model openingggg", reservations)

    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>equipment Name : {equipment.data.equipmentname}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-12">
                        <table class="table table-striped table-light ">
                            <tbody>
                                <tr>
                                    <th class="text-left" scope="row">
                                        equipment id: 
                                    </th>
                                    <td class="text-left">{equipment.data.equipmentid}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        equipment Name :
                                    </th>
                                    <td class="text-left">{equipment.data.equipmentname}</td>
                                </tr><tr>
                                    <th class="text-left" scope="row">
                                        equipment type :
                                    </th>
                                    <td class="text-left">{equipment.data.equipmenttype}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        date :
                                    </th>
                                    <td class="text-left">{equipment.data.date}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        department :
                                    </th>
                                    <td class="text-left">{equipment.data.department}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        intertek : 
                                    </th>
                                    <td class="text-left">{equipment.data.intertek}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        status :
                                    </th>
                                    <td class="text-left">{equipment.data.status}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-close" onClick={equipment.onHide}>Close</button>
            </Modal.Footer>
        </div>
    )
}

export default Equipmentview





