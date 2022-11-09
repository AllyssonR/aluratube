import { TimeLine, TimeLineProps } from '../components/TimeLine'
import config from '../../config.json'
import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
interface HomeProps extends TimeLineProps {
  github: string
  job: string
  name: string
}
export default function Home() {
  return (
    <>
      <Header
        githubProfileAvatar={config.github}
        job={config.job}
        userName={config.name}
      />
      <Menu />
      <TimeLine playlists={config.playlists} />
    </>
  )
}
