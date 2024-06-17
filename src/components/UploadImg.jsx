import React, { useState } from 'react'

function UploadImg({onChange}) {
    const [fileName, setFileName] = useState('')

    const fileInputChange = (e) => {
        const file = e.target.files[0]
        setFileName(file ? file.name : '')
        onChange(file)
    }

  return (
    <div className="custom-file-upload-input">
    <label htmlFor="fileInput" className="upload-button">
        Upload
    </label>
    <input
        id="fileInput"
        type="file"
        className="file-input"
        onChange={fileInputChange}
        required
    />
    <div className="file-name">
        <p>{fileName ? fileName : 'Upload your photo'}</p>
    </div>
</div>

  )
}

export default UploadImg