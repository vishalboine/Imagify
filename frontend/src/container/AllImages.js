import React, { useEffect } from "react";
import axios from 'axios';


const AllImages = (props) => {

    const { imageData, setImageData } = props;

    useEffect(() => {
        getAllImages();
    }, [])

    const getAllImages = async () => {
        try {
            let response = await axios.get('http://localhost:4000/api/v1/images')

            if (response.status === 200) {
                let allImages = []
                response.data.images.map((item) => {
                    allImages = [...allImages, item]
                })
                setImageData(allImages)
                // setUrl(response.data.images.filePath)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="all-images-container">
            <h4>All Images</h4>

            <table>
                <tr>
                    <th>Images</th>
                    <th>Creation Date</th>
                </tr>

                {
                    imageData.map((item) => {
                        // return <img src={`http://localhost:4000/${item}`} width='100%' alt='image' className='img' />
                        return <tr>
                            <td><a href={`http://localhost:4000/${item['filePath']}`} target="_blank">{item.fileName}</a></td>
                            <td>{item.date}</td>
                        </tr>
                    })
                }
            </table>

        </div>
    )

}

export default AllImages;