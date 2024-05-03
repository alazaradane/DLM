import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const EditBookFormModal = ({ visible, onHide, onSave, bookData }) => {
  const [editBookData, setEditBookData] = useState({});

  useEffect(() => {
    console.log('Received book data:', bookData);
    if (bookData) {
      setEditBookData({ ...bookData });
    }
  }, [bookData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditBookData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving book data:', editBookData);
    onSave(editBookData);
    onHide();
  };

  return (
    <Dialog visible={visible} onHide={onHide} header='Edit Book'>
      <div className='p-grid p-fluid'>
        <div className='p-col-12'>
          <label className='font-bold text-slate'>Name</label>
          <InputText name='name' value={editBookData.name || ''} onChange={handleInputChange} className='mt-2 border-1 px-2 py-1' />
        </div>
        <div className='p-col-12'>
          <label className='font-bold text-slate'>Category</label>
          <InputText name='category' value={editBookData.category || ''} onChange={handleInputChange} className='mt-2 border-1 px-2 py-1' />
        </div>
        <div className='p-col-12'>
          <label className='font-bold text-slate'>Description</label>
          <InputText name='description' value={editBookData.description || ''} onChange={handleInputChange} className='mt-2 border-1 px-2 py-1' />
        </div>
        <div className='p-col-12'>
          <label className='font-bold text-slate'>File</label>
          <InputText name='file' value={editBookData.file || ''} onChange={handleInputChange} className='mt-2 border-1 px-2 py-1' />
        </div>
        <div className='p-col-12 p-md-6'>
          <Button label='Save' onClick={handleSave} className='bg-purple-700 text-white py-1 px-2 m-1 rounded-[0.3rem] text-center' />
        </div>
        <div className='p-col-12 p-md-6'>
          <Button label='Cancel' onClick={onHide} className='py-1 px-2 m-1 rounded-sm text-center' />
        </div>
      </div>
    </Dialog>
  );
};

export default EditBookFormModal;
