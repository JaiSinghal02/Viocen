import React,{useState,useEffect} from "react";
import './LoginBox.css'
import logoImage from '../../assets/images/logos/HOTEL-TYBEE.jpg'

export default function LoginBox(){
    const [logo,setLogo] = useState('')
    useEffect(()=>{
        setTimeout(()=>setLogo(logoImage),1500)
    },[])
    return(
        <div className="loginbox-container">
            <div className="loginbox-div">
                <div className="loginbox-logobar-div">
                    <div className="loginbox-logobar-logo">
                        {logo?
                            <img src={logo} alt="logo"/>
                            :
                            <p>Loading logo..</p>
                        }
                    </div>
                    <div className="loginbox-logobar-text">
                        <div>Welcome To</div>
                        <div>Hotel Tybee</div>
                    </div>
                </div>
                <div className="loginbox-content-div">
                    <p>By clicking to go online you agree to be bound by all these <a href="/">Terms of Service</a></p>
                    <p>Please enter your access code</p>
                    <div className="loginbox-content-inputarea-div">
                        <label>Access Code</label>
                        <div className="loginbox-content-inputarea">
                            <input type="text" className="loginbox-input"/>
                            <input type="Submit" value=">> Login >>" className="loginbox-input loginbox-button"/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}