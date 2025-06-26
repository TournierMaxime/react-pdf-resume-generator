import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import { FaLinkedin } from 'react-icons/fa'
import { FONT_COLOR, HEXA_COLOR } from '@/helpers/constants'

interface ProfileHeaderProps {
  name: string
  occupation: string
  website: string
  email: string
  phone: string
  location: string
}

export default function ProfileHeader({ profile }: { profile: ProfileHeaderProps }) {
  return (
    <div id='layout' className='flex mb-2'>

      <div className='flex w-full justify-between items-center'>

        {/* Name and Occupation */}
        <div id='layout' className='flex flex-col'>
          <h1 className={`text-xl font-bold text-primary`}>
            {profile.name}
          </h1>
          <h2 className='text-lg font-medium mt-0.5 text-black'>
            {profile.occupation}
          </h2>
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
            <MailIcon className='flex-shrink-0 ml-1.5 mr-0.5 mt-0.5 h-4 w-4 text-black' />
            <h3 className='text-base'>
              {profile.email}
            </h3>
          </span>

          <span className='flex items-center'>
            <PhoneIcon className='flex-shrink-0 ml-1.5 mr-0.5 mt-0.5 h-4 w-4 text-black' />
            <h3 className='text-base'>
              {profile.phone}
            </h3>
          </span>

          <span className='flex items-center'>
            <FaLinkedin className='flex-shrink-0 ml-1.5 mr-0.5 mt-0.5 h-4 w-4 text-black' />
            <h3 className='text-base'>
              {profile.website}
            </h3>
          </span>
        </div>

      </div>
    </div>
  )
}