import { useState } from "react";
import "./App.css";
import { IKImage, IKContext, IKUpload } from "imagekitio-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const urlEndpoint = "https://ik.imagekit.io/garvit001/";
const publicKey = "public_PMphjT39UrcDsKGdMfvKvOz2iNs=";
const authenticationEndpoint = "http://localhost:3001/auth";

function EditImage() {
  const [url, setUrl] = useState("");
  const [width, setwidth] = useState(0);
  const [height, setheight] = useState(0);
  const [startingHeight, setStartingHeight] = useState(0);
  const [startingWidth, setStartingWidth] = useState(0);
  const [quality, setQuality] = useState(100);

  const onError = (err) => {
    console.log("Error", err);
  };

  const onSuccess = (res) => {
    setUrl(res.filePath);
    setheight(res.height);
    setwidth(res.width);
    setStartingHeight(res.height);
    setStartingWidth(res.width);
  };

  const heightHandler = (e) => {
    let fact = e.target.value;
    setheight((startingHeight / 100) * fact);
  };

  const qualityHandler = (e) => {
    let qualityValue = e.target.value;
    setQuality(`${qualityValue}`);
  };

  return (
    <div className="App App-resize">
      <div className="left-cont">
        <IKContext
          urlEndpoint={urlEndpoint}
          publicKey={publicKey}
          authenticationEndpoint={authenticationEndpoint}
        >
          <h2>Your Image</h2>
          <div className="user-image">
            {height == 0 ? (
              <img
                src="https://placehold.co/600x600?text=Your+Image"
                alt="placholder-image"
              />
            ) : (
              <IKImage
                path={url + `?tr=h-${height},q-${quality}`}
                className="main-image"
              />
            )}
          </div>

          {/* Upload Image */}
          <div className="download-upload-cont">
            <Button
              className="primary"
              href={
                urlEndpoint +
                url +
                `?ik-attachment=true&tr=h-${height},q-${quality},f-png`
              }
            >
              Download
            </Button>

            {/* Upload Image */}
            <div className="upload-cont">
              <IKUpload
                style={{
                  backgroundColor: "green",
                  fontSize: "1rem",
                }}
                fileName="test-upload.png"
                onError={onError}
                onSuccess={onSuccess}
              />
            </div>
          </div>
        </IKContext>
      </div>
      <div className="right-cont right-cont-resize">
        <div className="resize-param param">
          <h2>Resize Your Image</h2>
          <div className="input">
            <span>Width or Height : </span>
            <input
              type="range"
              id="width"
              name="width"
              min="0"
              max="200"
              onChange={heightHandler}
            />
          </div>
        </div>

        <div className="blur-param param">
          <h2>Quality </h2>
          <div className="input">
            <span>Value : </span>
            <input
              type="range"
              id="width"
              name="width"
              min="0"
              max="100"
              defaultValue="100"
              onChange={qualityHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditImage;
