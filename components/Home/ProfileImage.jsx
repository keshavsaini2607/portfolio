import Image from 'next/image'
import React from 'react'

const ProfileImage = () => {
  return (
    <div className="absolute -bottom-20 left-5 border-4 border-white rounded-full">
        <Image 
            src="/assets/photo.jpeg"
            height="150px"
            width="150px"
            alt="profile__image"
            className="rounded-full items-center object-contain bg-darkOverlay"
        />
    </div>
  )
}

export default ProfileImage