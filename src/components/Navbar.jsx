 
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { PresentationChartLineIcon } from "@heroicons/react/24/outline";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

import { NavLink } from 'react-router-dom'
import Particle from './Particle';

const navigation1 = [
  { name: 'Home', Link: '/', icon: HomeIcon },
  { name: 'About', Link: '/about',  icon: UserIcon },
  { name: 'Projects', Link: '/projects',  icon: PresentationChartLineIcon },
  { name: 'Resume', Link: '/resume',  icon: DocumentTextIcon },
];


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Nav() {
    return (
      <>
      <Particle />
      <Disclosure as="nav" className="bg-transparent bg-[#e0e7ff]">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                    {navigation1.map((item) => (
                    <NavLink
                    key={item.name}
                    to={item.Link}
                    className={classNames(
                    'bg-purple-700 text-slate-50 ' , 'text-gray-300 hover:bg-gray-700 hover:text-white ',
                    'rounded-md px-3 py-2 text-lg font-semibold hover:bottom-4 bg-[#fde68a] text-black'
                    )}
                    >
                    <icon className='flex'>
                    <span className="mr-2">
                    <item.icon className="h-6 w-6" />
                    </span>
                    {item.name}
                    </icon>
                    </NavLink>
                  ))}
                    </div>
                  </div>
                </div>
                <div className="h-6 w-6 font-mono text-3xl mx-5 text-end text-slate-50 font-extrabold">
                    Mm.
                  </div>



              </div>
            </div>
  
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation1.map((item) => (
                  <NavLink to={item.Link}>
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    className={classNames(
                      'text-slate-50 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-semibold'
                    )}
                  >
                    {item.name}
                    {item.icon}
                  </Disclosure.Button>
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

</>
    )
  }

///////////////////////////////////////////////////////////////

// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
// import { HomeIcon } from "@heroicons/react/24/outline";
// import { UserIcon } from "@heroicons/react/24/outline";
// import { PresentationChartLineIcon } from "@heroicons/react/24/outline";
// import { DocumentTextIcon } from "@heroicons/react/24/outline";
// import { NavLink } from 'react-router-dom'

// const navigation = [
//   { name: 'Home', Link: '/', icon: HomeIcon },
//   { name: 'About', Link: '/about',  icon: UserIcon },
//   { name: 'Projects', Link: '/projects',  icon: PresentationChartLineIcon },
//   { name: 'Resume', Link: '/resume',  icon: DocumentTextIcon },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Navbar() {
//   return (
//     <Disclosure as="nav" className="bg-gray-500 sm:bg-slate-50">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
               
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4">
//                     {/* pc/laptop */}
//                     {navigation.map((item) => (
//                       <NavLink
//                       key={item.name}
//                       to={item.Link}
//                       className={classNames(
//                           item.current ? 
//                           ' text-black-900 ' : 'text-black-900 hover:bg-[#22C55E] hover:text-white',
//                           'rounded-md px-3 py-2  font-bold text-xl'
//                         )}
//                         aria-current={item.current ? 'page' : undefined}>
//                         {item.name}
//                       </NavLink>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2">
//               {navigation.map((item) => (
//                 <NavLink to={item.Link}>
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   className={classNames(
//                     item.current ? 'bg-gray-900 text-black' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                     'block rounded-md px-3 py-2 text-base font-medium'
//                   )}
//                   aria-current={item.current ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//                 </NavLink>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   )
// }







