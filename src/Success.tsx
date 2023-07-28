// import React from 'react'

type Props = {
    email : string
}

const Success = ({email}: Props) => {
  return (
    
      <div className='text-tomato bg-white relative p-10 pt-20 rounded-3xl max-w-[500px] h-screen md:h-auto'>
            <img src="/icon-success.svg" alt="" className='w-16 h-16 mb-6' />
        <h1>
        Thanks for subscribing!
        </h1>

        <p className="mb-5">A confirmation email has been sent to 
          <b>&nbsp; {email}. </b>
  Please open it and click the button inside to confirm your subscription.</p>

  <button className="absolute lg:static bottom-5 w-4/5 lg:w-full">Dismiss message</button>
      </div>
    
  )
}

export default Success
