import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink,Button,Row, Col,Label, Input,} from 'reactstrap';
import classnames from 'classnames';
import '../css/mycss.css'


 class Flight extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    
    return (
      <div  id='tab_container'>
        <Nav tabs id="tabs">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
            
              
              <i className="fas fa-plane"></i>
              Flights
              
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
            
            <i className="fas fa-home"></i>
            Hotels
        
            </NavLink>
          </NavItem>
          <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '3' })}
            onClick={() => { this.toggle('3'); }}
          >
         
          <i className="fas fa-car"></i>
          Car
          
          </NavLink>
        </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              
              <div className='flight_inputs'>
              {/*first-start*/} 
              <Row>
               
                <Col sm="3" className="first_input_row">
                     <Label>From</Label>
                  <Input type="text" name="textInput" id="from_Destination" placeholder="Enter name of city or airport" />
                 
            
                </Col>
                <Col sm="3" className="first_input_row">
                      <Label>To</Label>
                 <Input type="text" id="to_textDestination" placeholder="Enter name of city or airport" />
                
                </Col>

                <Col sm="3" className="first_input_row">
                     <Label>No. of Passengers</Label>        
                <Input type="number" value='1' id="passenger_Destination" placeholder="No of Passengers" />
               
               </Col>
               
              <Col sm='3'>
               
              
              </Col>
              </Row>

              {/*first-end*/} 
              {/*second-start*/}
              <Row>
               
                <Col sm="3" className="second_input_row">
                         <Label>Departure Date</Label>
                  <Input type="date"   value="2019-01-01" id="departure_Date" name="textInput"/>
                 
            
                </Col>
                <Col sm="3" className="second_input_row">
                               <Label>Seat Class</Label>
                 <Input type="text" id="seat_class" placeholder="Seat Class" />
                
                </Col>

                <Col sm="3" className="second_input_row">
            
           
                <Button className="search_flight">Book & Continue with Hotel</Button>
              
               </Col>
               
              
              </Row> 
              {/*second-end*/} 
              </div> 
               
            </Row>
          </TabPane>
          <TabPane tabId="2">
          <Row>
              <div className="hotel_inputs">
        
               <Row>
                  <Col sm="4" className="city_text_row">
                   <Label>City</Label>
                <Input type="text" name="textInput" id="city_input" placeholder="City, Hotel or Area" />
           
      
           </Col>
     
          <Col sm="4" className="city_text_row">
                  <Label>Check in</Label>
          <Input type="date" value="2019-01-01" id="check_in_input" placeholder="Departing" />
         
         </Col>
         
        <Col sm='4' className="city_text_row">
                   <Label>Check out</Label>
        <Input type="date" value="2019-01-01" id="check_out_input" placeholder="Departing" />
        </Col>
        </Row>
        <Row>
        <Col sm="4" className="city_text_row">
                  <Label>Number of Rooms</Label>
        <Input type="number" placeholder="Rooms" id="no_of_rooms_input" />
       
       </Col>

   
       <Col sm="4" className="city_text_row">              
          <Button type="button" id="search_button" className="btn btn-primary btn-lg btn-block">Book & Continue with Ride</Button>
        </Col>
   
        </Row>
        </div>
        
      </Row>
          </TabPane>

          <TabPane tabId="3">
              
           
          <Row>
              
          <div className="cars_inputs">
          <Row>
            <Col sm="4" className="cars_inputs_row">
                   <Label>From</Label>
                <Input type="text" name="textInput" id="from_text_cars" placeholder="From" />      
            </Col>
        
        <Col sm="4" className="cars_inputs_row">
                   <Label>To</Label>
              <Input type="text" name="textInput" id="to_text_cars" placeholder="City,Hotel or Area" />      
        </Col>

        <Col sm="4" className="cars_inputs_row">
                   <Label>Date</Label>
              <Input type="date" name="textInput" id="date_input_car" placeholder="City,Hotel or Area" />      
        </Col>

        <Col sm="4" className="cars_inputs_row">
                   <Label>Time</Label>
        <Input type="time"  id="time_input_car"  name="appt" min="9:00" max="18:00"  required/>
       </Col>

       <Col sm="4" className="cars_inputs_row">              
          <Button type="button" id="search_button_car" className="btn btn-primary btn-lg btn-block">Submit All</Button>
        </Col>
   
        </Row>
            
          </div> 
      </Row>



        </TabPane>

        </TabContent>
      </div>
    );
  }
}

export default Flight;