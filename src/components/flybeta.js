import React from 'react';
// import logo from '../images/FLYBETA LOGO.png';
import wallpaper from '../images/ImageReaderArticle1 (1).jpg'
import "../css/mycss.css";

const Flybeta =()=>{
    
  
        
    
      return (
        <div className="App">
       
       
       <div class="card">
        <div class="card-body waves-effect waves-light">
          <div class="row">
            <div class="col-md-3">
            <img alt='logo' width="130px" src={wallpaper}/>
            </div>
            <div class="col-md-6">
              <p class="feature-title"><strong>Osun ree parada</strong></p>
              <p>4 Nights / 5 Days</p>
              <a href="http" class="btn-floating btn-sm border border-warning waves-effect waves-light"><i
                  class="home fa fa-bed"></i></a>
              <a   href="http" class="btn-floating btn-sm border border-warning waves-effect waves-light"> <i
                  class="home fa fa-binoculars"></i>
            <a  href="http" class="btn-floating btn-sm border border-warning waves-effect waves-light"><i
                    class="home fa fa-car"></i></a>
           <a  href="http" class="btn-floating btn-sm border border-warning waves-effect waves-light"><i
                    class="home fa fa-cutlery"></i></a>
              </a>
            </div>
            <div class="col-md-3">
              <h5 class="feature-title">From</h5>
              <p class="grey-text">#224,500 </p>
              <button type="button" class="btn btn-md btn-warning  mb-3">details</button>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
      <div class="card-body waves-effect waves-light">
        <div class="row">
          <div class="col-md-3">
          <img alt='logo' width="130px" src={wallpaper}/>
          </div>
          <div class="col-md-6">
            <p class="feature-title"><strong>Osun ree parada</strong></p>
            <p>4 Nights / 5 Days</p>
            <a href="http" class="btn-floating btn-sm border border-warning waves-effect waves-light"><i
                class="home fa fa-bed"></i></a>
            <a   href="http" class="btn-floating btn-sm border border-warning waves-effect waves-light"> <i
                class="home fa fa-binoculars"></i>
          <a  href="http" class="btn-floating btn-sm border border-warning waves-effect waves-light"><i
                  class="home fa fa-car"></i></a>
         <a  href="http" class="btn-floating btn-sm border border-warning waves-effect waves-light"><i
                  class="home fa fa-cutlery"></i></a>
            </a>
          </div>
          <div class="col-md-3">
            <h5 class="feature-title">From</h5>
            <p class="grey-text">#224,500 </p>
            <button type="button" class="btn btn-md btn-warning  mb-3">details</button>
          </div>
        </div>
      </div>
    </div>
      
   


      
         
            
        </div>
      );
    
  }

  export default Flybeta;