export interface RouteMeta {
  path: RegExp;

  title: string;
  description: string;
}

const routes: RouteMeta[] = [
  // ----- /hypno -----
  {
    path: /\/hypno/,
    title: "Trance By Dawn",
    description: "Hypnosis files and mesmerising visuals.",
  },
  {
    path: /\/hypno\/visuals/,
    title: "Hypnosis Visuals",
    description:
      "See some beautiful and customisable visuals to get mesmerised by",
  },
  // ----- /trancer -----
  {
    path: /\/trancer/,
    title: "Trancer Discord Bot",
    description:
      "Trancer is a Discord hypnosis-oriented Discord bot! This page holds the statistics for our server Trancy Twilight.",
  },
  // ----- Catch All -----
  {
    path: /.+/,
    title: "Dawn's Things",
    description: "Hello! Welcome to Dawn's website of things.",
  },
].sort((a, b) => b.path.toString().length - a.path.toString().length);

export default routes;
