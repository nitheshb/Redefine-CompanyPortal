/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Fragment, useEffect, useState } from 'react'

import { Menu, Transition } from '@headlessui/react'
import {
  ChartPieIcon,
  OfficeBuildingIcon,
  NewspaperIcon,
  UserGroupIcon,
  ScaleIcon,
  PuzzleIcon,
} from '@heroicons/react/outline'
import {
  ChevronDownIcon,
  FireIcon,
  CurrencyRupeeIcon,
  DotsVerticalIcon,
  CheckIcon,
  DocumentTextIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from '@heroicons/react/solid'

import { Link, routes } from '@redwoodjs/router'

import BankSelectionSwitchDrop from 'src/components/A_LoanModule/BankSelectionDroopDown'
import DocRow from 'src/components/LegalModule/Docu_row'
import { USER_ROLES } from 'src/constants/userRoles'
import { useAuth } from 'src/context/firebase-auth-context'
import CostBreakUpSheet from 'src/components/costBreakUpSheet'
import CSManagerApprovalBody from '../A_Crm_sideFormBodies.tsx/cs_manager_approval_body'

// import BankSelectionSwitchDrop from './BankSelectionDroopDown'




import chair from '../../../../public/chair.png'
import chair1 from '../../../../public/chair1.png'
import chair2 from '../../../../public/chair2.png'
import chair3 from '../../../../public/chair3.png'
import chair4 from '../../../../public/chair4.png'
import table from '../../../../public/table.png'
import tv from '../../../../public/tv.png'



const productData = [
  {
    id: 1,
    name: "Chair",
    description: "Black chairs, outdoor",
    price: 5990,
    image: chair1
  },

  // {
  //   id: 2,
  //   name: "POANG",
  //   description: "Armchair, birch",
  //   price: 12990,
  //   image: chair
  // },
  {
    id: 3,
    name: "BILLY",
    description: "Bookcase, white/oak",
    price: 8990,
    image: table
  },
  {
    id: 4,
    name: "MALM",
    description: "Bed frame black-brown",
    price: 24990,
    image: tv
  },
  // {
  //   id: 5,
  //   name: "KALLAX",
  //   description: "Shelf unit, white",
  //   price: 7990,
  //   image: chair4
  // },


];






export default function EcommerceHome({ type, setStatusFun , selUnitPayload}) {


  const { user } = useAuth()

  if (!user?.role?.includes(USER_ROLES.ADMIN)) {
    return null
  }
  return (
    <section className="bg-white w-full md:px-10 md:mb-20 pb-[250px] overflow-auto no-scrollbar  h-[100%] overflow-y-scroll">
      <div className="max-w-3xl mx-auto py-4 text-sm text-gray-700">

        <div className="mt-1">
          <div className="p-2 bg-gradient-to-r from-violet-50 to-pink-50 rounded-md flex flex-row justify-between">
            <h2 className="font-medium flex-grow">Ecommerce</h2>
            <p className="text-md text-[10px] flex-grow text-right">
              Waiting for {' '}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto py-4 text-sm text-gray-700">




<div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-white">
        {productData.map((product) => (
          <div key={product.id} className="flex flex-col bg-white hover:shadow-lg transition-shadow duration-200 rounded-lg">
            
            <div className="relative aspect-square bg-gray-50">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-contain"
              />
    
            </div>
            
            
            <div className="space-y-2 p-4">
              <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">{product.name}</h2>
              <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
              
              
              <div className="flex items-baseline space-x-1 pt-1">
                <span className="text-sm font-medium text-gray-900">Rs.</span>
                <span className="text-xl font-bold text-gray-900">{product.price.toLocaleString()}</span>
              </div>
              
      
              
              
              <button className="w-full rounded-lg bg-blue-600 text-white px-4 py-2.5 text-sm font-medium hover:bg-blue-700 transition-colors mt-4">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>





   


        


      </div>
    </section>
  )
}
