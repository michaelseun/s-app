import { useState } from 'react';
import axios from 'axios';
 
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [resourceTitle, setResourceTitle] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!resourceTitle || !file) {
      setMessage('Please provide a title and select a file.');
      return;
    }
    const formData = new FormData();
    formData.append('title', resourceTitle);
    formData.append('file', file);
    try {
      await axios.post('/api/admin/resources', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
      setMessage('Resource uploaded successfully');
      setResourceTitle('');
      setFile(null);
    } catch (err) {
      setMessage('Upload failed');
    }
  };

  return (
    <div className="register-wrapper">
      <div className="form-container dashboard-container">
        <form className="register-form" onSubmit={handleUpload}>
          <h1>Admin Dashboard</h1>
          <div className="input-box">
            <input type="text" placeholder="Resource Title" value={resourceTitle} onChange={(e) => setResourceTitle(e.target.value)} required />
          </div>
          <div className="input-box">
            <input type="file" onChange={handleFileChange} required />
          </div>
          <button type="submit" className="upload-button">Upload Resource</button>
          {message && <p style={{ color: '#fff', textAlign: 'center' }}>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;