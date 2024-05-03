import React from "react";
import { Dialog } from "@radix-ui/react-dialog";
import { Button } from "primereact/button";

const BookModal = ({ rowData, onClose }) => {
  return (
    <Dialog onClose={onClose}>
      <div className="modal-content bg-white">
      <div className="p-field flex flex-col items-center justify-center gap-3 mb-3">
          <img src={rowData.image} value={rowData.image} disabled className=" rounded-full w-20 h-20"/>
          <label htmlFor="id" className=" font-bold ">Photo</label>
        </div>
        <div className="p-field flex items-center justify-between gap-7">
          <label htmlFor="id" className=" font-bold ">ID</label>
          <input id="id" value={rowData.id} disabled />
        </div>
        <div className="p-field flex items-center justify-between gap-7">
          <label htmlFor="name" className=" font-bold ">Name</label>
          <input id="name" value={rowData.name} disabled />
        </div>
        <div className="p-field flex items-center justify-between gap-7">
          <label htmlFor="student_id" className=" font-bold "> Email</label>
          <input id="student_id" value={rowData.email} disabled />
        </div>
        <div className="p-field flex items-center justify-between gap-7">
          <label htmlFor="email" className=" font-bold ">Password</label>
          <input id="email" value={rowData.password} disabled />
        </div>
        <div className="p-field flex items-center justify-between gap-7">
          <label htmlFor="grade" className=" font-bold ">Status</label>
          <input id="grade" value={rowData.status} disabled />
        </div>
        <div className="p-field flex items-center justify-between gap-7">
          <label htmlFor="section" className=" font-bold ">Joined Date</label>
          <input id="section" value={rowData.join} disabled />
        </div>
      </div>
    </Dialog>
  );
};

export default BookModal;
