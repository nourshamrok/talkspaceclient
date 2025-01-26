// src/components/MultipleImageUpload/MultipleImageUpload.tsx
import React, { useState } from "react";
import ImageWithExpiration from "../ImageWithExpiration/ImageWithExpiration";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageData from "../../interfaces/ImageData";
import ImageUploadWithServer from "../ImageUploadWithServer/ImageUploadWithServer";

const MultipleImageUpload: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      expirationTime: "", // Initially empty expiration time
      preview: URL.createObjectURL(file), // Create a preview URL
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleExpirationChange = (index: number, newExpirationTime: string) => {
    const updatedImages = [...images];
    updatedImages[index].expirationTime = newExpirationTime;
    setImages(updatedImages);
  };

  const handleUploadComplete = (imageUrl: string) => {
    toast.success(`Image uploaded successfully! URL: ${imageUrl}`);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      <div>
        {images.map((image, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <ImageWithExpiration
              image={image}
              onExpirationChange={(newExpirationTime: string) =>
                handleExpirationChange(index, newExpirationTime)
              }
            />
            <ImageUploadWithServer
              image={image.file}
              expirationTime={image.expirationTime} // Pass expiration time here
              onUploadComplete={handleUploadComplete}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleImageUpload;
