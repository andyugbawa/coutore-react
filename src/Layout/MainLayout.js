import React from 'react'

import Fashion from '../Components/Fashion'

function MainLayout({children}) {
  return (
    <div>
        <Fashion></Fashion>
      <h2>{children}</h2>
    </div>
  )
}

export default MainLayout
