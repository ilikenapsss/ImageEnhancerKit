import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <div>
      <h1 className="heading-home">Image Editor and Enhancer</h1>
      <div className="feature-cards">
        <Card
          style={{
            width: "18rem",
            backgroundColor: "rgb(49 48 48)",
            color: "white",
          }}
        >
          <Card.Img
            variant="top"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/crop-tool-7045461-5740256.png?f=webp"
          />
          <Card.Body>
            <Card.Title>Crop Image</Card.Title>
            <Card.Text>
              Precision image cropping for striking visuals.
            </Card.Text>
            <Link to="/crop">
              <Button variant="primary">Crop Tool</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            backgroundColor: "rgb(49 48 48)",
            color: "white",
          }}
        >
          <Card.Img
            variant="top"
            src="https://img.freepik.com/free-psd/3d-cartoon-people-edit-pictures-with-camera-tools_1150-56192.jpg"
          />
          <Card.Body>
            <Card.Title>Edit Image</Card.Title>
            <Card.Text>
              Transform images effortlessly with our intuitive editing.
            </Card.Text>
            <Link to="/edit_image">
              <Button variant="primary">Edit Image</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            backgroundColor: "rgb(49 48 48)",
            color: "white",
          }}
        >
          <Card.Img
            variant="top"
            src="https://cdn-icons-png.flaticon.com/512/1322/1322164.png"
            style={{ height: "280px" }}
          />
          <Card.Body>
            <Card.Title>Image Format Converter</Card.Title>
            <Card.Text>
              Transforming Image Formats: Effortlessly Convert Images to Your
              Preferred Format
            </Card.Text>
            <Link to="/format">
              <Button variant="primary">Format Converter</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            backgroundColor: "rgb(49 48 48)",
            color: "white",
          }}
        >
          <Card.Img
            variant="top"
            src="https://play-lh.googleusercontent.com/1cf6sZ503u5W_L4OhrJs-ocOqnXJ71NkKi9J4_IM1WtZozPZOns_NVjciC6SvsYykxox=w240-h480-rw"
          />
          <Card.Body>
            <Card.Title>Resize and Compress</Card.Title>
            <Card.Text>
              Effortlessly optimize images with automatic resizing for faster
              loading and improved performance.
            </Card.Text>
            <Link to="/resize">
              <Button variant="primary">Resize</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            backgroundColor: "rgb(49 48 48)",
            color: "white",
          }}
        >
          <Card.Img
            variant="top"
            src="https://img.freepik.com/free-photo/automatic-recognition-software-analyzing-city-elements_23-2150643791.jpg?size=1626&ext=jpg&ga=GA1.1.650447326.1680780590&semt=sph"
            style={{ height: "280px" }}
          />
          <Card.Body>
            <Card.Title>Image tags</Card.Title>
            <Card.Text>
              AI-powered image tags for your image, boosting engagement and
              searchability.
            </Card.Text>
            <Link to="/aitags">
              <Button variant="primary">Image Tags</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            backgroundColor: "rgb(49 48 48)",
            color: "white",
          }}
        >
          <Card.Img
            variant="top"
            src="https://cdn-icons-png.flaticon.com/512/1825/1825919.png"
            style={{ height: "280px" }}
          />
          <Card.Body>
            <Card.Title>Meme Editor</Card.Title>
            <Card.Text>
              AI-powered image tags for your image, boosting engagement and
              searchability.
            </Card.Text>
            <Link to="/overlay">
              <Button variant="primary">Overlay</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
