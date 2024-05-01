import React, { useState } from 'react';


const Section = () => {
  const [gradeLevel, setGradeLevel] = useState('');
  const [section, setSection] = useState('');
  const [sections, setSections] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const gradeLevels = Array.from({ length: 12 }, (_, i) => i + 1);
  const sectionsArray = Array.from({ length: 8 }, (_, i) => String.fromCharCode(65 + i)); // ASCII values for A to H

  const handleAddSection = () => {
    if (gradeLevel && section) {
      const newSection = {
        id: idCounter,
        gradeLevel: parseInt(gradeLevel),
        section
      };
      setSections([...sections, newSection]);
      setGradeLevel('');
      setSection('');
      setIdCounter(idCounter + 1);
    }
  };

  const handleRemoveSection = (id) => {
    const updatedSections = sections.filter(sec => sec.id !== id);
    setSections(updatedSections);
  };

  return (
    <div className="section-container p-5">
      <h2 className=' text-2xl font-bold my-5'>Sections</h2>
      <table className="section-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Grade</th>
            <th>Section</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sections.map(sec => (
            <tr key={sec.id}>
              <td>{sec.id}</td>
              <td>{sec.gradeLevel}</td>
              <td>{sec.section}</td>
              <td>
                <button onClick={() => handleRemoveSection(sec.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <select className="grade-dropdown" value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)}>
        <option value="">Select Grade Level</option>
        {gradeLevels.map((level) => (
          <option key={level} value={level}>{level}</option>
        ))}
      </select>
      <select className="section-dropdown" value={section} onChange={(e) => setSection(e.target.value)}>
        <option value="">Select Section</option>
        {sectionsArray.map((sec) => (
          <option key={sec} value={sec}>{sec}</option>
        ))}
      </select>
      <button className="add-button bg-black" onClick={handleAddSection}>Add Section</button>
    </div>
  );
};

export default Section;