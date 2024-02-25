import Link from "next/link"
import FragmentChild from "./fragmentChild"
import ParentComponent from "./parentComponent"

const ReactFragments = () =>{
    return(
      <main className="t-app">
        <ParentComponent>
          <FragmentChild />
          
        </ParentComponent>
      </main>

    )
}

export default ReactFragments