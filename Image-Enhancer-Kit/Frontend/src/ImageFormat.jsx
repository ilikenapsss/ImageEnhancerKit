import { useState, useEffect } from "react";
import "./App.css";
import { IKImage, IKContext, IKUpload } from "imagekitio-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const urlEndpoint = "https://ik.imagekit.io/garvit001/";
const publicKey = "public_PMphjT39UrcDsKGdMfvKvOz2iNs=";
const authenticationEndpoint = "http://localhost:3001/auth";

function ImageFormat() {
  const [url, setUrl] = useState("");
  const [width, setwidth] = useState(0);
  const [height, setheight] = useState(0);
  const [startingHeight, setStartingHeight] = useState(0);
  const [startingWidth, setStartingWidth] = useState(0);
  const [format, setFormat] = useState("");
  const [firstFormat, setFirstFormat] = useState("");

  const onError = (err) => {
    console.log("Error", err);
  };

  const onSuccess = (res) => {
    setUrl(res.filePath);
    setheight(res.height);
    setwidth(res.width);
    setStartingHeight(res.height);
    setStartingWidth(res.width);
    console.log(res);
  };

  const formatHandler = (e) => {
    let format = e.target.value;
    setFormat(format);
  };
  return (
    <div className="App">
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
              <IKImage path={url + `?tr=f-${format}`} className="main-image" />
            )}
          </div>
          <div className="download-upload-cont">
            <Button
              className="primary"
              href={urlEndpoint + url + `?ik-attachment=true&tr=f-${format}`}
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
      <div className="right-cont">
        <div style={{ color: "white" }}>
          <h3>Choose the File format</h3>
          <select name="format" id="format" onClick={formatHandler}>
            <option value="">--Please choose an option--</option>
            <option value="jpg">To Jpg</option>
            <option value="png">To PNG</option>
            <option value="jpeg">To JPEG</option>
            <option value="webp">To Webd</option>
            <option value="aeif">To Avif</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ImageFormat;
