import config from "../../config.json";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TimeLine } from "../components/TimeLine";
import { Search } from "../components/Search";
import { useState } from "react";
export interface SearchProps {
  valorDoFiltro: string;
  setValorDoFiltro: () => void;
}
export default function Home() {
  const [valorDoFiltro, setValorDoFiltro] = useState<SearchProps>();
  return (
    <>
      <Header
        githubProfileAvatar={config.github}
        job={config.job}
        userName={config.name}
      />
      <Menu />
      <TimeLine playlists={config.playlists} key={config.name} />
      <Search
        valorDoFiltro={valorDoFiltro}
        setValorDoFiltro={() => setValorDoFiltro}
      />
    </>
  );
}
