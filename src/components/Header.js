import React from 'react';
// import { Jumbotron,} from 'reactstrap';
import logo from '../images/FLYBETA LOGO.png'
import wallpaper from '../images/wallpaper.jpg'

const Headerflight =()=> {
        
        const message = 'Book Your Ultimate Traveling Experience'
        return (
            <div>
              
              
        <div className="top_nav">
           <div>
              <img alt='logo' width="130px" src={logo}/>
            </div>
      
          <div>
           <p>login</p>  
           
          </div>
       </div>
        
      <div className='welcome_message_div'>
          <h1 className='welcome_message_text'>{message}</h1>
                    
                     
           <img className='welcome_message_img' src={wallpaper} width='100%' height="300px" alt='wallpaper'/>
      </div>
            
            </div>
        
            );
    
 


 
};

export default Headerflight;
