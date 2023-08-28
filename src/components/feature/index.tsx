import './Features.scss'

type features = {
  title:string,
  desc?:string
}
const  Features = ({title, desc}:features) => {
  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        <div/>
        <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container_feature-text'>
      <p>{desc}</p>
      </div>
    </div>
  )
}

export default Features