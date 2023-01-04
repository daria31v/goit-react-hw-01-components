import { Profile } from "./Profile/Profile";
import user from '../Data/user.json'
// import { Statistics } from './Statistics/Statistics'
// import data from '../Data/data.json'

export const App = () => {
  return (
    <>
      <Profile user={user} />
      {/* <Statistics title="Upload stats" stats={data} /> */}
      {/* <Statistics stats={data} /> */}
    </>
    
      
   
  );
};
