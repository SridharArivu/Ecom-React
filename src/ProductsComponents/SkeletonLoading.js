import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './SkeletonLoad.css';

const SkeletonLoading = () => {
  return (
    <div>
    <SkeletonTheme baseColor="#D6D6D6"  width="15rem">
    
    <h3><Skeleton className='skeleton_image'/></h3>

    <h5><Skeleton/></h5>
    <h5><Skeleton/></h5>
    <h5><Skeleton/></h5>
    <h5><Skeleton className='skeleton__addCart_btn'/></h5>
     </SkeletonTheme>
     </div>
  )
}

export default SkeletonLoading