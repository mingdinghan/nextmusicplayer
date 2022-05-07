import GradientLayout from '../components/gradientLayout'

const Home = () => {
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

export default Home
