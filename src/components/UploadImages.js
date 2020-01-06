import React from 'react';
import S3FileUpload from 'react-s3';


const config = {
    bucketName: 'memorycardgame',
    dirName: 'images', /* optional */
    region: 'us-west-2',
    accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
}

const UploadImages=(props)=>{

   const upload=(e)=>{
        S3FileUpload.uploadFile(e.target.files[0], config)
        .then((data)=> {
            props.onHandleUpload(data.location)
        })
        .catch( (err)=>{
            alert(err)
        })
        
    }

    return (
        <>
             <h3>Upload your own Images</h3>
             <input type="file" onChange={upload}/>
            </>)

}

export default UploadImages
