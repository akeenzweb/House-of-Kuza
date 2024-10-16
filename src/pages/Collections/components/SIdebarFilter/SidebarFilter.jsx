import React, { useState } from 'react'
import './SidebarFilter.css'
import line from '../../../../assets/icons/line.svg'

export default function SidebarFilter() {
    const [selectedCollection, setSelectedCollection] = useState('all')
    const collections = ['Bohemian Bliss', 'Ethereal Essence', 'Chromatic dreams', 'Urban Mirage', 'One Off Ensemble']
    const categories = ['Two Piece', 'Gown', 'Tops', 'Shorts']

    const handleCollectionChange = (event) => {
        setSelectedCollection(event.target.value);
    };
    
  return (
    <div>
        <div className='w-[200px] bg-white p-4 sidebar-filter'>
            <h1 className='text-xl mb-8'>Collections</h1>
            <div>
                <form>
                    <ul>
                        <li className='flex justify-between mb-4'>
                            <label htmlFor='all'>All</label>
                            <div>
                                <span></span>
                                <input  className="" type="radio" id="all" name="all" value="all" checked={selectedCollection === 'all'} onChange={handleCollectionChange} />
                            </div>
                            
                        </li>
                        {collections.map((collection) => (
                            <li key={collection} className='flex justify-between mb-4'>
                                <label htmlFor={collection}>{collection}</label>
                                <input  className="form-radio text-black focus:ring-black" type="radio" id={collection} name={collection} value={collection} checked={selectedCollection === collection}  onChange={handleCollectionChange} />
                            </li>
                        ))}

                        <img className='my-10' src={line} alt="" />

                        <div>
                            <h1 className='text-xl mb-8'>Categories</h1>
                            {categories.map((category) => (
                                <li key={category} className='flex justify-between mb-4'>
                                    <label htmlFor={category}>{category}</label>
                                    <input className="form-radio text-black focus:ring-black" type='radio' id={category} name={category} value={category} checked={selectedCollection === category} onChange={handleCollectionChange} />
                                </li>
                            ))}
                        </div>
                    </ul>
                </form>
                
                
            </div>
        </div>
      
    </div>
  )
}
