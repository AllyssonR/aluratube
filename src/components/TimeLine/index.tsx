import{StyledTimeline}from'./styles'
export interface TimeLineProps {
  playlists: {
    jogos: {
      title: string //especificando que no tipo tem um objeto com dois arrays
      url: string
      thumb: string
    }[]
    frontEnd: {
      title: string
      url: string
      thumb: string
    }[]
  }
}
export function TimeLine({ playlists }: TimeLineProps) {
  const playlistNames = Object.keys(playlists)
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = playlists[playlistName]
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} alt="" />
                    <span>{video.title}</span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}
