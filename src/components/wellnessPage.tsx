import React from 'react'


type receivedWellnessPageProp = {
    wellnessID: number
    wellnessName: string
    wellnessValue?: number
}

 function wellnessPage(wellnessPage: receivedWellnessPageProp): JSX.Element {
  const { wellnessID, wellnessName, wellnessValue} = wellnessPage

  // const wellnessHeaderCss = css`
  //   padding: 50px;
  // `

  return (
    <div>
        <header>
          <h2> header here</h2>
        </header>
        <body className='bodyContainer'>
          {/* Body Section Header Text */}
          <h3 >
            {wellnessName}
          </h3>

          {/* main sub-body container */}
          <div className='outerWellnessContainer'>

            <div className='wellnessCardsContainer'>
              {/* Example Container */}
              <div className='wellnessCard'>
                <h4>
                  Name: 
                </h4>
                <p>
                  Wellness value:
                </p>
                <p>

                </p>
              </div>
            </div>
          </div>

          <p>
          bottom of body outermost
          </p>
        </body>
        <footer>
          <h4> footer</h4>
        </footer>
    </div>
  )
}
export default wellnessPage

