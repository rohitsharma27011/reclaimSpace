import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload, Input } from 'antd';

const props = {
  name: 'file',
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function ProfilePage() {

  const [profileImage, setProfileImage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    contactNo: '1234567890',
    altContactNo: '0987654321',
    pincode: '723121',
    address: '123 Main St, City, Country',
  });

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    message.success('Profile updated successfully!');
  };

  const handleUploadChange = (info) => {
    if (info.file.status === 'done') {
      // Mock example: Retrieve the uploaded file's URL
      const imageUrl = info.file.response.url || URL.createObjectURL(info.file.originFileObj);
      setProfileImage(imageUrl);
      message.success(`${info.file.name} uploaded successfully.`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} upload failed.`);
    }
  };

  return (
    <div className="flex justify-start">
      <div className=" h-full w-1/3 m-6 mb-0">
        <div
          id="profile-pic"
          className=" h-96 mt-6 ml-2 mr-2 flex flex-col items-center justify-center relative"
        >
          {/* Circle with uploaded image */}
          <div
            className="rounded-full border-4 border-blue-500 w-60 h-60 flex items-center justify-center bg-white absolute"
            style={{
              backgroundImage: profileImage ? `url(${profileImage})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 0 10px rgba(0, 0, 255, 0.6)',
            }}
          ></div>

          {/* Upload button */}
          <div className="mt-72">
            <Upload {...props} onChange={handleUploadChange}>
              <Button icon={<UploadOutlined />}>Edit</Button>
            </Upload>
          </div>
        </div>

        <div className="mt-0 ml-2 mr-2">
          <div className="m-4">
            <h2 className='text-lg'>Username</h2>
            <Input value="JohnDoe123" disabled />
          </div>
        </div>
      </div>

      <div id="details" className=" h-full w-2/3 p-6">
        <h2 className="text-lg font-semibold mb-4"></h2>
        {!isEditing ? (
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6">User Information</h3>

            {/* Name */}
            <div className="flex items-center space-x-4 m-6">
              <span className="font-medium text-gray-700 w-32">Name:</span>
              <div className="flex-1 bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-800">
                {formData.name || "N/A"}
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4 m-6">
              <span className="font-medium text-gray-700 w-32">Email:</span>
              <div className="flex-1 bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-800">
                {formData.email || "N/A"}
              </div>
            </div>

            {/* Contact No. */}
            <div className="flex items-center space-x-4 m-6">
              <span className="font-medium text-gray-700 w-32">Contact No.:</span>
              <div className="flex-1 bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-800">
                {formData.contactNo || "N/A"}
              </div>
            </div>

            {/* Alternative Contact No. */}
            <div className="flex items-center space-x-4 m-6">
              <span className="font-medium text-gray-700 w-32">Alt Contact No.:</span>
              <div className="flex-1 bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-800">
                {formData.altContactNo || "N/A"}
              </div>
            </div>

            <div className="flex items-center space-x-4 m-6">
              <span className="font-medium text-gray-700 w-32">Pincode:</span>
              <div className="flex-1 bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-800">
                {formData.pincode || "N/A"}
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-4 m-6">
              <span className="font-medium text-gray-700 w-32">Address:</span>
              <div className="flex-1 bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-800">
                {formData.address || "N/A"}
              </div>
            </div>

            {/* Edit Button */}
            <div className="flex justify-end mr-6">
              <Button type="primary" onClick={handleEditToggle}>
                Edit
              </Button>
            </div>
          </div>

        ) : (
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Contact No.</label>
              <Input
                type="tel"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Alternative Contact No.
              </label>
              <Input
                type="tel"
                name="altContactNo"
                value={formData.altContactNo}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Pincode.
              </label>
              <Input
                type="tel"
                name="picode"
                value={formData.pincode}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <Input.TextArea
                name="address"
                rows={3}
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex space-x-2">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button onClick={handleEditToggle}>Cancel</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
