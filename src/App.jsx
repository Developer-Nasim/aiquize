import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom' 
import { Suspense } from 'react'
import {PageLayout,Home,Contact,Howto,ErorrPage,About,Profile,Dashboard,Quize,QuizeDetails,Auth} from './Helpers/Splited_imports'
import AuthProvider from './Contexts/Auth'
import { PrivateRoute, ProtectLogin } from './Helpers/PrivateRoute'
import QuizeFromLocalStorage from './Contexts/QuizeFromLocalStorage'
  



function App() { 
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<PageLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='howto' element={<Howto/>}/>
        <Route path='contact' element={<Contact/>}/>
        
        {/* Dashboard pages */}
        <Route path='/profile' element={<QuizeFromLocalStorage><PrivateRoute element={<Dashboard/>}/></QuizeFromLocalStorage>}>
          <Route index element={<Profile />}/>
          <Route path='quize/:id' element={<Quize />}/>
          <Route path='quize/:id/details' element={<QuizeDetails />}/>
        </Route>

        {/* Login Page */}
        <Route path='join' element={<ProtectLogin element={<Auth/>}/>}/>
        
        {/* 404 Page */}
        <Route path='*' element={<ErorrPage />}/>
      </Route>
    )
  )
 


  return (
    <AuthProvider>
      <Suspense fallback={<p className='text-center mt-5 mt-5'>loading...</p>}>
        <RouterProvider router={router}/>
      </Suspense>
    </AuthProvider>
  )
}

export default App
