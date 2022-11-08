/* eslint-disable @next/next/no-img-element */
type props = {
  userName: string;
  job: string;
  githubProfileAvatar: string;
};
import { HeaderStyled } from "./styles";
export function Header({ userName, job, githubProfileAvatar }: props) {
  return (
    <HeaderStyled>
      <img src="" alt="banner" />
      <section className="user-info">
        <img
          src={`https://github.com/${githubProfileAvatar}.png`}
          alt="foto-de-perfil"
        />
        <div>
          <h2>{userName}</h2>
          <p>{job}</p>
        </div>
      </section>
    </HeaderStyled>
  );
}
