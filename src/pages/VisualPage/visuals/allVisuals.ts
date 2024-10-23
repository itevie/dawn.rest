import Dashes from "./Dashes";
import Eye from "./Eye";
import Fireworks from "./Fireworks";
import Gif from "./Gif";
import Hearts from "./Hearts";
import Shapes from "./Shapes";
import Spiral from "./Spiral";
import Visual from "./Visualisation";

const allVisuals = [
  Hearts,
  Spiral,
  Dashes,
  Fireworks,
  Gif,
  Eye,
  Shapes
] as unknown as typeof Visual[];
export default allVisuals;
