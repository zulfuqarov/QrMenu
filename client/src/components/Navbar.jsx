import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextUser } from '../context/CheckUserContext'
const Navbar = () => {
    const { hasJwtToken } = useContext(ContextUser)
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white z-50 shadow-lg border-t border-gray-200">
            <div className="flex justify-around items-center py-3">
                <Link to="/" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="30" height="30">
                        <path d="M570.6 244l-58.6-51.87l.0231-144.1c0-8.844-7.156-15.1-15.1-15.1L400 31.1c-8.844 0-16 7.156-16 16L384 79.37L298.6 4c-3.016-2.656-6.798-3.997-10.58-3.997S280.4 1.344 277.4 4l-272 240C1.832 247.2 .001 251.6 .001 256c0 8.924 7.243 15.99 16.05 15.99c3.758 0 7.52-1.312 10.53-3.992L64 234.1l.0049 197c0 44.13 35.89 79.1 80 79.1h287.1c44.11 0 80-35.87 80-79.1L512 234.1L549.4 268C552.5 270.7 556.2 272 560 272c8.727 0 16-7.063 16-15.1C576 251.6 574.2 247.2 570.6 244zM416 64h64v100.1l-64-56.47V64zM336.4 480h-96v-160h96V480zM480 208v224c0 26.47-21.53 48-48 48h-63.58V314.6C368.4 300 356.4 288 341.7 288H235C220.4 288 208.4 300 208.4 314.6V480H144c-26.47 0-48-21.53-48-48v-224c0-.377-.1895-.6914-.2148-1.062l192.2-169.6l192.2 169.6C480.2 207.3 480 207.6 480 208z"></path>
                    </svg>
                </Link>
                {/* <Link to="/Language" className="flex flex-col items-center text-gray-600 hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="30" height="30">
                        <path d="M560 192l-64 .002V176c0-8.838-7.164-16-16-16s-16 7.164-16 16v16l-64-.002c-8.836 0-16 7.163-16 16s7.164 16.01 16 16.01h114.5C507.6 241.1 496 259.1 480.9 276c-7.875-9.002-15.25-18.38-21.62-27.88c-3.5-5.375-10.62-6.877-16.12-3.625l-6.875 4.125c-5.875 3.5-7.625 11.25-3.75 17c7 10.5 15.62 21.75 25.62 33.01c-10 8.752-20.75 17-32.25 24.25c-5.375 3.5-7.25 10.5-4 16.13l4 6.877c3.375 6 11 7.877 16.75 4.25c13.5-8.5 26.25-18.25 38-28.63c11.12 10.25 23.38 20 36.63 28.5c5.75 3.752 13.5 1.875 16.88-4.125l4-7.002c3.25-5.5 1.5-12.5-3.75-16c-10.5-6.752-21-15-31-24c21.5-23.88 37.38-50.13 44.88-74.89H560c8.836 0 16-7.169 16-16.01S568.8 192 560 192zM576 63.1H64c-35.35 0-64 28.65-64 64v256c0 35.35 28.65 64 64 64h512c35.35 0 64-28.65 64-64v-256C640 92.65 611.3 63.1 576 63.1zM304 416H64c-17.64 0-32-14.36-32-32V128c0-17.64 14.36-32 32-32h240V416zM608 384c0 17.64-14.36 32-32 32h-240V96H576c17.64 0 32 14.36 32 32V384zM72.84 350.3c7.938 3.922 17.53 .7813 21.47-7.156L113.9 304H206.1l19.58 39.16C228.5 348.8 234.2 352 240 352c2.406 0 4.844-.5469 7.156-1.688c7.906-3.953 11.09-13.56 7.156-21.47l-80-160c-5.438-10.84-23.19-10.84-28.62 0l-80 160C61.75 336.8 64.94 346.4 72.84 350.3zM160 211.8L190.1 272H129.9L160 211.8z"></path>
                    </svg>
                </Link> */}
                <Link to="/Contact" className="flex flex-col items-center text-gray-600 hover:text-gray-800">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 473.806 473.806" width="30" height="30" >
                        <path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1C420.456,377.706,420.456,388.206,410.256,398.806z"></path>
                        <path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11S248.656,111.506,256.056,112.706z"></path>
                        <path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"></path>
                    </svg>
                </Link>
                <Link to="/WorkTime" className="flex flex-col items-center text-gray-600 hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" height="30">
                        <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256c141.4 0 256-114.6 256-256C512 114.6 397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480zM354.1 294.1L272 246.8V112C272 103.2 264.8 96 256 96S240 103.2 240 112V256c0 5.719 3.047 11 8 13.86l90.06 52C340.6 323.3 343.3 324 346 324c5.531 0 10.91-2.859 13.88-8C364.3 308.3 361.7 298.6 354.1 294.1z"></path>
                    </svg>
                </Link>
                <Link
                    to={hasJwtToken ? "/Admin" : "/Sign"}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width={40}
                        height={40}
                        className="text-black transition duration-300"
                    >
                        <circle cx={12} cy={7} r={4} />
                        <path d="M5 21v-2a4 4 0 014-4h6a4 4 0 014 4v2" />
                    </svg>

                </Link>
            </div>
        </div>
    )
}

export default Navbar