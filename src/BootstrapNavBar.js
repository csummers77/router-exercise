import React, {Component} from 'react'

class BootstrapNavBar extends Component{
  render(){
    return(
		<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <a className="navbar-brand" href="#">WebSiteName</a>
		    </div>
		    <ul className="nav navbar-nav">
		    	<li><a link="/">Home</a></li>
		      	<li><a link="/one">One</a></li>
		      	<li><a link="/two">Two</a></li>
		      	<li><a link="/three">Three</a></li>
		      	<li><a link="/four">Four</a></li>
		    </ul>
		  </div>
		</nav>
	)
  }
}

export default BootstrapNavBar
