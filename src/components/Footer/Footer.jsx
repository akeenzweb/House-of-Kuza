import React from 'react'
import './Footer.css'

export default function Footer() {
    const shopMenu = [
        'Coats & Long Jackets',
        'Dresses',
        'Skirts',
        'Denims',
        'Pants',
        'Tops',
        'Accessories',
        'Kaftans',
        'Shorts',
    ]

    const helpSection = [
        'Contacts',
        'Return Policy',
        'Terms & Conditions',
        'Shipping Info',
        'Privacy Policy'
    ]
  return (
    <div>
        <div className='bg-white px-4 md:px-16 py-10 md:py-20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='mb-10'>
                    <h1 className='mb-8 text-xl'>SHOP MENU</h1>
                    <div className='grid grid-cols-2 gap-4'>
                        {shopMenu.map((shop, index) => (
                            <p key={index} className=''>{shop}</p>
                        ))}
                    </div>
                </div>

                <div className='mb-10'>
                    <h1 className='mb-8 text-xl'>HELP</h1>
                    <div className='grid grid-cols-2 gap-4'>
                        {helpSection.map((help, index) => (
                            <p key={index} className=''>{help}</p>
                        ))}
                    </div>
                </div>

                <div className='mb-10'>
                    <h1 className='mb-8 text-xl'>NEWSLETTER</h1>
                    <p>Become a member of the Kuza community </p>
                    <form className='mt-10 form-box'>
                        <input type="text" placeholder='Enter your email address' />
                        <button className='mt-10 px-10 py-6'>Join now</button>
                    </form>
                </div>
            </div>

        </div>
      
    </div>
  )
}
