import React from 'react'

const Header = () => (
  <div className='header'>
    <img
      src='https://s3-us-west-2.amazonaws.com/bardleware1/profile-square-bw.jpg'
      alt='face'
    />
    <div>
      <h1 className='header'>DEVAN SISSON</h1>
      <span>
        <a className='github-handle' href='http://github.com/bardleware'>
          @bardleware
        </a>
      </span>
    </div>
  </div>
)

export default Header
