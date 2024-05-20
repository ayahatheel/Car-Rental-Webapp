import React from 'react';
import './mainsentn.css'; 

function Mainsentn() {
    return (
        <div className='sentnce'>
    <div className='first-div' style={{ fontWeight: 'bold', color: 'red' }}>استأجر</div>
    <div className='second-div'>
        <span>
            سيارتك المفضلة وانطلق في <mark style={{ fontWeight: 'bold', color: 'red' }}>الطريق</mark>
            بخطوات <mark style={{ fontWeight: 'bold', color: 'red' }}>سهلة</mark>
        </span>
    </div>
</div>

    )
}

export default Mainsentn
