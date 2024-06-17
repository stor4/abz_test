import preloader from '../assets/preloader.svg'

function Preloader() {
  return <div className='preloader'>
        <img src={preloader} alt="loading" />
    </div>
}

export default Preloader