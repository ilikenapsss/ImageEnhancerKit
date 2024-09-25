import { useState, useEffect } from "react";
import "./App.css";
import { IKImage, IKContext, IKUpload } from "imagekitio-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";

const urlEndpoint = "https://ik.imagekit.io/garvit001/";
const publicKey = "public_PMphjT39UrcDsKGdMfvKvOz2iNs=";
const authenticationEndpoint = "http://localhost:3001/auth";

function EditImage() {
  const [url, setUrl] = useState("");
  const [width, setwidth] = useState(0);
  const [height, setheight] = useState(0);
  const [startingHeight, setStartingHeight] = useState(0);
  const [startingWidth, setStartingWidth] = useState(0);
  const [blur, setBlur] = useState("0");
  const [contrast, setContrast] = useState("");
  const [grayscale, setGrayscale] = useState("");
  const [borderThickness, setBorderThickness] = useState(0);
  const [borderColor, setBorderColor] = useState("FFFFFF");
  const [sharpen, setSharpen] = useState("0");
  const [rotate, setRotate] = useState(0);
  const [reset, setReset] = useState(0);
  const [round, setRound] = useState(0);

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

  const BlurHandler = (e) => {
    let blurValue = e.target.value;
    setBlur(`${blurValue}`);
  };

  const SharpenHandler = (e) => {
    let sharpValue = e.target.value;
    setSharpen(`${sharpValue}`);
  };
  const GrayscaleHandler = (e) => {
    if (e.target.checked) setGrayscale(`grayscale`);
    else setGrayscale("");
    // console.log(e.target)
  };

  const ContrastHandler = (e) => {
    if (e.target.checked) setContrast(`contrast`);
    else setContrast("");
  };

  const BorderColorHandler = (e) => {
    let newColor = e.target.value.toUpperCase().slice(1);
    setBorderColor(newColor);
  };
  const BorderThickHandler = (e) => {
    let thick = e.target.value;
    setBorderThickness(thick);
  };

  const rotateLeftHandler = () => {
    let ov = rotate;
    ov = ov + 270;
    ov %= 360;
    setRotate(ov);
  };

  const rotateRightHandler = () => {
    let ov = rotate;
    ov = ov + 90;
    ov %= 360;
    setRotate(ov);
  };

  const ResetChanges = (e) => {
    if (e.target.checked) setReset(true);
    else setReset(false);
    // console.log(e.target)
  };

  const RoundCorderHandler = (e) => {
    let corner = e.target.value;
    setRound(corner);
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
                  `?tr=bl-${blur},e-${grayscale},e-${contrast},e-sharpen-${sharpen},b-${borderThickness}_${borderColor},rt-${rotate},r-${round},orig-${reset},ik-attachment=true`
                }
                className="main-image"
              />
            )}
          </div>
          <div className="download-upload-cont">
            <Button
              className="primary"
              href={
                urlEndpoint +
                url +
                `?ik-attachment=true&tr=bl-${blur},e-${grayscale},e-${contrast},e-sharpen-${sharpen},b-${borderThickness}_${borderColor},rt-${rotate},r-${round},orig-${reset},f-png`
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
      <div className="right-cont">
        <div className="rotate-cont">
          <h3>Rotate Image</h3>
          <button className="button" onClick={rotateLeftHandler}>
            <FontAwesomeIcon className="lRotate" icon={faArrowRotateLeft} />
          </button>
          <button className="button" onClick={rotateRightHandler}>
            <FontAwesomeIcon icon={faArrowRotateRight} />
          </button>
        </div>
        <div className="blur-param param">
          <h2>Blur </h2>
          <div className="input">
            <span>Value : </span>
            <input
              type="range"
              id="width"
              name="width"
              min="0"
              max="100"
              defaultValue="0"
              onChange={BlurHandler}
            />
          </div>
        </div>

        <div className="sharpen-param param">
          <h2>Sharpen </h2>
          <div className="input">
            <span>Value : </span>
            <input
              type="range"
              id="width"
              name="width"
              min="0"
              max="100"
              defaultValue="0"
              onChange={SharpenHandler}
            />
          </div>
        </div>
        <div className="round-param param">
          <h2>Round Corners </h2>
          <div className="input">
            <span>Value : </span>
            <input
              type="range"
              id="width"
              name="width"
              min="0"
              max="100"
              defaultValue="0"
              onChange={RoundCorderHandler}
            />
          </div>
        </div>
        <div className="grayscale-param">
          <h2>Grayscale </h2>

          <input
            type="checkbox"
            defaultValue={false}
            onChange={GrayscaleHandler}
          />
        </div>

        <div className="Contrast-param">
          <h2>Contrast </h2>

          <input
            type="checkbox"
            defaultValue={false}
            onChange={ContrastHandler}
          />
        </div>

        <div className="border-param">
          <h2>Border </h2>

          <input type="color" onChange={BorderColorHandler} />
          <input
            type="number"
            min="1"
            max="35"
            defaultValue="0"
            onChange={BorderThickHandler}
          />
        </div>
        <div className="grayscale-param">
          <h2>Reset </h2>

          <input type="checkbox" defaultValue={false} onChange={ResetChanges} />
        </div>
      </div>
    </div>
  );
}

export default EditImage;
