import { useEffect, useState } from "react";
import Link from "../../dawn-ui/components/Link";
import { baseUrl } from "../..";
import Container from "../../dawn-ui/components/Container";
import { axiosWrapper } from "../../dawn-ui/util";
import Words, { TextType } from "../../dawn-ui/components/Words";
import DawnPage from "../../components/DawnPage";
import Column from "../../dawn-ui/components/Column";
import MultiSelect from "../../dawn-ui/components/MultiSelect";
import { fileTags } from "../Admin/FileUpload";

export interface DawnFile {
  id: number;
  title: string;
  description: string;
  tags: string;
  script: string;
  audio_length: number;
  uploaded_at: string;
  views: number;
}

export default function FilePage() {
  const [files, setFiles] = useState<DawnFile[]>([]);
  const [search, setSearch] = useState<string | null>(null);
  const [tagFilter, setTagFilter] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axiosWrapper("get", `${baseUrl}/api/file-list`);

        setFiles(result.data.reverse());
      } catch (e) {}
    })();
  }, []);

  return (
    <DawnPage>
      <Column>
        <Container title="Filter">
          <table style={{ width: "100%", borderSpacing: "10px" }}>
            <tbody style={{ width: "100%" }}>
              <tr>
                <td style={{ width: "100px" }}>
                  <b>Tags</b>
                </td>
                <td>
                  <MultiSelect
                    updateSelectedKey={1}
                    selected={tagFilter}
                    elements={fileTags}
                    onChange={(e) => setTagFilter(e)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ width: "100px" }}>
                  <b>Search</b>
                </td>
                <td>
                  <input
                    className="dawn-big"
                    style={{ width: "100%" }}
                    onChange={(e) =>
                      setSearch(e.currentTarget.value.toLowerCase())
                    }
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Container>
        <Container title="File List">
          {files
            .filter(
              (f) =>
                tagFilter.length === 0 ||
                tagFilter.every((x) => f.tags.includes(x)),
            )
            .filter((f) =>
              !search
                ? true
                : f.id.toString() === search ||
                  f.title.toLowerCase().includes(search) ||
                  f.description.toLowerCase().includes(search) ||
                  f.tags.includes(search),
            )
            .map((f) => (
              <Link
                noHighlight
                key={f.id}
                href={`/hypno/files/${f.id}-${f.title
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                <Container hover>
                  <Column>
                    <Words
                      type={TextType.Heading}
                    >{`${f.id} - ${f.title}`}</Words>
                    <Words>{f.description}</Words>
                    <small>
                      {Math.floor(f.audio_length / 60).toFixed(0)}m{" "}
                      {f.audio_length % 60}s - {f.views} plays
                      {f.tags.length > 0 && " - "}
                      {f.tags.split(",").join(", ")}
                    </small>
                  </Column>
                </Container>
              </Link>
            ))}
        </Container>
      </Column>
    </DawnPage>
  );
}
