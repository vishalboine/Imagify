import img from './image.svg'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ImageContainer = ({ setIsUploading, setUploaded, setUrl,filteredImage, setFilteredImage, fileSrc, setFileSrc }) => {
  const [] = useState(null);

  const buttonHandler = (img) => {
    setFileSrc(img)
    setFilteredImage(URL.createObjectURL(img));
  }
  const addImage = async () => {
    // console.log(fileSrc)

    try {
      setIsUploading(true)
      const data = new FormData()
      data.append('myfile', fileSrc)
      let response = await axios.post('http://localhost:4000/api/v1/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      if (response.status === 200) {
        setUrl(response.data.images.filePath)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => {
        setIsUploading(false)
        setUploaded(true)
      }, 1000)
    }
  }
  useEffect(() => {
    if (!fileSrc) return
    addImage()
  }, [fileSrc])

  return (
    <div className='img-content'>
      <header>
        <h1>Upload your image</h1>
        <p>File should be Jpeg, Png,...</p>
      </header>
      <div
        className='img-uploader'
        onDragOver={(e) => {
          e.preventDefault()
        }}
        onDrop={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setFileSrc(e.dataTransfer.files[0])
        }}
      >
        <img src={img} alt='data.svg...' />
        <p className=''>Drag & Drop your image here</p>
      </div>

      <p className='or'>or</p>

      <input
        type='file'
        accept='image/*'
        id='file'
        onChange={(e) => buttonHandler(e.target.files[0])}
      />
      <label htmlFor='file'>Browse Files</label>
    </div>
  )
}

export default ImageContainer
