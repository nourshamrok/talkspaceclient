// src/components/ImageUploadWithServer/ImageUploadWithServer.tsx
import React, { useState } from "react";
import { uploadImageToServer } from "../../services/UploadService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ImageUploadWithServerProps {
  image: File;
  expirationTime: string; // Add expirationTime as a prop
  onUploadComplete: (url: string) => void;
}

const ImageUploadWithServer: React.FC<ImageUploadWithServerProps> = ({
  image,
  expirationTime,
  onUploadComplete,
}) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // Toastify notification
  const notifySuccess = (message: string) => toast.success(message);
  const notifyError = (message: string) => toast.error(message);

  const handleUpload = async () => {
    setIsUploading(true);
    try {
      // Pass both image and expirationTime to the upload service
      const url = await uploadImageToServer(image, expirationTime);
      setImageUrl(url);
      onUploadComplete(url);
      notifySuccess(`Image uploaded successfully! URL: ${url}`);
    } catch (error: any) {
      notifyError(error.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleCopyLink = () => {
    if (imageUrl) {
      navigator.clipboard.writeText(imageUrl);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div
      style={{
        marginBottom: "20px",
        border: "1px solid #ddd",
        padding: "10px",
      }}
    >
      <img
        src={URL.createObjectURL(image)}
        alt="Preview"
        style={{ width: "150px", height: "auto" }}
      />
      <div>
        <button onClick={handleUpload} disabled={isUploading}>
          {isUploading ? "Uploading..." : "Upload Image"}
        </button>
      </div>

      {imageUrl && (
        <div style={{ marginTop: "20px" }}>
          <p>Uploaded Image:</p>
          <img
            src={imageUrl}
            alt="Uploaded"
            style={{ width: "150px", height: "auto", marginBottom: "10px" }}
          />
          <div>
            <p>URL:</p>
            <input
              type="text"
              value={imageUrl}
              readOnly
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <button onClick={handleCopyLink}>Copy Link</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploadWithServer;
