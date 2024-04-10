import { useEffect, useState } from 'react'

const ImageAfterUpdoad = ({ setCopyAlert, copyAlert, url, setUploaded, filteredImage, setFilteredImage, fileSrc, setFileSrc }) => {
  const [filter, setFilter] = useState('');
  const imgUrl = `http://localhost:4000/${url}`
  const handleButton = () => {
    navigator.clipboard.writeText(imgUrl)
    setCopyAlert(true)
  }

  const closeButton = () => {
    setUploaded(false);
    setFilteredImage(null);
    setFileSrc();
  }


  const applyFilter = () => {
    if (!fileSrc) return;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = filteredImage;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      if (filter === 'grayscale') {
        ctx.filter = 'grayscale(100%)';
      } else if (filter === 'sepia') {
        ctx.filter = 'sepia(100%)';
      }

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      setFilteredImage(canvas.toDataURL('image/jpeg'));
    };
  };
  useEffect(() => {
    setTimeout(() => {
      setCopyAlert(false)
    }, 2500)
  }, [copyAlert])

  return (
    <div className='after-image-contaner'>
      {url !== undefined ? (
        <>
          <p className='sucess-text'>Uploaded Successfully!</p>
          <h5>Original Image</h5>
          <img src={imgUrl} width='100%' alt='image' className='img' />
          <h5>Filtered Image</h5>
          <img src={filteredImage} width='100%' alt='image' className='img' />
          <div className='url-contant'>
            <label>
              <input
                type="radio"
                value="grayscale"
                checked={filter === 'grayscale'}
                onChange={(e) => setFilter(e.target.value)}
              />
              Grayscale
            </label>
            <label>
              <input
                type="radio"
                value="sepia"
                checked={filter === 'sepia'}
                onChange={(e) => setFilter(e.target.value)}
              />
              Sepia
            </label>
            <button className='copy-btn' onClick={applyFilter}>Apply Filter</button>
            <input
              type='url'
              name='copyImage'
              className='image-url'
              readOnly
              value={imgUrl}
            />
            <button className='copy-btn' onClick={() => handleButton()}>
              copy Link
            </button>
            <button className='close-btn' onClick={() => closeButton()}>
              close
            </button>
          </div>
        </>
      ) : (
        <>
          <span class='material-icons error-icon'>error</span>
          <p className='error-text'>something went wrong please try again!!!</p>
          <a className='try-btn' href='/'>
            Try Agen
          </a>
        </>
      )}
    </div>
  )
}
export default ImageAfterUpdoad
