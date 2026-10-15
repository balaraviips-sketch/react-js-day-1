import Navebar from './Component/Navebar'
import "./app.css"

export default function app() {
  return (
    <div>
      <Navebar/>
      <div className='Home'>
      <h1 className='My'>Personal Overview</h1>
      <div className='mainDiv'>
        <div className="details">
      <p>Name               </p>
      <p>Profile / Role     </p>
      <p>Education          </p>
      <p>Skill              </p>
      <p>Experience         </p>
      <p>Hoppies / Interests</p>
      <p>Career Goal        </p>

        </div>

        <div className='Answer'>
          <p>:B.RAVIKUMAR</p>
          <p>: IT / Full Stack Developer</p>
          <p>: Bsc.Sc</p>
          <p>:Html,Css,JavaScript</p>
          <p>:Freshers</p>
          <p>:Driving</p>
          <p>:Web Developer</p>
        </div>

      </div>
     
    </div>
    </div>
  )
}
