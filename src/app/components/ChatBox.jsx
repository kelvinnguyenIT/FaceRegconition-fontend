import React, { useState } from 'react'
import { BiMessageSquareDots } from 'react-icons/bi'
import { IoSendSharp } from 'react-icons/io5'
import { toast } from 'react-toastify'
import { storeNotification } from '../api/services/Notification'
export const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [dataMessage, setDataMessage] = useState({
    message: '',
  })
  return (
    <div className={`fixed z-50 bottom-10 right-10`}>
      <div className='relative'>
        <div>
          <div>
            <div
              className={`${
                isOpen ? '' : 'hidden'
              } -top-16 -right-4 duration-200 w-[500px] absolute p-2 bg-[#ff1d53] shadow-2xl hover:cursor-pointer flex items-center justify-evenly rounded-md`}
            >
              <label className='text-white'>Message</label>
              <input
                type='text'
                value={dataMessage.message}
                onChange={(e) => {
                  setDataMessage({ message: e.target.value })
                }}
                className='bg-gray-50 w-[350px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
              <button
                disabled={dataMessage.message ? false : true}
                onClick={() => {
                  setIsOpen(false)
                  storeNotification(dataMessage)
                    .then((res) => {
                      toast.success('Message Sent')
                    })
                    .catch(() => {
                      toast.error('Message Not Sent')
                    })
                    .finally(() => {
                      setDataMessage({ message: '' })
                    })
                }}
              >
                <IoSendSharp className='text-white hover:cursor-pointer' />
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          className=' w-14 h-14 bg-blue-200 shadow-2xl hover:cursor-pointer rounded-full flex'
        >
          <BiMessageSquareDots className='m-auto text-2xl text-[#ff1d53]' />
        </div>
      </div>
    </div>
  )
}
