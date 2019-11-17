import React, { Component } from 'react';
import Menu from './Menu';
import Username from './Usernames';

class Ourstory extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            details: {},
            groom: [],
            bride: []
        }
    }
    componentDidMount() {
        var groom = this.props.details.find((element: any) => element.eventStoryTypeId == 3);
        var bride = this.props.details.find((element: any) => element.eventStoryTypeId == 2);
        this.setState({ groom: groom });
        this.setState({ details: this.props.details })
        this.setState({ bride: bride });

        //console.log('groom',this.state.groom)
    }
    render() {
        return (
            <div className="right-flower">
                <div className="left-flower">
                    <div className="container-fluid ">
                        <Username eventDate={this.props.eventDate} hashTag={this.props.hashTag} />
                        <Menu />
                        <div className="container text-center p-3">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xl-6">
                                    <div className="m-5 p-5">
                                        <img src="../../img/female-img.png" alt="shaadi" />
                                        <h2 className="p-3">Aparna</h2>
                                        <h6 className="text-center ourstory-text">{this.state.bride.copy}</h6>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xl-6">
                                    <div className="m-5 p-5">
                                        <img src='../../img/male-img.png' alt="shaadi" />
                                        <h2 className="p-3">Gurbinder</h2>
                                        <h6 className="text-center ourstory-text">{this.state.groom.copy}</h6>
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
