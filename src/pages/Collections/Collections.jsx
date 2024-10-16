import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Collections.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import backButton from '../../assets/icons/back-button.svg';
import grid3 from '../../assets/icons/grid-3-dot.svg';
import grid2 from '../../assets/icons/grid-2-dot.svg';
import grid1 from '../../assets/icons/grid-1-dot.svg';
import sortDropDown from '../../assets/icons/sort-dropdown.svg';
import SidebarFilter from './components/SIdebarFilter/SidebarFilter';
import SidebarFilterMobile from './components/SIdebarFilter/SidebarFilterMobile';
import ProductImage from '../../components/LandingPageComponents/UIComponents/ProductImage/ProductImage';

import model10 from '../../assets/images/model-10.jpg';
import model11 from '../../assets/images/model-11.jpg';
import model3 from '../../assets/images/model-3.jpg';
import collection1 from '../../assets/images/collection-1.jpg';
import collection3 from '../../assets/images/collection-3.jpg';

export default function Collections() {
    const navigate = useNavigate(); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [grid3Layout, setgrid3Layout] = useState(true);
    const [grid2Layout, setgrid2Layout] = useState(false);

    // Restore scroll position when the component mounts
    useEffect(() => {
        const savedScrollPosition = sessionStorage.getItem('scrollPosition');
        if (savedScrollPosition) {
            window.scrollTo(0, parseInt(savedScrollPosition, 10));
        }
    }, []);

    // Handle navigation to product details and save scroll position
    const handleDetails = (product) => {
        // console.log(product)
        // Save the current scroll position
        sessionStorage.setItem('scrollPosition', window.scrollY);

        // Generate the product name ID string
        const idString = String(product.name).toLowerCase().replace(/\s+/g, '');
        
        // Navigate to product details
        navigate(`/product/${idString}`, {
            state: {
                item: product,
            },
        });
    };

    const productData = [
        {
            image: [model10, model3],
            name: 'Elegant Evening Ensemble',
            price: '₦213,340.00',
            colorQuantity: 4,
            colorList: ['Blue', 'red', 'Green', 'Purple'],
            description: 'This effortlessly stylish look features a relaxed-fit white tee paired with high-waisted mom jeans and sleek white sneakers, perfect for a day out in the city.'
        },
        {
            image: [collection1],
            name: 'Parisian Elegance',
            price: '₦213,340.00',
            colorQuantity: 2,
            colorList: ['Green', 'Purple'],
            description: 'Embrace your free spirit with a flowy maxi dress adorned with vibrant floral patterns, layered with a denim jacket and accessorized with chunky bracelets and a wide-brimmed hat.'
        },
        {
            image: [model11],
            name: 'Neon Vibes',
            price: '₦213,340.00',
            colorQuantity: 3,
            colorList: ['Blue', 'red', 'White'],
            description: 'Command attention in a tailored blazer over a silk blouse, complemented by slim-fit trousers and classic pointed-toe pumps, ideal for making a powerful statement in the boardroom.'
        },
        {
            image: [collection3],
            name: 'Sunset Silhouettes',
            price: '₦213,340.00',
            colorQuantity: 1,
            colorList: ['Blue'],
            description: 'Elevate your athleisure game with a stylish cropped hoodie matched with high-waisted leggings and trendy chunky sneakers, perfect for transitioning from the gym to brunch.'
        },
    ];

    return (
        <div className='collection-div'>
            <div className='bg-white relative'>
                <div className='flex justify-between items-center relative mb-4 '>
                    <div className='flex justify-between w-full stroke px-4 md:px-4 lg:px-16 py-3'>
                        <Link to="/"><img src={backButton} alt="" /></Link>
                        <div className='flex'>
                            <img className='block md:hidden w-8 active-grid mr-4' src={grid1} alt="" />
                            <img onClick={() => {setgrid2Layout(true); setgrid3Layout(false)}} className={`hidden md:block w-8  mr-4 ${grid2Layout ? 'active-grid' : ''}`} src={grid2} alt="" />
                            <img onClick={() => {setgrid3Layout(true); setgrid2Layout(false)}} className={`hidden md:block w-8 ${grid3Layout ? 'active-grid' : ''}`} src={grid3} alt="" />
                        </div>
                    </div>
                    <div className='h-full py-6 px-14 sort-button'>
                        <img className='' src={sortDropDown} alt="" />
                    </div>
                </div>

                <div className='px-4 text-right block md:hidden sticky z-10 top-20 right-2'>
                    <button onClick={() => setIsModalOpen(true)} className="p-2 bg-black text-white">
                        Open Filter
                    </button>
                </div>


                {/* --------------------------------------------------------------------------------------------------------- */}
                <div className=''>
                <div className='px-0 md:px-4 lg:px-16 py-6 flex'>
                    <div className='mr-0 md:mr-20 sticky z-10 top-20'>
                        {/* SidebarFor Larger screens */}
                        <div className='hidden md:block '>
                            <SidebarFilter className='filter' />
                        </div>

                        {/* Sidebar For Mobile screens */}
                        <div className='block md:hidden mobile-sidebar-filter'>
                            <TransitionGroup>
                                {isModalOpen && 
                                    <CSSTransition timeout={300} classNames="sidebar">
                                        <SidebarFilterMobile isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className='filter' />
                                    </CSSTransition>
                                }
                            </TransitionGroup>
                        </div>
                    </div>
                    

                    <div className={`grid grid-cols-1 md:grid-cols-2 mt-6 gap-4 w-full ${grid3Layout ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
                    {/* <div className={`grid grid-cols-1 md:grid-cols-2 h-screen overflow-y-scroll max-h-screen overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent  mt-6 gap-4 w-full ${grid3Layout ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}> */}
                        {productData.map((product, index) => (
                            
                            <div onClick={() => handleDetails(product)} className='group mb-10 text-center flex flex-col items-center justify-center' key={index}>
                                <ProductImage onTrigger={() => handleDetails(product)} ProductImage={product.image[0]} />
                                <div className='mt-4 mb-8 text-center w-[100%] md:w-[85%] cursor-pointer'>
                                    <h1 className=' text-[#868686]'>{product.name}</h1>
                                    <h1 className='text-[#868686] mt-2'>{product.price}</h1>
                                    <h1 className='text-[#868686] mt-2 uppercase'>{product.colorQuanity} COLORS AVAILABLE</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
                </div>


                {/* -------------------------------------------------------------------------------------------------------------- */}


            </div>
        </div>
    );
}
