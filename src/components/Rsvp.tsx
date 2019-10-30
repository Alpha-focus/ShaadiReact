import React, { Component } from 'react';
import Menu from './Menu';
import Username from './Usernames';

class Rsvp extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Menu />
                <Username />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                            <div className="text-center mt-5">
                                {/* <h1 className="text-center" Style={"font-family: Rochester;color: #33305c"}>Please enter your email
</h1><h1 className="text-center" Style={"font-family: Rochester;color: #33305c"}>to RSVP Reserve your room </h1>
                                <input type="email" placeholder="Enter Your email" className="mt-5" Style={"border:white;border-bottom:1px solid grey;width:30%"} /><br></br>
                                <button className="btn mt-5 pl-4 pr-4" Style={"border-radius:25px;background-color: #00ffd8;"}>Next</button> */}
  <h1 className="text-center" >Please enter your email</h1>
        <h1 className="text-center" >to RSVP Reserve your room </h1>
                                <input type="email" placeholder="Enter Your email" className="mt-5"  /><br></br>
                                <button className="btn mt-5 pl-4 pr-4" >Next</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img src={'./image/leaf-faq.png'} alt="shaadi" Style={"width:19%"}/> */}
                <img src={'./img/leaf-faq.png'} alt="shaadi" />

            </div>
        );
    }
}

export default Rsvp;
