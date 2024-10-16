import React, { useState } from 'react';
import './SidebarFilter.css';
import line from '../../../../assets/icons/line.svg';

export default function SidebarFilter({ isOpen, onClose }) {
    const [selectedCollection, setSelectedCollection] = useState('all');
    const collections = ['Bohemian Bliss', 'Ethereal Essence', 'Chromatic Dreams', 'Urban Mirage', 'One Off Ensemble'];
    const categories = ['Two Piece', 'Gown', 'Tops', 'Shorts'];

    const handleCollectionChange = (event) => {
        setSelectedCollection(event.target.value);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
            <div className="w-[300px] bg-white p-4 sidebar-filter h-full pt-24">
                <div className='text-right'>
                    <button onClick={onClose} className="text-black mb-4">Close</button>
                </div>
                
                <h1 className="text-xl mb-8">Collections</h1>
                <form>
                    <ul>
                        <li className="flex justify-between mb-4">
                            <label htmlFor="all">All</label>
                            <div>
                                <input
                                    type="radio"
                                    id="all"
                                    name="collection"
                                    value="all"
                                    checked={selectedCollection === 'all'}
                                    onChange={handleCollectionChange}
                                />
                            </div>
                        </li>
                        {collections.map((collection) => (
                            <li key={collection} className="flex justify-between mb-4">
                                <label htmlFor={collection}>{collection}</label>
                                <input
                                    type="radio"
                                    id={collection}
                                    name="collection"
                                    value={collection}
                                    checked={selectedCollection === collection}
                                    onChange={handleCollectionChange}
                                    className="form-radio text-black focus:ring-black"
                                />
                            </li>
                        ))}
                        <img className="my-10" src={line} alt="" />
                        <div>
                            <h1 className="text-xl mb-8">Categories</h1>
                            {categories.map((category) => (
                                <li key={category} className="flex justify-between mb-4">
                                    <label htmlFor={category}>{category}</label>
                                    <input
                                        type="radio"
                                        id={category}
                                        name="category"
                                        value={category}
                                        checked={selectedCollection === category}
                                        onChange={handleCollectionChange}
                                        className="form-radio text-black focus:ring-black"
                                    />
                                </li>
                            ))}
                        </div>
                    </ul>
                </form>
            </div>
        </div>
    );
}
