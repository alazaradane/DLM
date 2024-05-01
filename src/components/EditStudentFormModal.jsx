import React, { useState, useEffect } from "react";
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const EditStudentFormModal = ({ visible, onHide, onSave, studentData }) => {
    const [editedStudentData, setEditedStudentData] = useState({ ...studentData }); 

    useEffect(() => {
        
        setEditedStudentData({ ...studentData });
    }, [studentData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedStudentData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSave = () => {
        onSave(editedStudentData);
    };

    return (
        <Dialog visible={visible} onHide={onHide} header='Edit Student'>
            <div className='p-grid p-fluid'>
                <div className='p-col-13 gap-5 mb-3'>
                    <label className=" font-bold text-slate ">Name</label>
                    <InputText name='name' value={editedStudentData.name} onChange={handleInputChange} className=" mt-2 border-1 px-2 py-1 "  />
                </div>
                <div className='p-col-12'>
                    <label className=" font-bold text-slate ">Student ID</label>
                    <InputText name='student_id' value={editedStudentData.student_id} onChange={handleInputChange} className=" mt-2 border-1 px-2 py-1 "/>
                </div>
                <div className='p-col-12'>
                    <label className=" font-bold text-slate ">Email</label>
                    <InputText name='email' value={editedStudentData.email} onChange={handleInputChange} className=" mt-2 border-1 px-2 py-1 " />
                </div>
                <div className='p-col-12'>
                    <label className=" font-bold text-slate ">Grade</label>
                    <InputText name='grade' value={editedStudentData.grade} onChange={handleInputChange} className=" mt-2 border-1 px-2 py-1 " />
                </div>
                <div className='p-col-12'>
                    <label className=" font-bold text-slate ">Section</label>
                    <InputText name='section' value={editedStudentData.section} onChange={handleInputChange} className=" mt-2 border-1 px-2 py-1 " />
                </div>
                <div className='p-col-12 p-md-6'>
                    <Button label='Save'  onClick={handleSave} className=" bg-purple-700 text-white py-1 px-2 m-1 rounded-sm text-center" />
                </div>
                <div className='p-col-12 p-md-6'>
                    <Button label='Cancel' onClick={onHide} className='py-1 px-2 m-1 rounded-sm text-center' />
                </div>
            </div>
        </Dialog>
    );
};

export default EditStudentFormModal;
