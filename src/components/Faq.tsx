import React,{Component} from 'react';
import Menu from './Menu';
import Username from './Usernames';

class Faq extends Component {
    render(){
        return (
        <div className="right-flower">
            <div className="left-flower">    
                <div className="container-fluid "> 
                <Username/>
                <Menu/>
                    <div className="container">
                    <div className="row">
                    <div className="col-lg-8 col-md-8 col-xl-8 col-sm-8 ">
                    <div className="faq-text mt-5">
                    <h1 className="faq">FAQ</h1>
                        <div className="p-3 question">
                            <h4 className="font-weight-bold">How to book a resort ?</h4>
                            <h6 className="text-justify " >Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.</h6>
                            <hr></hr>
                            <h4 className="font-weight-bold">How to book a resort ?</h4>
                            <h6 className="text-justify " >Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.</h6>
                            <hr></hr>
                            <h4 className="font-weight-bold">How to choose a right flight ?</h4>
                            <h6 className="text-justify" >Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.</h6>
                            <hr></hr>
                            <h4 className="font-weight-bold">How to book a resort ?</h4>
                            <h6 className="text-justify " >Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.</h6>
                            <hr></hr>
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
}

export default Faq;
