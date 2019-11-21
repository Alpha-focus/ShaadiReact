import React,{Component} from 'react';
import Menu from './Menu';
import Username from './Usernames';

class Faq extends Component <any,any>{
    render(){
        return (
        <div className="right-flower">
            <div className="left-flower">    
                <div className="container-fluid "> 
                <Username eventDate={this.props.eventDate} hashTag={this.props.hashTag} />
                <Menu/>
                    <div className="container animate">
                    <div className="row">
                    <div className="col-lg-8 col-md-8 col-xl-8 col-sm-8 ">
                    <div className="faq-text mt-5">
                    <h1 className="faq">FAQ</h1>
                        <div className="p-3 question">
                            {this.props.faqs}
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
