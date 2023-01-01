import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {
  fetchAttendance,
  storeAttendance,
  storeCheckOut,
} from '../../api/services/Attendance'
import { ChatBox } from '../../components/ChatBox'
import { OverlaySpinner } from '../../components/OverlaySpinner'
import { notifyFail, notifySuccess, ToastCustom } from '../../components/Toast'
import state from '../../utils/localStorage'

export function MyHome() {
  const user = state.getState('user')
  const [loading, setLoading] = useState(true)
  const [recognitionFilterList, setRecognitionFilterList] = useState([])
  const [totalTime, setTotalTime] = useState('00:00:00')
  const [payload, setPayload] = useState({
    month: new Date(),
  })

  useEffect(() => {
    fetchAttendance(payload)
      .then(({ data, total_time }) => {
        setRecognitionFilterList(data)
        setTotalTime(total_time)
      })
      .catch(() => {
        notifyFail('Error Fetch Data')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [payload])

  const changePayload = (e) => {
    setPayload({
      ...payload,
      month: e.target.value,
    })
  }

  const handleAttendance = () => {
    storeAttendance()
      .then(() => {
        notifySuccess('Attendance Success')
        setPayload({ ...payload })
      })
      .catch(({ response }) => {
        const { data } = response
        notifyFail(data.errors.exist[0])
      })
  }

  const handleCheckOut = () => {
    storeCheckOut()
      .then(() => {
        notifySuccess('CheckOut Success')
        setPayload({ ...payload })
      })
      .catch(({ response }) => {
        const { data } = response
        notifyFail(data.errors.exist[0])
      })
  }

  return (
    <div className='grid grid-cols-4 px-12 pt-36 bg-[#191f30]'>
      <div className='text-white p-8'>
        <div className='hidden md:block text-white text-sm font-montserrat'>
          <div className='w-full float-left'>
            <img
              src='https://static.daffy.org/avatars/avatar-placeholder.png'
              alt='Avatar User'
              className='w-1/4 md:w-20 lg:w-14 lg:h-14 float-left'
            />
            <div className='pl-20'>
              <p className='text-lg mt-2'>{user.name}</p>
              <p className=' text-[#687382]'>{user.username}</p>
            </div>
          </div>
          <div className='mt-6 float-left font-montserrat'>
            <p className='mt-2 font-montserrat font-bold text-sm '>ABOUT JOB</p>
            <p className='mt-2 text-[#687382]'>
              Department: <span>{user.department}</span>
            </p>
            <p className='mt-2 text-[#687382]'>
              Position: <span>{user.position}</span>
            </p>
          </div>
        </div>
      </div>
      <div className='col-span-3'>
        <div className='flex '>
          <div className='mb-3 xl:w-80'>
            <label className='form-label inline-block mb-2 text-white'>
              Select Month
            </label>
            <input
              type='month'
              className=' form-control block w-full px-3 py-1.5 text-base font-normal bg-[#252d40] border border-solid border-gray-300 rounded transition ease-in-out m-0 font-montserrat text-white focus:bg-[#2a3349] focus:outline-none'
              onChange={(e) => changePayload(e)}
              placeholder='Search'
            />
            <div className='flex flex-row'>
              <button
                className='relative mt-8 rounded-full leading-5 px-5 font-medium text-center select-none border pt-2.5 pb-3 text-base border-[#ff1d53] bg-[#ff1d53] text-white block'
                onClick={handleAttendance}
              >
                <span>Check In</span>
              </button>
              <button
                className='relative mt-8 ml-5 rounded-full leading-5 px-5 font-medium text-center select-none border pt-2.5 pb-3 text-base border-[#ff1d53] bg-[#ff1d53] text-white block'
                onClick={handleCheckOut}
              >
                <span>Check Out</span>
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8 mb-5'>
              <div className='overflow-hidden'>
                <table className='min-w-full bg-[#1f2638] rounded-base text-white'>
                  <thead className=' border-b font-montserrat'>
                    <tr>
                      <th
                        scope='col'
                        className='text-base font-medium  px-6 py-4 text-left'
                      >
                        #
                      </th>
                      <th
                        scope='col'
                        className='text-base font-medium  px-6 py-4 text-left'
                      >
                        Date
                      </th>
                      <th
                        scope='col'
                        className='text-base font-medium  px-6 py-4 text-left'
                      >
                        Check In
                      </th>
                      <th
                        scope='col'
                        className='text-base font-medium  px-6 py-4 text-left'
                      >
                        Check Out
                      </th>
                      <th
                        scope='col'
                        className='text-base font-medium  px-6 py-4 text-left'
                      >
                        Time
                      </th>
                      <th
                        scope='col'
                        className='text-base font-medium  px-6 py-4 text-left'
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className='font-montserrat'>
                    {recognitionFilterList.map((item, index) => (
                      <tr
                        key={item.id}
                        className='border-b transition duration-300 ease-in-out hover:bg-[#252d40]'
                      >
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium '>
                          {index + 1}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium '>
                          {new Date(item.date).toLocaleDateString()}
                        </td>
                        <td className='text-base  font-light px-6 py-4 whitespace-nowrap'>
                          {item.check_in &&
                            new Date(item.check_in).toLocaleTimeString()}
                        </td>
                        <td className='text-base  font-light px-6 py-4 whitespace-nowrap'>
                          {item.check_out
                            ? new Date(item.check_out).toLocaleTimeString()
                            : item.check_in
                            ? 'Pending'
                            : ''}
                        </td>
                        <td className='text-base  font-light px-6 py-4 whitespace-nowrap'>
                          {item.time ? item.time : ''}
                        </td>
                        <td className='text-base text-red-500 font-light px-6 py-4 whitespace-nowrap'>
                          {item.is_late_label}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td></td>
                      <td></td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium '>
                        Total
                      </td>
                      <td></td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium '>
                        {totalTime}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastCustom />
      <ChatBox />
      <OverlaySpinner open={loading} />
    </div>
  )
}
