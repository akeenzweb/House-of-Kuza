import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './ProductDetails.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import backButton from '../../assets/icons/back-button.svg';
import checkMark from '../../assets/icons/checkmark.svg';
import minus from '../../assets/icons/minus.svg';
import plus from '../../assets/icons/plus.svg';
import likeIcon1 from '../../assets/icons/like-1.svg';
import likeIcon2 from '../../assets/icons/like-2.svg';
import copyIcon from '../../assets/icons/copy.svg';
import instagram from '../../assets/icons/instagram.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import arrow from '../../assets/icons/arrow-right.svg';
import sizeChart from '../../assets/images/size-chart.jpg';
import sizeChartMobile from '../../assets/images/size-chart-mobile.jpg';

export default function ProductDetails() {
    const [details, setDetails] = useState({});
    const [liked, setLiked] = useState(false);
    const location = useLocation();

    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the currently displayed image

    useEffect(() => {
        if (location.state && location.state.item) {
            setDetails(location.state.item);
            console.log(location.state.item); // Log the item to verify
        }
    }, [location.state]);

    const [count, setCount] = useState(1);

    const incrementCount = () => setCount(prevCount => prevCount + 1);

    const decrementCount = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    };

    const toggleLike = () => {
        setLiked(prevLiked => !prevLiked);
    };

    const [isOpenDescription, setIsOpenDescription] = useState(false);
    const [isOpenSizeGuide, setIsOpenSizeGuide] = useState(false);

    const handleImageClick = (index) => {
        setCurrentImageIndex(index); // Update the current image index
    };

    return (
        <div>
            <div className='flex justify-between items-center relative mb-0 lg:mb-4'>
                <div className='flex justify-between w-full stroke px-4 md:px-4 lg:px-16 py-3'>
                    <Link to="/Collections">
                        <img src={backButton} alt="Back" />
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
                <div className="col-span-4 mx-0 lg:ml-16">
                    <div className='relative flex'>
                        <div className='absolute left-5 top-5 lg:relative lg:left-auto lg:top-auto mr-[40px]'>
                            <ul className='bg-white bg-opacity-40 rounded-lg lg:bg-transparent lg:rounded-none p-2 lg:p-0'>
                                {details.image && details.image.map((image, index) => (
                                    <li key={index} onClick={() => handleImageClick(index)}>
                                        <div className={`w-[40px] h-[70px] lg:w-[90px] lg:h-[160px] mb-4 cursor-pointer ${currentImageIndex === index ? 'active-image' : ''}`}>
                                            <img className='object-cover w-full h-full' src={image} alt={`Detail ${index}`} />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='hidden lg:block w-[740px] h-[750px]'>
                            <img className='object-cover w-full h-full' src={details.image?.[currentImageIndex]} alt="Main product" />
                        </div>

                        <div className='block lg:hidden w-full'>
                            <img className='object-cover w-full h-full' src={details.image?.[currentImageIndex]} alt="Main product" />
                        </div>
                    </div>
                </div>

                <div className="col-span-4 lg:col-span-3 mx-5 lg:mr-16">
                    <div>
                        <div className='mt-4 lg:mt-0'>
                            <h2 className='text-3xl mb-4 uppercase tracking-wide lg:tracking-widest'>{details.name}</h2>
                            <h4 className='text-xl mb-4 text-[#868686]'>{details.price}</h4>
                            <h4 className='text-xl mb-4 text-[#868686]'>{details.colorQuantity} COLORS AVAILABLE</h4>
                        </div>
                        <div className='mt-8'>
                            <div className='relative'>
                                <select id="color-options" name="color-options" className="mt-1 block w-full pl-4 pr-10 py-4 text-base border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#E3B38F] focus:border-[#E3B38F] text-[20px] appearance-none">
                                    <option value="blue">Color: Blue</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>

                            <div className='relative mt-4'>
                                <select id="size-options" name="size-options" className="mt-1 block w-full pl-4 pr-10 py-4 text-base border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#E3B38F] focus:border-[#E3B38F] text-[20px] appearance-none">
                                    <option value="size8">Size: 8</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>

                            <div className='flex mt-4'>
                                <h2 className='text-[#179032] text-xl mr-2'>13 Pieces in stock</h2>
                                <img src={checkMark} alt="In stock" />
                            </div>

                            <div className='flex mt-4'>
                                <div className='flex items-center mr-[10px] lg:mr-[24px] space-x-4 border border-[#B6B6B6] border-solid inline-flex py-2 px-6'>
                                    <div onClick={decrementCount} className="">
                                        <img className='h-[48px] w-[48px]' src={minus} alt="Minus" />
                                    </div>
                                    <span className="text-lg font-semibold">{count}</span>
                                    <div onClick={incrementCount} className="">
                                        <img className='h-[48px] w-[48px]' src={plus} alt="Plus" />
                                    </div>
                                </div>
                                <button className="bg-black w-full text-white py-2 px-4 uppercase tracking-wide lg:tracking-widest hover:bg-[#1b1b1b] hover:scale-105 transition-all duration-500 ease-in-out">
                                    ADD TO SHOPPING BAG
                                </button>
                            </div>

                            <div className='flex mt-8'>
                                <img onClick={toggleLike} src={liked ? likeIcon2 : likeIcon1} alt="Like Icon" />
                                <h2 className="w-full text-black py-2 px-4 uppercase tracking-wide lg:tracking-widest">Add to Wishlist</h2>
                            </div>

                            <div className='flex mt-8'>
                                <h2 className='text-[#E3B38F] mr-8 text-xl'>Share this page with friends:</h2>
                                <div className='flex'>
                                    <img className='h-[24px] mr-8' src={copyIcon} alt="Copy" />
                                    <img className='h-[24px] mr-8' src={instagram} alt="Instagram" />
                                    <img className='h-[24px] mr-8' src={whatsapp} alt="WhatsApp" />
                                </div>
                            </div>

                            <div className='drop-item mt-8'>
                                <div className='line mb-8'>
                                    <div className='drop-question' onClick={() => setIsOpenDescription(!isOpenDescription)}>
                                        <h2 className=' text-lg'>Description</h2>
                                        <img src={arrow} alt="Toggle" className={`arrow w-6 ${isOpenDescription ? 'rotate' : ''}`} />
                                    </div>
                                    <TransitionGroup>
                                        {isOpenDescription && (
                                            <CSSTransition key="description" timeout={300} classNames="drop">
                                                <div className='description-text text-amber-800'>
                                                    <p>{details.description}</p>
                                                </div>
                                            </CSSTransition>
                                        )}
                                    </TransitionGroup>
                                </div>
                                <div className='line'>
                                    <div className='drop-question' onClick={() => setIsOpenSizeGuide(!isOpenSizeGuide)}>
                                        <h2 className='text-lg'>Size Guide</h2>
                                        <img src={arrow} alt="Toggle" className={`arrow w-6 ${isOpenSizeGuide ? 'rotate' : ''}`} />
                                    </div>
                                    <TransitionGroup>
                                        {isOpenSizeGuide && (
                                            <CSSTransition key="size-guide" timeout={300} classNames="drop">
                                                <div className='description-text'>
                                                    <img className='hidden lg:block object-cover w-full h-full' src={sizeChart} alt="Size Chart" />
                                                    <img className='lg:hidden object-cover w-full h-full' src={sizeChartMobile} alt="Size Chart Mobile" />
                                                </div>
                                            </CSSTransition>
                                        )}
                                    </TransitionGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
