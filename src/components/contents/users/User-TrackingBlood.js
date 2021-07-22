import UserHeader from "../../headers/user";
import readyImg from '../../../imgs/ready.png'
import shippedImg from '../../../imgs/Shipped.png'
import deliveredImg from '../../../imgs/delivered.png'
import usedImg from '../../../imgs/used.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function userTrackingBlood(){
    return(
        <div>
            <UserHeader/>
            <div className="container px-1 px-md-4 py-5 mx-auto TrackingBloodPage">
    <div className="card">
        <div className="row d-flex justify-content-between px-3 top">
        <div className="info">
            <a href="/">
              <i className="info fa-2x" data-toggle="tooltip" title="Press to view Bag history"><FontAwesomeIcon icon = {['fa' ,'info-circle']}/></i>
            </a>
          </div>
            <div className="container">
                <h5>Bag ID: <span class="text-danger font-weight-bold">5168496</span></h5>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-12">
                <ul id="progressbar" class="text-center">
                    <li className="active step0"></li>
                    <li className="active step0"></li>
                    <li className="active step0"></li>
                    <li className="step0"></li>
                </ul>
            </div>
        </div>
        <div className="row justify-content-between top">
            <div className="row d-flex icon-content"> <img class="icon" src={readyImg}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold">Bag is<br></br>Ready</p>
                </div>
            </div>
            <div className="row d-flex icon-content"> <img class="icon" src={shippedImg}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold">Bag is<br></br>En Route</p>
                </div>
            </div>
            <div className="row d-flex icon-content"> <img class="icon" src={deliveredImg}/>
                <div className="d-flex flex-column">
                   <p className="font-weight-bold">Bag<br></br>Delivered</p>
                </div>
            </div>
            <div className="row d-flex icon-content"> <img class="icon" src={usedImg}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold">Bag<br></br>Used</p>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
}
export default userTrackingBlood;