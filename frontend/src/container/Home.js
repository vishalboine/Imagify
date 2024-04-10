import React from "react";
import Alert from '../components/alert';
import ImageContainer from '../components/ImageContainer';
import ImageAfterUpdoad from '../components/ImageAfterUpdoad';
import Uploading from '../components/Uploading';


const Home = (props) => {

    const {isUploading, uploaded, setImageData, setUploaded, setIsUploading, url, setUrl, copyAlert, setCopyAlert, imageData, filteredImage, setFilteredImage, fileSrc, setFileSrc} = props;
    return (
        <>
            {
                isUploading ? (
                    <Uploading />
                ) : (
                    !uploaded && (
                        <ImageContainer
                            setImageData={setImageData}
                            setIsUploading={setIsUploading}
                            setUploaded={setUploaded}
                            url={url}
                            setUrl={setUrl}
                            filteredImage={filteredImage}
                            setFilteredImage={setFilteredImage}
                            fileSrc={fileSrc} 
                            setFileSrc={setFileSrc}
                        />
                    )
                )
            }
            {
                uploaded && (
                    <ImageAfterUpdoad
                        url={url}
                        setUrl={setUrl}
                        setCopyAlert={setCopyAlert}
                        copyAlert={copyAlert}
                        imageData={imageData}
                        setUploaded={setUploaded}
                        filteredImage={filteredImage}
                        setFilteredImage={setFilteredImage}
                        fileSrc={fileSrc} 
                        setFileSrc={setFileSrc}
                    />
                )
            }
            {copyAlert && <Alert />}
        </>
    )

}

export default Home;