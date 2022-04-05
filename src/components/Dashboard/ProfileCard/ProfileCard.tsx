//Import  css
import './ProfileCard.css';

export function ProfileCard() {
    return (
      <>
        <div className='ProfileCard'>
          <div className='topprofilepart'>
            <img id="profilepicture" src="../../../../static/profile.png" alt="" />
            <div className='text'> Mauche Gauthier </div>
            <img id="svgprofile" src="../../../../static/profilecard.svg" alt="" />
          </div>
        </div>
      </>
    )
  }