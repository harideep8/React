import React from 'react';
import './App.css';
import Data from './data/data.json';

class Profile extends React.Component{
    render(){
        var indexValue=this.props.location.data.id;
        var specificProfile=Data.profiles[indexValue];
        return(
            <section className="parent">
<div className="card"> 
<div className="card-top">
<h3> {specificProfile.basicInformation.name} </h3>
</div>

<div className="card-bottom">
<a href={"mailto:"+specificProfile.basicInformation.email}> 
{specificProfile.basicInformation.email}  </a> <br />

<a href={"tel:"+specificProfile.basicInformation.mobile}> 
{specificProfile.basicInformation.mobile}</a>
</div>
                
</div>

<div className="card2">
    <div className="card-bottom">
          <h2> Summary </h2>
    </div>
    <div className="card-top">
        {specificProfile.summary.map((i,j)=>(
            <ul>
            
            <p> {i.exp} </p>
            </ul>
            ))}
    </div>

    <div className="card-bottom">
          <h2> Educational Qualifications</h2>
    </div>

    <div className="card-top">
        {specificProfile.education.map((i,j)=>(
            <ul>
            <li> {i.degree} </li>
            <p> {i.institution} </p>
            </ul>
            ))}
    </div>

    <div className="card-bottom">
          <h2> Skillset</h2>
    </div>
    <div className="card-top">
        {specificProfile.skillset.map((i,j)=>(
            <ul>
            <li>{i.pro} </li><br />
            <li> {i.fram} </li><br />
            <li>{i.os} </li><br />
            <li> {i.web} </li><br />
            </ul>
            ))}
    </div>

    <div className="card-bottom">
          <h2> Global Certifications</h2>
    </div>
    <div className="card-top">
        {specificProfile.certifications.map((i,j)=>(
            <ul>
            <li>{i.python} </li>
            <p> {i.univercity} </p>
            </ul>
            ))}
    </div>
</div>

            </section>
        )
    }
}

export default Profile;
