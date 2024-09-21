'use client';
import React, { useState } from 'react'
import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';

const MeetingTypeList = () => {
    const router = useRouter();
    const [meetingState, setMeetingState] = useState<  'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>(undefined)

    return (
        <section className='grid grif-cols-1 gap-5 md:grid-cols-2  xl:grid-cols-4'>
          <HomeCard 
          img='/icons/add-meeting.svg'
          title='New Meeting'
          Description='Start an Instant meeting'
          handleClick={() => setMeetingState('isInstantMeeting')}
          className = 'bg-orange-1'
          />
          <HomeCard
           img='/icons/join-meeting.svg'
           title='Join Meeting'
           Description='via Invitattion Link'
           handleClick={() => setMeetingState('isJoiningMeeting')}
           className = 'bg-blue-1'
          />
          <HomeCard
           img='/icons/schedule.svg'
           title='Schedule Meeting'
           Description='Plan your meeting'
           handleClick={() => setMeetingState('isScheduleMeeting')}
           className = 'bg-purple-1'
          />
          <HomeCard
           img='/icons/recordings.svg'
           title='View Recordings'
           Description='Check out your Recordings'
           handleClick={() => router.push('/recordings')}
           className = 'bg-yellow-1'
          />
        </section>
    )
}

export default MeetingTypeList
