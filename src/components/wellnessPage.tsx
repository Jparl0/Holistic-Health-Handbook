import React from 'react'


type wellnessPageProp = {
    wellnessID: number
    wellnessName: string
    wellnessValue?: number
}

 function wellnessPage(wellnessPage: wellnessPageProp): JSX.Element {
  const { wellnessID, wellnessName, wellnessValue} = wellnessPage

  // const wellnessHeaderCss = css`
  //   padding: 50px;
  // `

  return (
    <div>
        <header>
          <h2> header here</h2>
        </header>
        <body>
          {/*  */}
          <h3 >
            {wellnessName}
          </h3>

          {/*  */}



          {/*  */}


          {/*  */}
          <p>
          </p>
        </body>
        <footer>
          <h4> footer</h4>
        </footer>
    </div>
  )
}
export default {wellnessPage}

