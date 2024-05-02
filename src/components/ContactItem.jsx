import React from 'react'

function ContactItem() {
  return (
    <div className='contact_li'>
        <div className='contactLeft'>
            <div className='contactFormat'>Form of Contact</div>
            <div className='contactData'>Contact Data</div>
        </div>
        <div className='contactRight'>
            <div className='contactCarrot'> ➡️ </div>
        </div>
    </div>
  )
}

export default ContactItem