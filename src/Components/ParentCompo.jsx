import React , { createRef, PureComponent } from 'react';
import PureCompo from './PureCompo.jsx';

class ParentCompo extends PureComponent {
    constructor() {
        super();
        this.componentRef = createRef();
    };
    render() {
        console.log(this.componentRef)
        return (
            <PureCompo ref={this.componentRef} />
        );
    };
};

export default ParentCompo;