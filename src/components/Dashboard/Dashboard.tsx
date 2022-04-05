//Import css
import './Dashboard.css';
// Import profileCard
import { ProfileCard } from './ProfileCard/ProfileCard';

export function Dashboard() {
    return (
      <>
        <div className='Dashboard'>
          <div className='dashboard-content'>
            <ProfileCard />
          </div>
        </div>
      </>
    )
  }