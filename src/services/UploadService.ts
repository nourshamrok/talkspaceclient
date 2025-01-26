import UploadResponse from "../interfaces/UploadResponse";
import { API_BASE_URL } from "../config/config";

import axios from "axios";

export const uploadImageToServer = async (
  file: File,
  expirationDate: string
): Promise<string> => {
  const formData = new FormData();

  // Append the image file and expiration date to the form data
  formData.append("imageFile", file);
  formData.append("expiration", expirationDate);

  try {
    const response = await axios.post(API_BASE_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // Assuming the server returns a JSON object with the image URL
    const result: UploadResponse = response.data;

    // Return the URL of the uploaded image
    return result.imageUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Image upload failed");
  }
};
