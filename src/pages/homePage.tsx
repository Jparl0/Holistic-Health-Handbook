
type Props = {}

export default function HomePage({}: Props): JSX.Element {
  return (
    <div>

        <header>
          <h2> header here</h2>
        </header>
        <body>
            <h3>body header</h3>
            <div className="outerContainer">
                <div className="innerContainer">
                    <p>inner</p>
                </div>
                <p>
                   outer body
                </p>
            </div>
                
        </body>
        <footer>
          <h4> footer</h4>
        </footer>
    </div>
  )
}