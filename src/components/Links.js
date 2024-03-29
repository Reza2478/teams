import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

//Redux
import { changecluster } from '../features/filterSlice'

const Links = () => {
  const dispatch = useDispatch()
  const cluster = useSelector(state => state.filter.cluster)
  
  return (
    <div className='flex gap-x-5 mb-6'>
      <button
        onClick={() => dispatch(changecluster('all'))}
        className={` p-4 text-3xl  ${
          cluster === 'all'
            ? 'text-second  border-second border-b-2'
            : 'text-primary'
        }`}
      >
        All
      </button>
      <button
        onClick={() => dispatch(changecluster('teams'))}
        className={` p-4 text-3xl  ${
          cluster === 'teams'
            ? 'text-second  border-second border-b-2'
            : 'text-primary'
        }`}
      >
        Teams
      </button>
    </div>
  )
}

export default Links
