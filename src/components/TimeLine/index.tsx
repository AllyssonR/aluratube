type props = {
  playlists: {
    jogos: [
      {
        title: string;
        url: string;
        thumb: string;
      }
    ];
  };
};
export function TimeLine({ playlists }: props) {
  return <h1>timeline</h1>;
}
