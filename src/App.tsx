import { useState } from 'react'

import './App.css'
import Success from './Success'

const pros = ["Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!"]

function App() {
  // const [count, setCount] = useState(0)
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState<string>("")
  const [isValid, setIsValid] = useState<boolean | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const value = emailPattern.test(email)
    setIsValid(value);

    if(value) {
      setSuccess(true)
    }


  }

  return (
    <main
      className='bg-white lg:bg-dark-slate-grey flex w-screen lg:h-screen justify-center items-center flex-col lg:flex-row'
    >
      {
        !success && (
          <>
          <img src="/illustration-sign-up-mobile.svg" alt="" className='w-full lg:hidden block' />
          <div className='container bg-white max-w-[900px] flex p-6 rounded-3xl gap-10 items-center justify-between'>
        <div className=' lg:pl-6 w-full lg:w-1/2'>
          <h1
            className=''
          >Stay Updated!</h1>

          <p> Join 60,000+ product managers receiving monthly updates on:
</p>
    <ul className='space-y-3 my-8'>
          {
            pros.map( (pro, index) => {
              return (
                <li key={index}>
                  <div className='flex gap-4 lg:items-center items-start '>
                    <img src="/icon-list.svg" alt="" className='w-6'/>
                    {pro}
                  </div>
                  </li>
              )
            })
          }
  </ul>
          <form onSubmit={handleSubmit}>
            <label htmlFor="" className='text-xs font-bold flex justify-between'>
              <span>Email address</span>
              {isValid === false && <span className='text-tomato'>Valid Email Required</span>}
            </label>
            <input type="email" name="email" id="email" placeholder='email@company.com'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setIsValid(null)
            }}
            className={`w-full border-grey hover:cursor-pointer border rounded-md p-4 ${isValid === false && "border-tomato bg-tomato/20 text-tomato"}`}
            />

            <button>
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>

        <div className='w-1/2 ml-auto hidden lg:block'>
          <img src="/illustration-sign-up-desktop.svg" alt="" className='ml-auto ' />
        </div>
      </div>
      </>
        )
      }
      {
        success && <Success email={email} />
      }
    </main>
  )
}

export default App
