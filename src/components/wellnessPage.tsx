import React from 'react'

type wellnessPageProp = {
    wellnessID: number
    wellnessName: string
    wellnessValue?: number
}

 function wellnessPage(wellnessPage: wellnessPageProp): JSX.Element {
  const { wellnessID, wellnessName, wellnessValue} = wellnessPage
  return (
    <div>
        <header>
          <h2> header here</h2>
        </header>
        <body>
          <p>
            {wellnessName}
          </p>
        </body>
        <footer>
          <h4> footer</h4>
        </footer>
    </div>
  )
}
export default {wellnessPage}

