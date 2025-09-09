import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/solid'
import { FaLinkedin } from 'react-icons/fa'
import type { Profile } from '@/data/Profile'

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <div id='layout' className='flex mb-2'>

      <div className='flex w-full justify-between items-start'>

        {/* Name and Occupation */}
        <div id='layout' className='flex flex-col'>
          <h1 className={`text-xl font-bold text-primary`}>
            {profile.name}
          </h1>
          <h2 className='text-lg font-medium mt-0.5 text-black'>
            {profile.occupation}
          </h2>
          <div className='flex flex-row justify-between mt-2'>
            <span className='flex items-center mr-2'>
              <MailIcon className='flex-shrink-0 mr-0.5 mt-0.5 h-3 w-3 text-black' />
              <h3 className='text-base'>
                {profile.email}
              </h3>
            </span>
            <span className='flex items-center mr-2'>
              <PhoneIcon className='flex-shrink-0 ml-1.5 mr-0.5 mt-0.5 h-3 w-3 text-black' />
              <h3 className='text-base'>
                {profile.phone}
              </h3>
            </span>
            {/*             <span className='flex items-center'>
              <FaLinkedin className='flex-shrink-0 ml-1.5 mr-0.5 mt-0.5 h-3 w-3 text-black' />
              <h3 className='text-base'>
                {profile.website}
              </h3>
            </span> */}
          </div>
        </div>

        {/* Website, Email, and Phone Number */}
        <div id='layout' className='flex flex-col items-end'>
          <span className='flex items-center'>
            <LocationMarkerIcon className='flex-shrink-0 ml-1.5 mr-0.5 mt-0.5 h-4 w-4 text-black' />
            <h3 className='text-base'>
              {profile.location}
            </h3>
          </span>

          <span className='flex items-center'>
            <h3 className='text-base'>
              {profile.situation}
            </h3>
          </span>
        </div>

      </div>
    </div>
  )
}