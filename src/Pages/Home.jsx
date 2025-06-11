import salmanimg from '../assets/Sikandar.webp' 
import Card from '../components/Card'
import DataDetails from '../data/DataDetails'

const Home = () => {
  return (
    <div>
      <div className='w-full'>
        <img src={salmanimg}/>
      </div>
      <div className="min-h-screen py-10 px-4">
      <h1 className="text-3xl font-semibold  mb-3 text-center">
         Shop Our Best Sellers
      </h1>
      <hr className="w-20 border-t-4 mb-10 mx-auto" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {DataDetails.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Home
