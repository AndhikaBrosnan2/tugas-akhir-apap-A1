import React, {Component} from 'react';
import {Toast} from 'react-bootstrap';


export default class MyToast extends Component {

    render(){
        const toastCss = {
            position:'fixed',
            top:'20px',
            right:'20px',
            zIndex:1,
            boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        };

        return(
            <div style={this.props.show? toastCss : null}>
                <Toast className={"border text-white border-success bg-success"} show={this.props.show}>
                    <Toast.Header closeButton={false} className={"bg-success text-white"}>
                        <strong className="mr-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>
                        {this.props.message}
                    </Toast.Body>
                </Toast>
            </div>
        );
    };
}