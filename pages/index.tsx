import GradientLayout from '../components/gradientLayout'
import prisma from '../lib/prisma'

const Home = ({ artists }) => {
  return (
    <GradientLayout
      roundImage
      color="red"
      subtitle="profile"
      title="Bluey"
      description="15 public playlists"
      image="https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png"
    >
      <div>home page</div>
    </GradientLayout>
  )
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})

  return {
    props: { artists },
  }
}

export default Home
