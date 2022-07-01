import { ArrowBackIosOutlined } from "@mui/icons-material";
import "./video.scss";
import { Link } from 'react-router-dom'


export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIosOutlined />
        <Link to="/" style={{ textDecoration : "none", color: "White", fontSize:"30px" }}>Home</Link>
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://vod-progressive.akamaized.net/exp=1656655702~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3445%2F21%2F542225719%2F2571474019.mp4~hmac=b2879f1725d63f2fbcb6836d1c19fab6392f2d6af8a9261abbca0fa0be862a0d/vimeo-prod-skyfire-std-us/01/3445/21/542225719/2571474019.mp4"
      />
    </div>
  );
}