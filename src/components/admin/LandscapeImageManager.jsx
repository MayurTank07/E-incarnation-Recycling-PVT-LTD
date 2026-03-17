import React, { useState, useEffect } from 'react';
import { api } from '../../utils/api';
import { Save, Image as ImageIcon, Trash2, Crop } from 'lucide-react';
import ImageUpload from './ImageUpload';
import ImageCropModal from './ImageCropModal';
import { createCroppedImage, blobToFile } from '../../utils/cropImage';

const LandscapeImageManager = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    imagePublicId: ''
  });
  const [showCropModal, setShowCropModal] = useState(false);
  const [tempImage, setTempImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await api.get('/about-page');
      setAboutData(response.data);
      
      if (response.data?.landscapeImage) {
        setFormData({
          title: response.data.landscapeImage.title || '',
          description: response.data.landscapeImage.description || '',
          image: response.data.landscapeImage.image || '',
          imagePublicId: response.data.landscapeImage.imagePublicId || ''
        });
      }
    } catch (error) {
      console.error('Error fetching about page data:', error);
      alert('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put('/about-page/landscape-image', formData);
      alert('Landscape image section updated successfully!');
      fetchData();
    } catch (error) {
      console.error('Error updating landscape image:', error);
      alert('Failed to update landscape image section');
    }
  };

  const handleImageSelect = (imageData) => {
    if (imageData) {
      setTempImage(imageData.url);
      setShowCropModal(true);
    }
  };

  const handleCropComplete = async (cropData) => {
    try {
      setUploading(true);
      const croppedBlob = await createCroppedImage(
        tempImage,
        cropData.croppedAreaPixels,
        cropData.rotation
      );
      
      const croppedFile = blobToFile(croppedBlob, 'landscape-cropped.jpg');
      
      const formDataUpload = new FormData();
      formDataUpload.append('image', croppedFile);
      formDataUpload.append('folder', 'eincarnation/about/landscape');
      
      const response = await api.post('/upload/image', formDataUpload, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      if (response.data.success) {
        setFormData({
          ...formData,
          image: response.data.url,
          imagePublicId: response.data.publicId
        });
        setShowCropModal(false);
        setTempImage(null);
      }
    } catch (error) {
      console.error('Error uploading cropped image:', error);
      alert('Failed to upload cropped image');
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-[#1A0185]"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {showCropModal && tempImage && (
        <ImageCropModal
          image={tempImage}
          onCropComplete={handleCropComplete}
          onClose={() => {
            setShowCropModal(false);
            setTempImage(null);
          }}
          aspectRatio={3 / 1}
        />
      )}
      
      {uploading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-[#1A0185]"></div>
            <p className="text-gray-700 font-medium">Uploading cropped image...</p>
          </div>
        </div>
      )}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6">
          <ImageIcon size={28} className="text-[#1A0185]" />
          <h2 className="text-2xl font-bold text-[#1A0185]">Landscape Image Section</h2>
        </div>

        <p className="text-gray-600 mb-6">
          This section appears below the Core Team members on the About page. It displays a large landscape image with optional title and description.
        </p>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Section Title (Optional)</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="e.g., Our Commitment to Excellence"
            />
            <p className="text-xs text-gray-500 mt-1">Leave empty if you don't want a title</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description (Optional)</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg"
              rows="4"
              placeholder="Add a description for this section..."
            />
            <p className="text-xs text-gray-500 mt-1">This text will appear below the image</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Landscape Image *</label>
            <div className="space-y-3">
              <ImageUpload
                label=""
                currentImage={formData.image}
                onImageChange={handleImageSelect}
                folder="eincarnation/about/landscape"
              />
              {formData.image && (
                <button
                  type="button"
                  onClick={() => {
                    setTempImage(formData.image);
                    setShowCropModal(true);
                  }}
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2 transition-colors"
                >
                  <Crop size={18} />
                  Crop & Reposition Image
                </button>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Recommended size: 1200x400px or wider. Upload an image, then use the crop tool to position it perfectly.
            </p>
          </div>

          {/* Preview */}
          {formData.image && (
            <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
              <h3 className="text-sm font-bold mb-3 text-gray-700">Preview:</h3>
              <div className="space-y-3">
                <div className="w-full h-48 bg-[#EEEBD9] rounded-lg overflow-hidden">
                  <img 
                    src={formData.image} 
                    alt="Landscape preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {formData.title && (
                  <h4 className="text-xl font-semibold text-[#1e1494]">{formData.title}</h4>
                )}
                {formData.description && (
                  <p className="text-sm text-gray-700">{formData.description}</p>
                )}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-[#1A0185] text-white px-6 py-3 rounded-lg hover:bg-[#3451A3] flex items-center gap-2 transition-colors"
            >
              <Save size={18} /> Save Landscape Section
            </button>
            
            {formData.image && (
              <button
                type="button"
                onClick={() => {
                  if (window.confirm('Are you sure you want to remove the landscape image?')) {
                    setFormData({
                      title: '',
                      description: '',
                      image: '',
                      imagePublicId: ''
                    });
                  }
                }}
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 flex items-center gap-2 transition-colors"
              >
                <Trash2 size={18} /> Clear Section
              </button>
            )}
          </div>
        </form>

        {/* Info Box */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-bold text-blue-900 mb-2">💡 Usage Tips:</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• This section is displayed after all team members on the About page</li>
            <li>• Use a high-quality, wide landscape image for best results</li>
            <li>• The image will automatically adapt to different screen sizes</li>
            <li>• Title and description are optional - you can use just the image if preferred</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandscapeImageManager;
