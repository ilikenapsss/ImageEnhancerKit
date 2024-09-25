import { useState, useEffect } from "react";
import "./App.css";
import { IKImage, IKContext, IKUpload } from "imagekitio-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const urlEndpoint = "https://ik.imagekit.io/garvit001/";
const publicKey = "public_PMphjT39UrcDsKGdMfvKvOz2iNs=";
const authenticationEndpoint = "http://localhost:3001/auth";

function Overlay() {
  const [url, setUrl] = useState("");
  const [width, setwidth] = useState(0);
  const [height, setheight] = useState(0);
  const [startingHeight, setStartingHeight] = useState(0);
  const [startingWidth, setStartingWidth] = useState(0);
  const [format, setFormat] = useState("");
  const [overlayText, setoverlayText] = useState(" ");
  const [overlayBackground, setoverlayBackground] = useState("FFFFFF");
  const [overlayTextSize, setoverlayTextSize] = useState(60);
  const [overlayPadding, setOverlayPadding] = useState(10);
  const [isBackground, setisBackground] = useState(true);
  const [tempBackgroundHolder, settempBackgroundHolder] = useState("");
  const [textColor, setTextColor] = useState("000000");

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

  const overlayTextHandler = (e) => {
    if (e.target.value != "") setoverlayText(encodeURI(e.target.value));
    else setoverlayText(encodeURI(" "));
  };

  const overlayBackgroundHandler = (e) => {
    setoverlayBackground(e.target.value.toUpperCase().slice(1));
  };

  const overlayTextSizeHandler = (e) => {
    if(e.target.value != "")
    setoverlayTextSize(e.target.value);
    else
    setoverlayTextSize("1")
    //  console.log(overlayTextSize);
  };

  const overlayPaddingHandler = (e) => {
    if(e.target.value != "" )
    setOverlayPadding(e.target.value);
    else
    setOverlayPadding("1")
  };

  const backgroundExistenseHandler = (e) => {
    if (e.target.checked) {
      settempBackgroundHolder(overlayBackground);
      setoverlayBackground("transperent");
    } else {
      setoverlayBackground(tempBackgroundHolder);
    }
  };

  const textColorHandler = (e) => {
    setTextColor(e.target.value.toUpperCase().slice(1));
    console.log(textColor);
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
              <IKImage
                path={
                  url +
                  `?tr=l-text,i-${overlayText},fs-${overlayTextSize},bg-${overlayBackground},pa-${overlayPadding},co-${textColor},l-end`
                }
                className="main-image"
              />
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
        <div className="feature-cards">
          <div>
            <h3>Overlay Text</h3>
            <input type="text" onChange={overlayTextHandler} />
          </div>
          <div className="overlay-feature param">
            <h3>Background Color</h3>
            <input
              type="color"
              defaultValue="#FFFFFF"
              onChange={overlayBackgroundHandler}
            />
          </div>
          <div className="overlay-feature param">
            <h3>Remove Background Color</h3>
            <input type="checkbox" onChange={backgroundExistenseHandler} />
          </div>
          <div className="overlay-feature param">
            <h3>Font Color</h3>
            <input
              type="color"
              defaultValue="000000"
              onChange={textColorHandler}
            />
          </div>
          <div className="overlay-feature param">
            <h3>Font size</h3>
            <input
              type="number"
              min="1"
              max="250"
              onChange={overlayTextSizeHandler}
            />
          </div>
          <div className="overlay-feature param">
            <h3>Padding</h3>
            <input
              type="number"
              min="1"
              max="100"
              onChange={overlayPaddingHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
