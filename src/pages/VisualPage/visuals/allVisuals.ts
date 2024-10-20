import Dashes from "./Dashes";
import Fireworks from "./Fireworks";
import Gif from "./Gif";
import Hearts from "./Hearts";
import Spiral from "./Spiral";
import Visual from "./Visualisation";

const allVisuals = [
  Hearts,
  Spiral,
  Dashes,
  Fireworks,
  Gif,
] as unknown as typeof Visual[];
export default allVisuals;
