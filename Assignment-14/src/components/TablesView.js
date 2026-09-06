import React from 'react';

function TablesView() {
  const students = [
    { id: 101, name: 'Bhakti', subject: 'React.js', marks: 92, grade: 'A+' },
    { id: 102, name: 'Rahul', subject: 'JavaScript', marks: 85, grade: 'A' },
    { id: 103, name: 'Priya', subject: 'CSS & Bootstrap', marks: 78, grade: 'B+' },
    { id: 104, name: 'Amit', subject: 'HTML5', marks: 88, grade: 'A' },
    { id: 105, name: 'Sneha', subject: 'Node.js', marks: 94, grade: 'A+' }
  ];

  return (
    <div className="container my-5">
      <div className="card shadow-sm">
        <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Student Academic Records</h4>
          <span className="badge bg-primary">5 Records</span>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover table-striped mb-0">
              <thead className="table-light">
                <tr>
                  <th>Roll No</th>
                  <th>Student Name</th>
                  <th>Subject</th>
                  <th>Marks (100)</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {students.map(s => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td className="fw-semibold">{s.name}</td>
                    <td>{s.subject}</td>
                    <td>{s.marks}</td>
                    <td>
                      <span className={`badge ${s.marks >= 90 ? 'bg-success' : s.marks >= 80 ? 'bg-primary' : 'bg-warning text-dark'}`}>
                        {s.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablesView;
