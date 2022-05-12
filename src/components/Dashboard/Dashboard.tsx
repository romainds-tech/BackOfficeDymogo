//Import css
import './Dashboard.css';
// Import profileCard
import { ProfileCard } from './ProfileCard/ProfileCard';
import {ReportsCard} from "./ReportsCard/ReportsCard";



export function Dashboard() {
    return (
      <>
        <div className='Dashboard'>
          <div className='dashboard-content'>
            <ReportsCard />
            <ProfileCard />
          </div>
        </div>
      </>
    )
  } 