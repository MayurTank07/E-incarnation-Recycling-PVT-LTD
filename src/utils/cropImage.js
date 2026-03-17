/**
 * Creates a cropped image from the original image and crop data
 * @param {string} imageSrc - Source image URL
 * @param {object} pixelCrop - Crop area in pixels
 * @param {number} rotation - Rotation angle in degrees
 * @returns {Promise<Blob>} - Cropped image as Blob
 */
export const createCroppedImage = async (imageSrc, pixelCrop, rotation = 0) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

  canvas.width = safeArea;
  canvas.height = safeArea;

  ctx.translate(safeArea / 2, safeArea / 2);
  ctx.rotate((rotation * Math.PI) / 180);
  ctx.translate(-safeArea / 2, -safeArea / 2);

  ctx.drawImage(
    image,
    safeArea / 2 - image.width * 0.5,
    safeArea / 2 - image.height * 0.5
  );

  const data = ctx.getImageData(0, 0, safeArea, safeArea);

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.putImageData(
    data,
    Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
    Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
  );

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob);
    }, 'image/jpeg', 0.95);
  });
};

/**
 * Helper function to create an image element from a URL
 * @param {string} url - Image URL
 * @returns {Promise<HTMLImageElement>}
 */
const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = url;
  });

/**
 * Converts a Blob to a File object
 * @param {Blob} blob - The blob to convert
 * @param {string} fileName - Name for the file
 * @returns {File}
 */
export const blobToFile = (blob, fileName) => {
  return new File([blob], fileName, { type: blob.type });
};
