import React from "react";
import { Dialog } from "@radix-ui/react-dialog";
import { Button } from "primereact/button";

const BookModal = ({ rowData, onClose }) => {
  return (
    <Dialog onClose={onClose}>
      <div className="modal-content bg-white">
      <div className="p-field flex flex-col items-center justify-center gap-3 mb-3">
          <img src={rowData.image} value={rowData.image} disabled className=" w-15 h-20"/>
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
          <label htmlFor="category" className=" font-bold "> category</label>
          <input id="category" value={rowData.category} disabled />
        </div>
        <div className="p-field flex items-center justify-between gap-7">
          <label htmlFor="description" className=" font-bold ">description</label>
          <input id="description" value={rowData.description} disabled className=" overflow-scroll"/>
        </div>
        <div className="p-field flex items-center justify-between gap-7">
          <label htmlFor="file" className=" font-bold ">file</label>
          <input id="file" value={rowData.file} disabled />
        </div>
      </div>
    </Dialog>
  );
};

export default BookModal;
