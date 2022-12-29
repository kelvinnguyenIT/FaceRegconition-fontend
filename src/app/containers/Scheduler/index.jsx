import React from 'react'
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Inject,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule'
import { registerLicense } from '@syncfusion/ej2-base'
import state from '../../utils/localStorage'

const Scheduler = () => {
  registerLicense(
    'ORg4AjUWIQA/Gnt2VVhkQlFadVdJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0dhWn9ddXJRQ2ZbVEE='
  )

  const user = state.getState('user')
  const scheduleData = state.getState(user.username)

  const onDragStart = (arg) => {
    arg.navigation.enable = true
  }

  const onDataBinding = (e) => {
    state.set(user.username, e.result)
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
      <div className='col-span-3 py-10'>
        <ScheduleComponent
          height='650px'
          selectedDate={new Date()}
          startHour='07:00'
          endHour='18:00'
          eventSettings={{
            dataSource: scheduleData,
          }}
          dragStart={onDragStart}
          dataBinding={onDataBinding}
        >
          <ViewsDirective>
            {['Day', 'Week', 'WorkWeek', 'Month'].map((item) => (
              <ViewDirective key={item} option={item} />
            ))}
          </ViewsDirective>
          <Inject
            services={[Day, Week, WorkWeek, Month, Resize, DragAndDrop]}
          />
        </ScheduleComponent>
      </div>
    </div>
  )
}

export default Scheduler
