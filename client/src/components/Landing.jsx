import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const Landing = () => {
  const nameRef = useRef();
  const dateRef = useRef();
  const salaryRef = useRef();
  const daysRef = useRef();

  const handleGeneratePDF = () => {
    const name = nameRef.current.value;
    const date = dateRef.current.value;
    const salary = salaryRef.current.value;
    const days = daysRef.current.value;

    const content = `
      <h1>Employee Details</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Salary:</strong> ${salary}</p>
      <p><strong>Days:</strong> ${days}</p>
    `;

    const element = document.createElement('div');
    element.innerHTML = content;

    html2pdf()
      .set({ html2canvas: { scale: 4 } })
      .from(element)
      .save('employee_details.pdf');
  };

  return (
    <div>
      <div>
        <label>Name:</label>
        <input type="text" ref={nameRef} />
      </div>
      <div>
        <label>Date:</label>
        <input type="text" ref={dateRef} />
      </div>
      <div>
        <label>Salary:</label>
        <input type="text" ref={salaryRef} />
      </div>
      <div>
        <label>Days:</label>
        <input type="text" ref={daysRef} />
      </div>
      <button onClick={handleGeneratePDF}>Generate PDF</button>
    </div>
  );
};

export default Landing;
