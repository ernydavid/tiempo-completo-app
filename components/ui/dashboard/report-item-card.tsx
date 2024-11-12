import { ChevronsDownIcon, ChevronsUpIcon } from 'lucide-react'

interface Props {
  type: 'hours' | 'videos' | 'studies' | 'placements' | 'visits'
  currentAmmount: number
  lastAmmount: number
}

export function ReportItemCard ({ type, currentAmmount, lastAmmount }: Props) {
  return (
    <div className='w-full bg-foreground text-background tracking-tight p-3 flex flex-col gap-2 hover:cursor-pointer'>
      <p>{type === 'hours'
        ? 'Horas'
        : type === 'placements'
          ? 'Publicaciones'
          : type === 'studies'
            ? 'Cursos bíblicos'
            : type === 'videos'
              ? 'Videos'
              : type === 'visits'
                ? 'Revisitas'
                : ''}
      </p>
      <div className='flex items-end justify-between gap-3'>
        <div className='flex items-start gap-1'>
          <p className='text-6xl font-bold tracking-tighter'>{currentAmmount}</p>
          {currentAmmount > lastAmmount
            ? <ChevronsUpIcon className='w-4 h-4 text-success' />
            : <ChevronsDownIcon className='w-4 h-4 text-warning' />}
        </div>
        <div className='flex flex-col items-end text-right text-background/50'>
          <p className='text-sm leading-none'>mes anterior:</p>
          <p className='text-3xl font-bold'>{lastAmmount}</p>
        </div>
      </div>
    </div>
  )
}
