import React from "react";
import { ToastContainer } from "react-toastify";
import MultipleImageUpload from "./components/MultipleImageUpload/MultipleImageUpload";

const App: React.FC = () => (
  <div>
    <h1>Image Upload Demo</h1>
    <h2>Multiple Image Upload</h2>
    <MultipleImageUpload />

    <ToastContainer />
  </div>
);

export default App;
