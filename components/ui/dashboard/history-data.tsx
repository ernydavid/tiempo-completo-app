import { ReportItemCard } from './report-item-card'

export function HistoryData () {
  return (
    <div className='w-full grid gap-6'>
      <div className='w-full flex items-center justify-between gap-3'>
        <h4>Historial</h4>
        <h4 className='uppercase'>Oct-Nov-2024</h4>
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        <ReportItemCard
          type='hours'
          currentAmmount={20}
          lastAmmount={15}
        />
        <ReportItemCard
          type='placements'
          currentAmmount={55}
          lastAmmount={35}
        />
        <ReportItemCard
          type='videos'
          currentAmmount={25}
          lastAmmount={55}
        />
        <ReportItemCard
          type='visits'
          currentAmmount={10}
          lastAmmount={12}
        />
        <ReportItemCard
          type='studies'
          currentAmmount={5}
          lastAmmount={3}
        />
      </div>
    </div>
  )
}
