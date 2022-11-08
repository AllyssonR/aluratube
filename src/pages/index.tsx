import config from "../../config.json";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TimeLine } from "../components/TimeLine";

export default function Home() {
  return (
    <>
      <Header
        githubProfileAvatar={config.github}
        job={config.job}
        userName={config.name}
      />
      <Menu />
      <TimeLine playlists={config.playlists} key={config.name} />
    </>
  );
}
