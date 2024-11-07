import Dashes from "./Dashes";
import Eye from "./Eye";
import Fireworks from "./Fireworks";
import Gif from "./Gif";
import Hearts from "./Hearts";
import Pendulum from "./Pendulum";
import Shapes from "./Shapes";
import Spiral from "./Spiral";
import LogorithmicSpiral from "./LogorithmicSpiral";
import Visual from "./Visualisation";

const allVisuals = [
  Hearts,
  Spiral,
  Dashes,
  Fireworks,
  Gif,
  Eye,
  Shapes,
  Pendulum,
  LogorithmicSpiral,
] as unknown as (typeof Visual)[];
export default allVisuals;
