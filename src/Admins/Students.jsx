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
import StudentModal from '../components/StudentModal'
import {initalDataStud}  from '../constants'
import EditStudentFormModal from '../components/EditStudentFormModal'
        

const Students = () => {

  const [dataStud, setDataStud] = useState(initalDataStud);
  const onDeleteRow = (rowData) => {
        setDataStud(prevData => prevData.filter(student => student.id !== rowData.id));
  };

  const [studentModalVisible, setStudentModalVisible] = useState(false);
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
      const updatedData = dataStud.map(student => {
          if (student.id === updatedStudent.id) {
              return { ...student, ...updatedStudent };
          }
          return student;
      });
      setDataStud(updatedData);
      setFormModal(false);
  };

    const onSelectionChange = (e) => {
      setSelectedStudents(e.value);
     }
     
    
  return (
    <section className=' container mt-20'>
       
  
      <div className=' flex items-center gap-3'>
        <img src={student} alt='student' width={60} height={60} />
        <h1 className=' text-3xl font-serif font-bold'>Users</h1>
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
          <DataTable value={dataStud} filters={filters}  selectionMode=" multiple" selection={selectedStudents} onSelectionChange={onSelectionChange} sortMode='multiple'
            paginator
            rows={20}
            rowsPerPageOptions={[1,2,3,4,5,6,7,8,9]}
            totalRecords={5} >
            <Column selectionMode="multiple" style={{ width: '3em', border:'1rem', borderColor:"#000" }} />
            <Column field='id' header='ID' sortable />
            <Column field='name' header='Name' sortable editor={(props) => inputTextEditor(props, 'name')}  />
            <Column field='email' header='Email' sortable/>
            <Column field='password' header='Password' sortable/>
            <Column
  field="status"
  header="Status"
  body={(rowData) => (
    <span
      className={`${
        rowData.status === 'Active' ? 'inline-flex items-center rounded-[0.5rem] bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20' :
        rowData.status === 'not paid' ? 'inline-flex items-center rounded-[0.4rem] bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10' :
        // Add more conditions for other status values
        ''
      }`}
    >
      {rowData.status}
    </span>
  )}
/>
            <Column field='join' header='Join Date' sortable/>
            <Column rowEditor header='Actions' body={(rowData) => (
              <div className='flex items-center gap-2'>
                <i className='pi pi-eye text-blue-500' 
                   onClick={() => {
                    setStudentModalVisible(true);
                    setSelectedStudent(rowData); 
                  }}/>
                <i className='pi pi-pencil text-yellow-500' onClick={() => onEditRow(rowData)}/>
                <i className='pi pi-trash text-red-500' onClick={() => onDeleteRow(rowData)}/>
              </div>
)           } />
          </DataTable>
          <Dialog visible={studentModalVisible} header='Student Details' onHide={() => setStudentModalVisible(false)}>
            <StudentModal rowData={selectedStudent} />
          </Dialog>
          <div>
            <EditStudentFormModal
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

export default Students