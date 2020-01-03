import React from 'react';
import S3FileUpload from 'react-s3';


const config = {
    bucketName: 'memorycardgame',
    dirName: 'images', /* optional */
    region: 'us-west-2',
    accessKeyId: 'AKIAT4T7JSMVE2WQMIYD',
    secretAccessKey: '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',
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
