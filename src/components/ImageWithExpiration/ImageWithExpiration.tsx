import React, { useState } from "react";
import ImageWithExpirationProps from "../../interfaces/ImageWithExpirationProps";




const ImageWithExpiration: React.FC<ImageWithExpirationProps> = ({
  image,
  onExpirationChange,
}) => {
  const [expiration, setExpiration] = useState(image.expirationTime);

  const handleExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newExpirationTime = e.target.value;
    setExpiration(newExpirationTime);
    onExpirationChange(newExpirationTime);
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
        src={image.preview}
        alt="uploaded"
        style={{ width: "150px", height: "auto" }}
      />
      <div>
        <label>Expiration Time: </label>
        <input
          type="datetime-local"
          value={expiration}
          onChange={handleExpirationChange}
        />
      </div>
    </div>
  );
};

export default ImageWithExpiration;
