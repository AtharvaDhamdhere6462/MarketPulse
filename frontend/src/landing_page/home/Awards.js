import React from 'react'

function Awards() {
    return ( 
        
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="Media/largestBroker.png" alt="Awards" style={{width:"100%"}} />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients Contributed to over 15% of all retail order <br />volumes in India daily by trading and investing in. </p>
                    <div className='row'>
                    <div className='col-6'>
                    <ul>
                        <li>Futures and Options</li>
                        <li> Commodity Derivatives </li>
                        <li>Currency Derivatives</li>
                    </ul>
                    </div>
                    <div className='col-6'>
                    <ul>
                        <li>Stocks & IPOs</li>
                        <li> Direct Mutual Funds </li>
                        <li>Bonds and Governments Policy's</li>
                    </ul>
                    </div>
                    </div>
                    <img src="Media/PressLogos.png" alt="pressLogo" style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;