import React, { ReactNode } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image';
import { Button } from './ui/button';

interface MeetingModalProps {
    isOpen: boolean;
    title: string;
    handleClick?: () => void;
    onClose: () => void;
    buttonText?: string;
    image?: string;
    buttonIcon?: string;
    className?: string;
    buttonClassName?: string;
    children?: ReactNode;
    instantMeeting?: boolean
}


const MeetingModal = ({ isOpen, onClose, buttonText, title, instantMeeting, className, handleClick, image, children, buttonClassName, buttonIcon, }: MeetingModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="flex flex-col w-full max-w-[520px] bg-dark-1 px-6 py-9 text-white border-none gap-6">
                <div className="flex flex-col gap-6">
                    {
                        image && (
                            <Image
                                src={image}
                                width={72}
                                height={72}
                                alt='image'
                                className='flex justify-center'
                            />
                        )
                    }
                    <h1 className={`${className} text-3xl font-bold leading-[42px]`}>{title}</h1>
                    {children}
                    <Button className={
                        "bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
                    } onClick={handleClick}>
                        {buttonIcon && 
                        <Image
                        src={buttonIcon}
                        alt="button icon"
                        width={13}
                        height={13}
                      />
                        }
                       &nbsp; {buttonText || 'Schedule Meeting'}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default MeetingModal
