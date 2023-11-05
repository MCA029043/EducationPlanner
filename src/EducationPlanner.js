import React, { useState } from 'react';

function EducationPlanner() {
  const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState('');
  const [studyHours, setStudyHours] = useState(0);

  const addSubject = () => {
    if (subjectName && studyHours >= 0) {
      setSubjects([...subjects, { name: subjectName, hours: studyHours }]);
      setSubjectName('');
      setStudyHours(0);
    }
  };

  const adjustStudyHours = (index, amount) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index].hours += amount;

    if (updatedSubjects[index].hours < 0) {
      updatedSubjects[index].hours = 0;
    }

    setSubjects(updatedSubjects);
  };

  return (
    <div>
      <h1>Education Planner</h1>
      <div>
        <input
          type="text"
          placeholder="Subject Name"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Study Hours"
          value={studyHours}
          onChange={(e) => setStudyHours(parseInt(e.target.value, 10))}
        />
        <button onClick={addSubject}>Add Subject</button>
      </div>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>
            {subject.name} - {subject.hours} hours
            <button onClick={() => adjustStudyHours(index, 1)}>+</button>
            <button id='neg' onClick={() => adjustStudyHours(index, -1)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EducationPlanner;
