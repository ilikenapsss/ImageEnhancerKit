import { useState } from "react";
import "./App.css";
import { IKImage, IKContext, IKUpload } from "imagekitio-react";
import "bootstrap/dist/css/bootstrap.min.css";

const urlEndpoint = "https://ik.imagekit.io/garvit001/";
const publicKey = "public_PMphjT39UrcDsKGdMfvKvOz2iNs=";
const authenticationEndpoint = "http://localhost:3001/auth";

function EditImage() {
  const [url, setUrl] = useState("");
  const [width, setwidth] = useState(0);
  const [height, setheight] = useState(0);
  const [startingHeight, setStartingHeight] = useState(0);
  const [startingWidth, setStartingWidth] = useState(0);
  const [allTags, setAllTags] = useState([]);

  const onError = (err) => {
    console.log("Error", err);
  };

  const onSuccess = (res) => {
    setUrl(res.filePath);
    setheight(res.height);
    setwidth(res.width);
    setStartingHeight(res.height);
    setStartingWidth(res.width);

    const dataToSend = res;

    fetch("http://localhost:3001/getid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        setAllTags(data.AITags);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Example using fetch and POST request

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
            {/* <a id="download" className="myanc" href={url} download>Download Image</a> */}
            {height == 0 ? (
              <img
                src="https://placehold.co/600x600?text=Your+Image"
                alt="placholder-image"
              />
            ) : (
              <IKImage path={url + `?tr=bl-${blur}`} className="main-image" />
            )}
          </div>

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
        </IKContext>
      </div>
      <div className="right-cont">
        <h1>Your Image Tags</h1>
        <div className="allTagsCont">
          {allTags.map((tag, index) => (
            <ul>
              <li>
                <h3 key={index}>{tag.name}</h3>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EditImage;
