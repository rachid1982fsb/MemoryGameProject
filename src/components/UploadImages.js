import React from 'react';
import S3FileUpload from 'react-s3';


const config = {
    bucketName: 'memorycardgame',
    dirName: 'images', /* optional */
    region: 'us-west-2',
    accessKeyId: 'AKIAT4T7JSMVLX67LJFY',
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
            </>
            )
}

export default UploadImages