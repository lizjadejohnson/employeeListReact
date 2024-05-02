import React from 'react';

function EmployeeListItem({ name, position, image }) {
  return (
    <div className='emp_li'>
        <div className='emp_li_left'>
            <div className='image'>{image ? <img src={image} alt={name} /> : "No Image"}</div>  
        </div>
        <div className='emp_li_right'>
            <div className='name'>{name}</div>
            <div className='jobTitle'>{position}</div> 
        </div>
    </div>
  );
}

export default EmployeeListItem;