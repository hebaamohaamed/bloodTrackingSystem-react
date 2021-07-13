import HospitalHeader from "../../headers/hospital";

function hospitalLogin(){

    return(
<div>
        <HospitalHeader />
        <div className="login-box">
    <h2>Hospital login</h2>
    <form>
      <center>
        <div className="flex-c-m">
        <a href="#" class="login100-social-item bg1">
          <i className="fab fa-linkedin-in"></i>
        </a>
  
        <a href="#" class="login100-social-item bg2">
          <i className="fab fa-google"></i>
        </a>
  
        <a href="#" class="login100-social-item bg3">
          <i className="fab fa-yahoo"></i>
        </a>
      </div>
    </center>
    <center>
       <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Join Us
      </a>
    </center>
    </form>
  </div>
</div>
    );
}
export default hospitalLogin;