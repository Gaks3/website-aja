import Image from 'next/image'

const NotFound = () => {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3'>
      <Image src={'/circle-logo.png'} alt='Logo' width={100} height={100} />
      <div className='flex items-center space-x-3 divide-x'>
        <p className='text-xl font-bold'>404</p>
        <h1 className='pl-3'>Not Found Page</h1>
      </div>
    </div>
  )
}

export default NotFound
