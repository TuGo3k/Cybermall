"use client";
import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const MultiImageUpload = ({ images, setImages }) => {
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (preview) => {
    setImages((prev) => prev.filter((img) => img.preview !== preview));
  };

  return (
    <div className="w-full h-full text-center rounded-[10px] bg-[#F9F9F9] overflow-hidden border border-[#DEDFE1]">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="hidden"
        id="multi-upload" 
      />

      <div
        className="h-10 w-full bg-[#a6a6a6] text-white flex items-center justify-center cursor-pointer"
        onClick={() => document.getElementById("multi-upload").click()}
      >
        <h2 className="text-xl">Зураг оруулах</h2>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center relative h-[500px] p-4 w-full"
        style={{ overflowY: images.length > 0 ? "scroll" : "hidden" }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-fit">
            <img
              src={image.preview}
              alt={`Preview ${index}`}
              className="w-full h-[150px] object-cover rounded-[8px]"
            />
            <button
              onClick={() => handleRemoveImage(image.preview)}
              className="absolute top-0 right-0 bg-red-600 text-white p-1 rounded-full"
              style={{ transform: "translate(50%, -50%)" }}
            >
              <FaTimes />
            </button>
          </div>
        ))}

        {images.length === 0 && (
          <div
            className="absolute w-full h-full flex items-center cursor-pointer justify-center"
            onClick={() => document.getElementById("multi-upload").click()}
          >
            <FaCloudUploadAlt size={90} color="#A6A6A6" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiImageUpload;
