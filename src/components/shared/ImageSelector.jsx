import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'
import { useState } from 'react'

const dummyRequest = ({ onSuccess }) => {
  setTimeout(() => {
    onSuccess('ok')
  }, 0)
}

const ImageSelector = ({ action, disabled }) => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState()
  const getBase64 = (img, callback) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }
  const beforeUpload = (file) => {
    const isJpgOrPng =
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/webp'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG/WEBP file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
  }

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false)
        setImageUrl(url)
        action(url)
      })
    }
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  )
  return (
    <>
      <Upload
        disabled={disabled}
        name="avatar"
        listType="picture-card"
        customRequest={dummyRequest}
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={(e) => handleChange(e)}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </>
  )
}
export default ImageSelector
