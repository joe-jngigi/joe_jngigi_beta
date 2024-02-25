
import { PostProps } from '@/types/types'

// This should receive data from the post component(Parent)
const Postcard = (eachData: PostProps ) => {
    console.log(eachData)
  return (
    <section className='dark:bg-slate-950 bg-white p-2 rounded-2xl'>
      <h2 className='text-xl font-semibold'>{eachData.title}</h2>
      <p className='mt-2 text-sm text-gray-500'>{eachData.body}</p>
    </section>
  )
}

export default Postcard