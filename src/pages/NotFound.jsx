import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'


function NotFound() {
  return (
   <div className='hero'>
     <div className="text-center ero-content">
       <div classname="max-w-lg">
         <h1 className="text-8xl font-bold mb-8">
           oops!
         </h1>
         <p>404 - Page Not Found</p>
         <br/>
         <Link to='/' className='btn btn-primary btn-lg'>
           <FaHome className='mr-2' />
           Back To Home

         </Link>

       </div>
     </div>
     </div>
  )
}

export default NotFound