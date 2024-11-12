export async function ReportTable () {
  return (
    <table className='w-full max-w-sm'>
      <tbody className='tracking-tight'>
        <tr className='border-b border-b-foreground/20 h-9'>
          <th className='border-r border-r-foreground/20 font-medium'>Publicaciones</th>
          <td className='px-3 text-center font-bold text-lg'>55</td>
        </tr>
        <tr className='border-b border-b-foreground/20 h-9'>
          <th className='border-r border-r-foreground/20 font-medium'>Videos</th>
          <td className='px-3 text-center font-bold text-lg'>25</td>
        </tr>
        <tr className='border-b border-b-foreground/20 h-9'>
          <th className='border-r border-r-foreground/20 font-medium'>Horas</th>
          <td className='px-3 text-center font-bold text-lg'>65</td>
        </tr>
        <tr className='border-b border-b-foreground/20 h-9'>
          <th className='border-r border-r-foreground/20 font-medium'>Revisitas</th>
          <td className='px-3 text-center font-bold text-lg'>10</td>
        </tr>
        <tr className='border-b border-b-foreground/20 h-9'>
          <th className='border-r border-r-foreground/20 font-medium'>Cursos</th>
          <td className='px-3 text-center font-bold text-lg'>5</td>
        </tr>
      </tbody>
    </table>
  )
}
