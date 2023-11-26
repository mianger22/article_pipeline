export default function MainPage() {
  return (
    <div className='flex w-full h-full'>
      <div className='border-2 border-indigo-500/100 w-2/12 flex items-center justify-center'>Bio area</div>
      <div className='border-2 border-indigo-500/100 w-8/12 flex items-center justify-center'>
        Current article area or list articles
      </div>
      <div className='border-2 border-indigo-500/100 w-2/12 flex items-center justify-center'>Articles area</div>
    </div>
  );
}