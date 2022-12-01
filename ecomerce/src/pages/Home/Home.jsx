import Categories from "../../components/Catogeries/Categories"
import FeatureProducts from "../../components/FeatureProducts/FeaturedProducts"
import Silder from "../../components/Slider/Silder"



const Home = () => {
  return (
    <div className="home">
    <Silder/>
    <FeatureProducts type="Bán chạy"/>
    <FeatureProducts type="Mới"/>
    <Categories/>
    </div>
  )
}

export default Home
