import React from 'react'

import { DataTable} from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useState, useRef } from 'react'
import { FilterMatchMode } from 'primereact/api'
import { InputText } from 'primereact/inputtext'
import { student } from '../assets/images/index'
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { TieredMenu } from 'primereact/tieredmenu';
import { Dialog } from 'primereact/dialog';
import BookModal from '../components/BookModal'
import {initalBook}  from '../constants'
import EditBookFormModal from '../components/EditBookFormModal'

        

const Books = () => {

  const [dataBook, setdataBook] = useState(initalBook);
  const onDeleteRow = (rowData) => {
        setdataBook(prevData => prevData.filter(student => student.id !== rowData.id));
  };

  const [BookModalVisible, setBookModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState('');


  const menu = useRef(null);
    const items = [
        {
            label: 'File',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'Add',
                    icon: 'pi pi-plus',
                },
                {
                    label: 'Import',
                    icon: 'pi pi-folder-open',
                    url:'https://localhost:3001/import'
                },
                {
                    label: 'Export',
                    icon: 'pi pi-folder'
                }
            ]
        },
        {
            label: 'Print',
            icon: 'pi pi-print',

        },
        
        
    ];

    const [filters, setFilters] = useState({
      global: {value:null, matchMode: FilterMatchMode.CONTAINS}
    })
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [formModal, setFormModal] = useState(false)

    const onEditRow = (rowData) => {
      setSelectedStudent(rowData);
      setFormModal(true);
  };

  const onSaveEdit = (updatedStudent) => {
      const updatedData = dataBook.map(student => {
          if (student.id === updatedStudent.id) {
              return { ...student, ...updatedStudent };
          }
          return student;
      });
      setdataBook(updatedData);
      setFormModal(false);
  };

    const onSelectionChange = (e) => {
      setSelectedStudents(e.value);
     }
     
    
  return (
    <section className=' container mt-20'>
       
  
      <div className=' flex items-center gap-3'>
        <img src={student} alt='student' width={60} height={60} />
        <h1 className=' text-3xl font-serif font-bold'>Books</h1>
      </div>
      <div className=' mt-10'>
        
        <div className=' flex items-center justify-between'>
          <div>
            <InputText
              onInput={(e)=>{
                setFilters({
                  global: {value: e.target.value, matchMode: FilterMatchMode.CONTAINS}
                })
              }}
              placeholder='Search...'
              className=' mt-5 px-2 py-1 shadow-mg rounded-sm'
            />
        </div>
        <div className="card flex justify-content-center"> 
              <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
              <Button label="Actions" onClick={(e) => menu.current.toggle(e)} className=' mr-15 bg-purple-800 text-white px-2 py-1' />
        </div>
        </div>
        <div className=' mt-5'>
          <DataTable value={dataBook} filters={filters}  selectionMode=" multiple" selection={selectedStudents} onSelectionChange={onSelectionChange} sortMode='multiple'
            paginator
            rows={20}
            rowsPerPageOptions={[1,2,3,4,5,6,7,8,9]}
            totalRecords={5} >
            <Column selectionMode="multiple" style={{ width: '3em', border:'1rem', borderColor:"#000" }} />
            <Column field='id' header='ID' sortable />
            <Column field='image' header='Image' body={
              (rowData)=>(
                <img src={rowData.image} className=' w-7 h-10'/>
              )
            } sortable />
            <Column field='name' header='Name' sortable editor={(props) => inputTextEditor(props, 'name')}  />
            <Column field='category' header='Category' sortable/>
            <Column field='description' header='Description' sortable/>
            <Column field='file' header='File' sortable/>
            {/* <Column field='section' header='Section' sortable/> */}
            <Column rowEditor header='Actions' body={(rowData) => (
              <div className='flex items-center gap-2'>
                <i className='pi pi-eye text-blue-500' 
                   onClick={() => {
                    setBookModalVisible(true);
                    setSelectedStudent(rowData); 
                  }}/>
                <i className='pi pi-pencil text-yellow-500' onClick={() => onEditRow(rowData)}/>
                <i className='pi pi-trash text-red-500' onClick={() => onDeleteRow(rowData)}/>
              </div>
)           } />
          </DataTable>
          <Dialog visible={BookModalVisible} header='Book Details' onHide={() => setBookModalVisible(false)}>
            <BookModal rowData={selectedStudent} />
          </Dialog>
          <div>
            <EditBookFormModal
                visible={formModal}
                onHide={() => setFormModal(false)}
                onSave={onSaveEdit}
                studentData={selectedStudent}
            />
        </div>
          
        </div>
      </div>      
    </section>
  )
}

export default Books