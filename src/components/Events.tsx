import React,{Component} from 'react';
import Menu from './Menu';
import Username from './Usernames';
class Events extends Component {
    render(){
        return (
            <div className="container-fluid ">
                <Username/>
                <Menu/>
            </div>
        );
    }
}

export default Events;
