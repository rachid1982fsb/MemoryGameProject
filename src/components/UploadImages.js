import React from 'react';
import S3FileUpload from 'react-s3';


const config = {
    bucketName: 'memorycardgame',
    dirName: 'images', /* optional */
    region: 'us-west-2',
    accessKeyId: 'AKIAII7W4AW7GUKWPHIA',
    secretAccessKey: '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',
}

const UploadImages=()=>{
let image =""
   const upload=(e)=>{
        S3FileUpload.uploadFile(e.target.files[0], config)
        .then((data)=> {
            image=data.location
            console.log(image)
        })
        .catch( (err)=>{
            alert(err)
        })
    }

    return (<>
             <h3>Uploading</h3>
             <input type="file" onChange={upload}/>
            </>)

}

export default UploadImages