import React, { Component } from 'react';
require('dotenv').config();

class Upload extends Component{
    checkUploadResult = (error, result) => {
        let { event, info } = result;
        let { handleCloudinary} = this.props;
        if(event === 'success'){ 
            handleCloudinary({ image_url: info.url });
        }
    }
    
    render(){
        const { REACT_APP_CLOUDNAME } = process.env;
        var widget;
        if( window.cloudinary ) {
            let { uploadDestination } = this.props;
            widget = window.cloudinary.createUploadWidget(
                {
                    cloudName: `${REACT_APP_CLOUDNAME}`,
                    uploadPreset: `${uploadDestination}`,
                    sources: ['local', 'url', 'facebook', 'instagram'],
                    Default: false
                },
                ( error, result ) => {
                    this.checkUploadResult(error, result);
                }
            );
        }
        return(
            <button className='upload' onClick={ () => widget.open() } >Upload Image</button>
        );
    }
}

export default Upload;