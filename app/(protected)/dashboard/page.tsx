import { HistoryData } from '@/components/ui/dashboard/history-data'
import { ReportTable } from '@/components/ui/dashboard/report-table'
import { Suspense } from 'react'

export default async function DashboardPage () {
  return (
    <div className='w-full grid gap-6 md:p-4 border md:border-foreground/20 border-transparent'>
      <h4>Resumen de Noviembre</h4>
      <Suspense fallback={<p>Loading...</p>}>
        <ReportTable />
      </Suspense>
      <HistoryData />
    </div>
  )
}
