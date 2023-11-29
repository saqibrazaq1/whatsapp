import React, { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import ImageUploader from "react-images-upload";

const AvatarUploader = () => {
  const [image, setImage] = useState(null);
  const [cropImage, setCropImage] = useState(null);
  const [scale, setScale] = useState(1);

  const onDrop = (pictures) => {
    setImage(pictures[0]);
  };

  const handleScaleChange = (e) => {
    const newScale = parseFloat(e.target.value);
    setScale(newScale);
  };

  const handleSave = () => {
    if (cropImage) {
      // Handle the cropped image, e.g., upload it to the server
      console.log("Cropped Image:", cropImage.toDataURL());
    }
  };

  return (
    <div>
      <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
      {image && (
        <div>
          <AvatarEditor
            image={image}
            width={250}
            height={250}
            border={50}
            color={[255, 255, 255, 0.6]} // RGBA
            scale={scale}
            ref={(editor) => setCropImage(editor)}
          />
          <div>
            <label>Zoom:</label>
            <input
              type="range"
              value={scale}
              min="1"
              max="2"
              step="0.01"
              onChange={handleScaleChange}
            />
          </div>
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
};

export default AvatarUploader;
