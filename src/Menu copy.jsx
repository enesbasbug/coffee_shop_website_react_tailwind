import React from 'react'
// import hej from './assets/coffee_images/hej.webp'
import hej from './assets/coffee_images/hej.png'
{/* <img src={hej} alt="Hej Symbol" className='mt-5 rounded-3xl max-h-24 lg:max-h-64 lg:pl-0 lg:mx-0 mx-10' /> */}
const Menu = () => {

  const coffee_without_milk = [
    { 
      id: 1,
      name: 'Filter',
      price_reg: '£ 1.00',
      price_lrg: '£ 2.00',
    },
    { 
      id: 2,
      name: 'Espresso',
      price_reg: '£ 1.80',
      price_lrg: '£ 1.95',
    },
    { 
      id: 3,
      name: 'Americano',
      price_reg: ' ---- ',
      price_lrg: '£ 2.20',
    },
  
  ]

  const coffee_with_milk = [
    { 
      id: 1,
      name: 'Macchiato',
      price_reg: '£ 2.10',
      price_lrg: '£ 2.25',
    },
    { 
      id: 2,
      name: 'Cortado',
      price_reg: '£ 2.20',
      price_lrg: ' ---- ',
    },
    { 
      id: 3,
      name: 'Latte',
      price_reg: '£ 2.50 ',
      price_lrg: '£ 2.70',
    },
    { 
      id: 4,
      name: 'Flat White',
      price_reg: '£ 2.50 ',
      price_lrg: '£ 2.70',
    },
    { 
      id: 5,
      name: 'Cappuccino',
      price_reg: '£ 2.50 ',
      price_lrg: '£ 2.70',
    },
    { 
      id: 6,
      name: 'Hot Choc',
      price_reg: '£ 2.60 ',
      price_lrg: '£ 2.80',
    },
    { 
      id: 7,
      name: 'Mocha',
      price_reg: '£ 2.60 ',
      price_lrg: '£ 2.80',
    },
  
  ]

  return (
    <div name='menu' className='lg:h-screen md:lg:h-full sm:h-screen w-full bg-gradient-to-b from-gray-700 via-gray to-gray-500  gap-8 flex justify-center item-center flex-col'>
        <div class=" mt-24 md:max-w-xl lg:max-w-2xl ">
              <div className="">
                <h2 className='text-left font-bold text-5xl border-b-4 text-gray-300'>Black Coffee</h2>
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <table class="min-w-full text-center text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                              <tr>
                                <th scope="col" class="px-6 py-2"></th>
                                <th scope="col" class="px-6 py-2 text-xl text-white">8oz</th>
                                <th scope="col" class="px-6 py-2 text-xl text-white">12oz</th>
                              </tr>
                            </thead>
                            {
                                coffee_without_milk.map(({id, name, price_reg, price_lrg}) => (
                                  
                                  <tbody>
                                    <tr key={id} class="border-b dark:border-neutral-500">
                                      <td class="whitespace-nowrap px-6 py-2 text-2xl font-medium">{name}</td>
                                      <td class="whitespace-nowrap px-6 py-2 text-2xl ">{price_reg}</td>
                                      <td class="whitespace-nowrap px-6 py-2 text-2xl ">{price_lrg}</td>
                                    </tr>
                                  </tbody>
                                ))
                            }
                            
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <div>
                <h2 className='text-left font-bold text-5xl border-b-4 text-gray-300'>Coffee with Milk</h2>
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <table class="min-w-full text-center text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                              <tr>
                                <th scope="col" class="px-6 py-2"></th>
                                <th scope="col" class="px-6 py-2 text-xl text-white">8oz</th>
                                <th scope="col" class="px-6 py-2 text-xl text-white">12oz</th>
                              </tr>
                            </thead>
                            {
                                coffee_with_milk.map(({id, name, price_reg, price_lrg}) => (
                                  
                                  <tbody>
                                    <tr key={id} class="border-b dark:border-neutral-500">
                                      <td class="whitespace-nowrap px-6 py-2 text-2xl font-medium">{name}</td>
                                      <td class="whitespace-nowrap px-6 py-2 text-2xl ">{price_reg}</td>
                                      <td class="whitespace-nowrap px-6 py-2 text-2xl ">{price_lrg}</td>
                                    </tr>
                                  </tbody>
                                ))
                            }
                            
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <div></div>
              <div></div>

            

            
        </div>    
    </div>
  )
}

export default Menu