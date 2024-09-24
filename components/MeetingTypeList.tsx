'use client';
import React, { useState } from 'react'
import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';
import MeetingModal from './MeetingModal';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';

const initialValues = {
  dateTime: new Date(),
  description: '',
  link: '',
};

const MeetingTypeList = () => {
    const router = useRouter();
    const [meetingState, setMeetingState] = useState<  'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>(undefined)
    const [values, setValues] = useState(initialValues)
    const [callDetails, setCallDetails] = useState<Call>()
    const user = useUser();
    const client = useStreamVideoClient();

    const createMeeting = async () => {
      if (!client || !user) return;
      try {

        const id = crypto.randomUUID();
        const call = client.call('default' , id);
        if (!call) throw new Error('Failed to create meeting');

        const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
        const description = values.description || 'Instant Meeting';
        await  call.getOrCreate({
          data: {
            starts_at: startsAt,
            custom: {
              description,
            },
          },
        })
        setCallDetails(call)
        if (!values.description) {
          router.push(`/meeting/${call.id}`);
        }
      } catch (error) {
        console.log(error)
      }
      
    }
    return (
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
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

          <MeetingModal
          isOpen={meetingState === 'isInstantMeeting'}
          onClose={() => setMeetingState(undefined)}
          buttonText='Start Meeting'
          title='Start an Instant Meeting'
          className='text-center'
          handleClick={createMeeting}
          />
        </section>
    )
}

export default MeetingTypeList
