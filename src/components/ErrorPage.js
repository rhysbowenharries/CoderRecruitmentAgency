import React from 'react';
import logo from '../containers/uhuh.gif'

const ErrorPage = () => (

<div className="ErrorPageContainer">
<div className="ErrorImage">
<img src={logo} alt="you didn't say the magic word"></img>
</div>
{/* <div></div> */}
<h3>You seem to have got lost. Best return home.</h3>

</div>
);


export default ErrorPage;