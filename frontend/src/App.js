import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './container/Home';
import AllImages from './container/AllImages';
import Layout from './components/layout';

function App() {
  const [copyAlert, setCopyAlert] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [imageData, setImageData] = useState([])
  const [filteredImage, setFilteredImage] = useState(null);
  const [uploaded, setUploaded] = useState(false)
  const [url, setUrl] = useState('')
  const [fileSrc, setFileSrc] = useState()

  const homeProps = { isUploading, uploaded, setImageData, setUploaded, setIsUploading, url, setUrl, copyAlert, setCopyAlert, imageData,filteredImage, setFilteredImage, fileSrc, setFileSrc }
  const allImagesProps = { imageData, setImageData, filteredImage, setFilteredImage, fileSrc, setFileSrc }

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home {...homeProps} />} />
            <Route path="allImages" element={<AllImages {...allImagesProps} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
