import React from 'react'
// import hej from './assets/coffee_images/hej.webp'


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

  const tea = [
    {
      id: 1,
      name: "Breakfast",
      price: "£ 1.80"
    },
    {
      id: 2,
      name: "Early Grey",
      price: "£ 2.00"
    },
    {
      id: 3,
      name: "Mint",
      price: "£ 2.20"
    },
    {
      id: 4,
      name: "Lemon and Ginger",
      price: "£ 2.20"
    },
    {
      id: 5,
      name: "Green",
      price: "£ 2.00"
    },
  ]

  const extra= [
    {
      id:1,
      name: 'Extra Shot',
      price: '£ 0.55',
      info: '',
    },
    {
      id:2,
      name: 'Syrups',
      price: '£ 0.55',
      info: 'Salted Caramel, Vanilla, Gingerbread, Hazelnut',
    },
    {
      id:3,
      name: 'Alternative Milk',
      price: '£ 0.20',
      info: 'Oat, Almond, Coconut, Soya',
    },
  ]


  return(
    <div name='menu' class="flex h-screen justify-center items-center flex-col">
        <div
            class="w-full h-screen bg-[url('https://images.pexels.com/photos/942803/pexels-photo-942803.jpeg')] bg-cover bg-center">
            <div class=" w-full h-full flex justify-center items-center backdrop-brightness-75 table-auto">
                
                <div class="px-2 pb-52">
                    <h2 className='text-left font-bold text-3xl border-b-4 text-gray-800'>Black Coffee</h2>
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <table class="min-w-full text-center text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                              <tr>
                                <th scope="col" class="px-6 py-2"></th>
                                <th scope="col" class="px-6 py-2 text-xl text-gray-900">8oz</th>
                                <th scope="col" class="px-6 py-2 text-xl text-gray-900">12oz</th>
                              </tr>
                            </thead>
                            {
                                coffee_without_milk.map(({id, name, price_reg, price_lrg}) => (
                                  
                                  <tbody>
                                    <tr key={id} class="border-b dark:border-neutral-500">
                                      <td class="whitespace-nowrap px-6 py-2 text-xl font-medium">{name}</td>
                                      <td class="whitespace-nowrap px-6 py-2 text-xl ">{price_reg}</td>
                                      <td class="whitespace-nowrap px-6 py-2 text-xl ">{price_lrg}</td>
                                    </tr>
                                  </tbody>
                                ))
                            }
                            
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="px-2 ">
                    <h2 className='text-left font-bold text-3xl border-b-4 text-gray-800'>Coffee with Milk</h2>
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <table class="min-w-full text-center text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                              <tr>
                                <th scope="col" class="px-6 py-2"></th>
                                <th scope="col" class="px-6 py-2 text-xl text-gray-900">8oz</th>
                                <th scope="col" class="px-6 py-2 text-xl text-gray-900">12oz</th>
                              </tr>
                            </thead>
                            {
                                coffee_with_milk.map(({id, name, price_reg, price_lrg}) => (
                                  
                                  <tbody>
                                    <tr key={id} class="border-b dark:border-neutral-500">
                                      <td class="whitespace-nowrap px-6 py-2 text-xl font-medium">{name}</td>
                                      <td class="whitespace-nowrap px-6 py-2 text-xl ">{price_reg}</td>
                                      <td class="whitespace-nowrap px-6 py-2 text-xl ">{price_lrg}</td>
                                    </tr>
                                  </tbody>
                                ))
                            }
                            
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class=" px-2">
                    <h2 className='text-left font-bold text-3xl border-b-4 text-gray-800'>Tea Menu</h2>
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <table class="min-w-full text-center text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                              <tr>
                                <th scope="col" class="px-6 py-2"></th>
                                <th scope="col" class="px-6 py-2 text-xl text-gray-900">Cup</th>
                              </tr>
                            </thead>
                            {
                                tea.map(({id, name, price}) => (
                                  
                                  <tbody>
                                    <tr key={id} class="border-b dark:border-neutral-500">
                                      <td class="whitespace-nowrap px-6 py-2 text-2xl font-medium">{name}</td>
                                      <td class="whitespace-nowrap px-6 py-2 text-xl ">{price}</td>
                                    </tr>                                  </tbody>
                                ))                            }
                            
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="px-2">
                    <h2 className='text-left font-bold text-3xl border-b-4 text-gray-800'>Extra</h2>
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <table class="min-w-full text-center text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                              <tr>
                                <th scope="col" class="px-6 py-2"></th>
                                <th scope="col" class="px-6 py-2 text-xl text-gray-900">Price</th>
                              </tr>
                            </thead>
                            {
                                extra.map(({id, name, price}) => (
                                  
                                  <tbody>
                                    <tr key={id} class="border-b dark:border-neutral-500">
                                      <td class="whitespace-nowrap px-6 py-2 text-2xl font-medium">{name}</td>
                                      <td class="whitespace-nowrap px-6 py-2 text-xl ">{price}</td>
                                      {/* <td class="whitespace-nowrap px-6 py-2 text-xl ">{info}</td> */}
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
        </div>
    </div>
  )
}

export default Menu