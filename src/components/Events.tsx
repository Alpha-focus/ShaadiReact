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
                    <div className="container animate justify-content-center">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                                <div className="faq-text mt-5">
                                    <div className="p-3">
                                        {
                                            this.props.events.map((event: any) => (
                                                <div>
                                                    <h4 className="font-weight-bold">{event.name}</h4>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 events-left-text">
                                                            <ul className="fa-ul ml-0">
                                                                <li className="mt-2">
                                                                    <i className="fa fa-calendar-o pr-3" ></i> {format(new Date(event.startDateTime), 'EEEE')}
                                                                </li>
                                                                <li className="mt-2">
                                                                    <i className="fa fa-clock-o pr-3"></i>  {format(new Date(event.startDateTime), 'p')}
                                                                </li>
                                                                <li className="mt-2">
                                                                    <i className="fa fa-map-marker pr-3" ></i> {event.location}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-8 col-xl-8 col-md-8 col-sm-8">
                                                            <h6 className="text-justify ml-5 mt-2" dangerouslySetInnerHTML={{ __html: event.customMessage }}></h6>
                                                        </div>
                                                    </div>
                                                    <hr />
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
