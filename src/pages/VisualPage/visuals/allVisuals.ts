import Dashes from "./Dashes";
import Hearts from "./Hearts";
import Spiral from "./Spiral";
import Visual from "./Visualisation";

const allVisuals = [Hearts, Spiral, Dashes] as unknown as typeof Visual[];
export default allVisuals;