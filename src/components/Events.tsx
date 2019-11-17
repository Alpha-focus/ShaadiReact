import React, { Component } from 'react';
import Menu from './Menu';
import Username from './Usernames';
//import lightFormat from 'date-fns/lightFormat';
import { format } from 'date-fns';

class Events extends Component<any, any>{
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="right-flower">
                <div className="left-flower">
                    <div className="container-fluid ">
                        <Username eventDate={this.props.eventDate} hashTag={this.props.hashTag} />
                        <Menu />
                    </div>
                    <div className="container justify-content-center">
                        <div className="row">
                            <div className="col-lg-10 col-md-10 col-xl-10 col-sm-10 ">
                                <div className="faq-text mt-5">
                                    <div className="p-3">
                                        {
                                            this.props.events.map((event: any) => (
                                                <div>
                                                    <h4 className="font-weight-bold">{event.name}</h4>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4">
                                                            <ul className="fa-ul">
                                                                <li className="mt-2">
                                            <i className="fa fa-calendar-o" ></i> {format(new Date(event.startDateTime),'EEEE')}
                                                    </li>
                                                                <li className="mt-2">
                                                                    <i className="fa fa-clock-o"></i>  {format(new Date(event.startDateTime),'p')}
                                                    </li>
                                                                <li className="mt-2">
                                                                    <i className="fa fa-map-marker" ></i> {event.location}
                                                    </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6">
                                            <h6 className="text-justify " >{event.customMessage}</h6>
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                </div>
                                            ))
                                        }
                                        
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

export default Events;
