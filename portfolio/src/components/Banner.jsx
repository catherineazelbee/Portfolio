import bannerImg from '../assets/banner-img.png'

function Banner() {
  return (
    <div>
      <img src={bannerImg} alt="Banner Image" className="banner-img" />
    </div>
  )
}

export default Banner