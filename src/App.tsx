import * as React from "react";


function App() {
  function foo(a: string):void {
    console.log(a)
  }
  React.useEffect(() => {
    foo('11111')
  },[])
 return  <div>**********</div>
}
export default App;