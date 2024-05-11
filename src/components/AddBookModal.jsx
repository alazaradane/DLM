import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const AddBookModal = ({ visible, onAdd, onCancel }) => {
  const [newBook, setNewBook] = useState({
    id:'',
    image:null,
    name: '',
    category: '',
    author: '',
    price:'',
    description:'',
    file:null
  });

  const handleInputChange = (e, fieldName) => {
    const value = e.target.value;
    setNewBook(prevBook => ({
      ...prevBook,
      [fieldName]: value
    }));
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]; 
    setnewBook(prevBook => ({
      ...prevBook,
      image: file 
    }));
  };

  const handleAddUser = () => {
    if (newBook.image) {
      const imageURL = URL.createObjectURL(newBook.image);
      setNewBook(prevBook => ({
        ...prevBook,
        image: imageURL
      }));
    }
    onAdd(newBook);
    setNewBook({
      id:'',
      image:null,
      name: '',
      category: '',
      author: '',
      price:'',
      description:'',
      file:null
    });
  };

  return (
    <Dialog visible={visible} onHide={onCancel} header="Add Books">
      <div className="p-fluid">
        <div className="p-field">
          <label htmlFor="id">ID</label>
          <InputText type='text' id="id" onChange={(e) => handleInputChange(e, 'id')} />
        </div>
        <div className="p-field">
          <label htmlFor="image">Cover Page</label>
          <InputText type='file' id="image" onChange={handleFileInputChange} />
        </div>
        <div className="p-field">
          <label htmlFor="name">Name</label>
          <InputText id="name" value={newBook.name} onChange={(e) => handleInputChange(e, 'name')} />
        </div>
        <div className="p-field">
          <label htmlFor="category">category</label>
          <InputText id="category" value={newBook.category} onChange={(e) => handleInputChange(e, 'category')} />
        </div>
        <div className="p-field">
          <label htmlFor="author">Author</label>
          <InputText id="author" value={newBook.author} onChange={(e) => handleInputChange(e, 'author')} />
        </div>
        <div className="p-field">
          <label htmlFor="price">Price</label>
          <InputText id="price" value={newBook.price} onChange={(e) => handleInputChange(e, 'price')} />
        </div>
        <div className="p-field">
          <label htmlFor="description">description </label>
          <InputText id="description" type='text' value={newBook.description} onChange={(e) => handleInputChange(e, 'description')} />
        </div>
        <div className="p-field">
          <label id='bookFile' htmlFor="book">
            <span className=' block'>Upload File</span>
          </label>
            <InputText id="bookFile" type='file' value={newBook.file} onChange={(e) => handleInputChange(e, 'file')} hidden />          
        </div>
      </div>
      <div className="p-dialog-footer flex justify-around items-center">
        <Button label="Add" onClick={handleAddUser} className=" bg-indigo-800 text-white px-[1rem] py-[0.2rem] m-2" />
        <Button label="Cancel" onClick={onCancel} className="p-button-secondary" />
      </div>
    </Dialog>
  );
};

export default AddBookModal;
