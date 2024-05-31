'use client'
import React, { useState } from 'react'
import { CldUploadWidget,CldImage } from 'next-cloudinary';


const UploadPage = () => {
    const [publicId, setPublicID] = useState();
    return (
        <>
        {publicId && <CldImage src={publicId} width={300} height={200}/>}
        <CldUploadWidget 
            uploadPreset='nhu6cudm' //unsign
            onSuccess={(result, widget)=>{
                console.log(result)
                if(result.event!='success') return
                setPublicID(result.info.public_id)
            }}
            options ={{
                sources: [
                    "local",
                    "google_drive",
                    "dropbox"
                ],
                multiple:false,
                maxFiles:5,
                styles: {
                    palette: {
                        window: "#F5F5F5",
                        sourceBg: "#FFFFFF",
                        windowBorder: "#90a0b3",
                        tabIcon: "#0094c7",
                        inactiveTabIcon: "#69778A",
                        menuIcons: "#0094C7",
                        link: "#53ad9d",
                        action: "#8F5DA5",
                        inProgress: "#0194c7",
                        complete: "#53ad9d",
                        error: "#c43737",
                        textDark: "#000000",
                        textLight: "#FFFFFF"
                    },
                    fonts: {
                        default: null,
                        "'Poppins', sans-serif": {
                            url: "https://fonts.googleapis.com/css?family=Poppins",
                            active: true
                        }
                    }
                }
            }}
        >
            {({ open })=>{
                return(
                    <button className='btn btn-primary' onClick={()=>open()}>
                        Upload
                    </button>
                )
            }
            }
        </CldUploadWidget>
        </>
    )
}

export default UploadPage