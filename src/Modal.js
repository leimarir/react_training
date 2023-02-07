import React, { useState } from 'react';
import "./Modal.css";
import data from './data'

function Modal() {
    
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-model')
    }

    const listData = data.Employees.map(user => {
        return (
            <div>
                <li>
                <ul>
                    <li>
                        <span onMouseOver={toggleModal}>{user.name}</span>
                    </li>
                    <li>{user.designation}</li>
                    <li><img src={user.image} alt="" /></li>
                </ul>
                </li>

                {modal && (
                    <div className='modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                        <div className='modal-content'>
                            <h2>Employee details</h2>
                            <ul>
                                <li>{user.name}</li>
                                <li>{user.age}</li>
                                <li>{user.DOB}</li>
                                <li>{user.salary}</li>
                                <li>{user.designation}</li>
                                <li>{user.department}</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
            
        )
    })

    return (
        <div>
            <h3>Employees</h3>
            <ol>{listData}</ol>
        </div>
    );
};

export default Modal;

// <button onMouseOver={toggleModal} className="btn-modal">
//                 Open
//             </button>

//             <div onMouseOver={toggleModal}>
//                 Open
//             </div>