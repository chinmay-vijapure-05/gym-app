// https://mdbootstrap.com/docs/react/components/cards/
import React from "react";
import './Body.css'
import logo from './upload_video.jpg'

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';

function Body() {
    return (
        <MDBCard>
            <div className="cards">
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                    {/* 'https://mdbootstrap.com/img/new/standard/nature/111.webp' */}
                    <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    {/* <MDBCardTitle>Upload Video</MDBCardTitle> */}
                    <MDBBtn href='#'>Upload Video</MDBBtn>
                    <hr />
                    <MDBCardText>
                        Video format : .mp4
                        <br />
                        {/* <hr/> */}
                        Video size: less than 50 MB
                    </MDBCardText>
                    {/* <MDBBtn href='#'>Button</MDBBtn> */}
                </MDBCardBody>
            </div>
        </MDBCard>
    )
}

export default Body