
import './App.css'
import UseCallBackExample from './hooks/use-callback'
import UseContextExample from './hooks/use-context'
import UseEffectExampale from './hooks/use-effect'
import AppUseEffect from './hooks/use-effect/homePage'
import UseImperativeHandleExample from './hooks/use-ImperativeHandle'
import UseLayoutEffectExample from './hooks/use-layoutEffect'
import UseMemoExample from './hooks/use-memo'
import UseReducerExample from './hooks/use-reducer'
import UseRefExample from './hooks/use-ref/UseRefExample'
import UseStateExample from './hooks/use-state'
import Test from './test'

function App() {


  return (
    <div className='flex  h-[100vh] w-[100%]  bg-black text-gray-200 flex-col gap-3'>
      
      {/* use state  */}
      {/* <UseStateExample /> */}

      {/* use effect part 1 */}
      {/* <UseEffectExampale /> */}

      {/* use effect part 2 */}
      {/* <AppUseEffect /> */}


      {/* use Layout effect */}
      {/* <UseLayoutEffectExample /> */}

      {/* use reducer   */}
      {/* <UseReducerExample /> */}

      {/* use context */}
      {/* <UseContextExample /> */}
 
      {/* use ref  */}
      {/* <UseRefExample /> */}

      {/* use imperative handle */}
      {/* <UseImperativeHandleExample /> */}

      {/* use Memo */}
      {/* <UseMemoExample /> */}

      {/* use callback */}
      <UseCallBackExample />

      {/* <Test /> */}
    </div>
  )
}

export default App

// https://www.youtube.com/watch?v=7Co9blXSJTM&list=PL775kOQ5jy5wQ_DPAqq9qwmLIX-LhM-Eh&index=2