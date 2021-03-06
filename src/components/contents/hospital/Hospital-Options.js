import HospitalHeader from "../../headers/hospital";
import bagRecievedImg from '../../../imgs/bag recieved.jpeg'
import trackBloodImg from '../../../imgs/track blood.jpg'
import bagUsedImg from '../../../imgs/bag used.jpg'

import {Link} from 'react-router-dom'

function hospitalOptions(){
    return(
        <div>
            <HospitalHeader/>
            <div id="carouselMultiItemExample" className="carousel slide carousel-dark text-center" data-mdb-ride="carousel">

<div className="carousel-inner py-4" >
 
  <div className="carousel-item active">
    <div className="container">
      <div className="row" id='row'>
        <div className="col-lg-4" id ="col-lg-44">
          <div className="card">
            <img
              src={bagRecievedImg}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Blood Bag Recieved</h5>
              <p className="card-text">
                When you recieve a blood bag, you can confirm here, Please.
              </p>
              <Link to="/HospitalBagRecieved" className="btn btn-danger">Confirm</Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 d-none d-lg-block" id="col-lg-43">
          <div className="card">
            <img
              src={trackBloodImg}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Track a Blood Bag</h5>
              <p className="card-text">
                If you want to track a specific bag, you can submit info here.
              </p>
              <Link to="/HospitalTrackBloodBagInfo" className="btn btn-danger">Confirm</Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 d-none d-lg-block" id="col-lg-42">
          <div className="card">
            <img
              src={bagUsedImg}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Blood Bag Used</h5>
              <p className="card-text">
                When you use a Blood Bag you should confirm here, Please.
              </p>
              <Link to="/HospitalBagUsed" className="btn btn-danger">Confirm</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

        </div>
);
}
export default hospitalOptions;