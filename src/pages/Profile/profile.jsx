import React from 'react';
import ProfilePage from '../../components/ProfilePage';
import ProfileTabs from '../../components/ProfileTabs';

const Profile= ()=> {
  return (
    <div className='flex flex-col'>
      <div>
      	<ProfilePage/>
			</div>
			<div>
				<ProfileTabs/>
			</div>
    </div>
  )
}

export default Profile;
