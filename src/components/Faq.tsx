import React,{Component} from 'react';
import Menu from './Menu';
import Username from './Usernames';
    class Faq extends Component {
    render(){
        return (
        <div>
            <div className="container-fluid"> 
            <Username/>
            <Menu/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-xl-8 col-sm-8 ">
                        <div className="faq-text mt-5">
                        <h1>FAQ</h1>
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
                        <div className="">
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
                    <img src={'./img/leaf-faq.png'} alt="shaadi" />
                    {/* <img src={'./img/leaf-faq.png'} alt="shaadi" Style={"width:20vw"}/> */}

        </div>
        );
    }
}

export default Faq;
