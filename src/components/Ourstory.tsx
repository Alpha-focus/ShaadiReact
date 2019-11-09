import React,{Component} from 'react';
import Menu from './Menu';
import Username from './Usernames';

    class Ourstory extends Component {
        render(){
            return (
            <div className="right-flower">
            <div className="left-flower">
                <div className="container-fluid ">
                <Username/>
                <Menu/>
                    <div className="container text-center p-3">
                        <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xl-6">
                            <div className="m-5 p-5">
                            <img src="../../img/female-img.png" alt="shaadi"/>
                            <h2 className="p-3">Aparna</h2>
                            <h6 className="text-center ourstory-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.</h6>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xl-6">
                            <div className="m-5 p-5">
                            <img src='../../img/male-img.png' alt="shaadi"/>
                            <h2 className="p-3">Gurbinder</h2>
                            <h6 className="text-center ourstory-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.</h6>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            );
        }
    }

export default Ourstory;
