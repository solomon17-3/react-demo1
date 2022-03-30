import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core'; //Buttonをインポート

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example</div>

                        <div className="card-body">Im an example component!</div>
                        <Button color="primary" variant="contained" href={'/'}>Hello World</Button> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;



