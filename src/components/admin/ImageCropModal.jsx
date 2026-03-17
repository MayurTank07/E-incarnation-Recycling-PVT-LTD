import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { X, Check, RotateCw } from 'lucide-react';

const ImageCropModal = ({ image, onCropComplete, onClose, aspectRatio = 3 / 1 }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  const onZoomChange = (zoom) => {
    setZoom(zoom);
  };

  const onCropCompleteCallback = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleSave = () => {
    onCropComplete({
      crop,
      zoom,
      rotation,
      croppedAreaPixels
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-[#1A0185]">Crop & Position Image</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cropper Area */}
        <div className="relative flex-1 bg-gray-900" style={{ minHeight: '400px' }}>
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={aspectRatio}
            onCropChange={onCropChange}
            onZoomChange={onZoomChange}
            onCropComplete={onCropCompleteCallback}
            style={{
              containerStyle: {
                width: '100%',
                height: '100%',
                backgroundColor: '#1a1a1a'
              }
            }}
          />
        </div>

        {/* Controls */}
        <div className="p-6 space-y-4 border-t bg-gray-50">
          {/* Zoom Control */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Zoom: {zoom.toFixed(1)}x
            </label>
            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => setZoom(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#1A0185]"
            />
          </div>

          {/* Rotation Control */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 flex items-center gap-2">
              <RotateCw size={16} />
              Rotation: {rotation}°
            </label>
            <input
              type="range"
              min={0}
              max={360}
              step={1}
              value={rotation}
              onChange={(e) => setRotation(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#1A0185]"
            />
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>💡 Tips:</strong> Drag the image to reposition it. Use the zoom slider to scale. 
              Rotate if needed. The highlighted area will be saved.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-end pt-2">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-[#1A0185] text-white rounded-lg hover:bg-[#3451A3] transition-colors font-medium flex items-center gap-2"
            >
              <Check size={18} />
              Apply Crop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCropModal;
