import React from "react";
import { Dialog } from "@radix-ui/react-dialog";
import { Button } from "primereact/button";

const StudentModal = ({ rowData, onClose }) => {
  return (
    <Dialog onClose={onClose}>
      <div className="modal-content bg-white">
        <div className="p-field flex items-center justify-between gap-6">
          <label htmlFor="id" className=" font-bold ">ID</label>
          <input id="id" value={rowData.id} disabled />
        </div>
        <div className="p-field flex items-center justify-between gap-6">
          <label htmlFor="name" className=" font-bold ">Name</label>
          <input id="name" value={rowData.name} disabled />
        </div>
        <div className="p-field flex items-center justify-between gap-6">
          <label htmlFor="student_id" className=" font-bold ">Student ID</label>
          <input id="student_id" value={rowData.student_id} disabled />
        </div>
        <div className="p-field flex items-center justify-between">
          <label htmlFor="email" className=" font-bold ">Email</label>
          <input id="email" value={rowData.email} disabled />
        </div>
        <div className="p-field flex items-center justify-between">
          <label htmlFor="grade" className=" font-bold ">Grade</label>
          <input id="grade" value={rowData.grade} disabled />
        </div>
        <div className="p-field flex items-center justify-between">
          <label htmlFor="section" className=" font-bold ">Section</label>
          <input id="section" value={rowData.section} disabled />
        </div>
      </div>
    </Dialog>
  );
};

export default StudentModal;
