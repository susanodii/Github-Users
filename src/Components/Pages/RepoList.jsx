import React from 'react'
import RepoItems from './RepoItems'
import PropTypes  from 'prop-types'
 
const RepoList = ({repos}) => {
  return (
    <div className='rounded-lg shadow-lg card bg-neutral text-white'>
<div className='card-body'>

<h2 className="text-3xl my-4 font-bold card-title">Latest Repositories </h2>

{repos.map((repo)=>(
    
<RepoItems key= {repo.id} repo={repo}/>
))}
</div>
</div>
)
}




RepoList.propTypes={
    repos:PropTypes.array.isRequired
}
export default RepoList