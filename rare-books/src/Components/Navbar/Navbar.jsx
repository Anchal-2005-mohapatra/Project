import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import img from '../../assets/book.png';
import { CiHeart } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoArrowUndoCircle } from "react-icons/io5";
import image from "../../assets/p1.png";
import image2 from "../../assets/p2.png";
import image3 from "../../assets/p3.png";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const hamburger = () => {
        setOpen(!open);
    };
    return (
        <div className='m-5 '>
            <div className='flex justify-center gap-2 p-4 items-center md:gap-4 lg:gap-5 '>
                <div className='grid grid-cols-2 grid-rows-2 gap-4 items-center md:flex md:gap-4 lg:flex l=lg:gap-5'>
                    <div className='flex gap-4 items-center'>
                        <img className='h-9  rounded ' src={img} alt="" />
                        <h1 className='hidden sm:block  md:block lg:block' >Rare-Book</h1>
                    </div>
                    <div className='flex gap-4'>
                        <button className='block outline-none hover:text-blue-600  md:hidden lg:hidden'>Login</button>
                        <a href="" ><IoBagHandle size={23} className='block md:hidden lg:hidden hover:text-blue-500' /></a>
                        <GiHamburgerMenu size={23} onClick={hamburger} className='block md:hidden lg:hidden  hover:text-blue-500 ' />
                    </div>
                    <div className='col-span-2 flex items-center  '>
                        <input type="text" placeholder='Search title, authors, sellers, or series '
                            className='pl-1 pt-2 pb-2 border border-gray-300  rounded-xl w-sm  ' />
                        <FaSearch className='relative right-7' color='gray ' />
                    </div>

                </div>


                <div className='hidden md:block lg:block gap-7  '>
                    <div className='flex justify-between gap-3'>
                        <button className=' px-5 lg:px-5 bg-blue-500 rounded-2xl text-white hover:bg-blue-700'>Sell your Books</button>


                        <ul className='flex justify-between w-[300px] items-center'>
                            <li><a href="">About</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href=""><CiHeart size={23} /></a></li>
                            <li><a href="" ><IoBagHandle size={23} /></a></li>
                        </ul>
                    </div>

                </div>

                <button className='hidden md:block lg:block' >Login</button>


                {open && (
                    <div className='bg-white shadow-2xl  w-[90vw] p-4 h-screen fixed z-50 top-0  '>
                        <IoArrowUndoCircle size={23} className='ml-2' onClick={hamburger} />
                        <div className='flex gap-3 p-2'>

                            <button className='px-24 bg-blue-600 rounded-4xl text-white '>Singup</button>
                            <button className='px-24 py-1 text-blue-600 bg-blue-50 rounded-2xl'>Login</button>


                        </div>
                        <div className='font-bold '>
                            <hr className='text-gray-200' />
                            <select name="" id=" " className='pt-2 pb-2'>
                                <option value="" className='hidden '>
                                    Browse by Categories
                                </option>

                                <option value="" >
                                    Fantasy</option>
                                <option value="">

                                    Romance</option>
                                <option value="">
                                    Thrill</option>
                                <option value="">
                                    Sci-Fi</option>
                                <option value="">
                                    Historical Fiction
                                </option>
                                <option value="">
                                    See all Catagories
                                </option>

                            </select>
                            <hr className='text-gray-200' />
                            <p className='pt-2 pb-2'>Collection</p>   <hr className='text-gray-200' />
                            <p className='pt-2 pb-2'>Bookstores</p>  <hr className='text-gray-200' />
                            <p className='pt-2 pb-2'>Shelves</p>   <hr className='text-gray-200' />
                            <p className='pt-2 pb-2'>Pango AI</p>  <hr className='text-gray-200' />
                            <p className='pt-2 pb-2'>Popular Authors</p>  <hr className='text-gray-200' />
                            <p className='pt-2 pb-2'>Popular Series</p> <hr className='text-gray-200' />
                            <p className='pt-2 pb-2'>Multi-Book Search</p> <hr className='text-gray-200' />
                            <p className='pt-2 pb-2'>pricing Hub</p> <hr className='text-gray-200' />
                        </div>
                        <p className='pt-2 pb-2'>Sell Your books</p>
                        <p className='pt-2 pb-2'>About Us</p>
                        <p className='pt-2 pb-2'>Blog</p>
                        <p className='pt-2 pb-2'>Market Guide</p>
                        <p className='pt-2 pb-2'>Help Center</p>
                        <p className='pt-2 pb-2'>Contact Us</p>
                    </div>
                )}


            </div>
            <div className=' flex text-xs text-gray-600  gap-2 p-2 justify-center overflow-scroll md:flex md:text-md md:overflow-hidden  md:gap-4 lg:flex lg:text-lg lg:gap-5 ' >

                <button className='hover:bg-blue-50 hover:shadow hover:rounded-xl p-2 '>Young Adult</button>
                <button className='hover:bg-blue-50 hover:shadow hover:rounded-xl p-2 '>Fantasy</button>
                <button className='hover:bg-blue-50 hover:shadow hover:rounded-xl p-2 '>Sci-Fi</button>
                <button className='hover:bg-blue-50 hover:shadow hover:rounded-xl p-2 '>Thrillers</button>
                <button className='hover:bg-blue-50 hover:shadow hover:rounded-xl p-2 '>Romance</button>
                <button className='hover:bg-blue-50 hover:shadow hover:rounded-xl p-2 '>History</button>
                <select className='hover:bg-blue-50 hover:shadow hover:rounded-xl p-2 '>
                    <option value="" className='hidden'>More Categories</option>
                    <option value="">Comics</option>
                    <option value="">Kid's Book</option>
                    <option value="">History</option>
                    <option value="">Horror</option>
                    <option value="">
                        Mystery
                    </option>
                    <option value="">
                        self-Help
                    </option>
                    <option value="">
                        Business
                    </option>
                    <option value="">
                        Poetry
                    </option>
                </select>
                <button className='hover:bg-blue-50 hover:shadow hover:rounded-xl p-2 '>Bookstore</button>
                <button className='hover:bg-blue-50 hover:shadow hover:rounded-xl p-2 '>Blog</button>
                <select className='hover:bg-blue-50 hover:shadow hover:rounded-xl p-2  '>
                    <option value="" className='hidden'>
                        Explore
                    </option>
                    <option value="">Collection</option>
                    <option value="">Trending Titles</option>
                    <option value="">
                        Top Book Views
                    </option>
                    <option value="">
                        Popular Series
                    </option>
                    <option value="">
                        Popular Authors
                    </option>
                    <option value="">
                        Multi-Book Search
                    </option>
                    <option value="">
                        Shelves
                    </option>
                    <option value="">
                        Market Guide
                    </option>
                    <option value="">
                        pricing Hub
                    </option>
                    <option value="">
                        Pnago AI
                    </option>
                    <option value="">
                        Gift Cards
                    </option>
                    <option value="">
                        Cookbooks
                    </option>
                </select>

            </div>
<div className='flex w-full gap-3'>
<img src={image} alt="" />
<img src={image2} alt="" />
<img src={image3} alt="" />
</div>
        </div>

    )
}

export default Navbar