import React from 'react';
import ThunderMac from '../../../images/TM-Logo.png';
import ZentroMedia from '../../../images/Zentro-Logo.png';
import WinHoldings from '../../../images/WinHoldingsLogo.png';
import CuresTown from '../../../images/CuresTownLogo.png';
import arbnb from '../../../images/airbnb.png';
import './Client.css'

const Client = () => {
    return (
        <div className="client-area section-padding">
            <h1 className="client-title">Our Top <span>Clients</span></h1>
<div>
<ul class="clients-list has-scrollbar">

<li className="clients-item">
    
        <img src={ThunderMac} alt="" className="img-fluid"/>               
  
</li>
<li className="clients-item">
    
        <img src={ZentroMedia} alt="" className="img-fluid"/>                  
   
</li>
<li className="clients-item">
  
        <img src={WinHoldings} alt="" className="img-fluid"/>                 
  
</li>
<li className="clients-item">
 
        <img src={CuresTown} alt="" className="img-fluid"/>

</li>

<li className="clients-item">

        <img src={arbnb} alt="" className="img-fluid"/>
  
</li>



</ul>


    
</div>
                          









         
        </div>
    );
};

export default Client;