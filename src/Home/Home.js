import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' />
            </div>

            <div className='home__row'>
                <Product
                    id='12321341'
                    title='The Lean Startup: How Today&#39;s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses'
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLDGCIreAxtmYES-b0drzc9kxKX5KwHC37Y7tNeuJIxQXCl6TOkQMiDPzxgwnq2IpBrpKtQ8ED&usqp=CAc'
                    price={14.50}
                    rating={5}
                />
                <Product
                    id='49538094'
                    title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
                    image='https://m.media-amazon.com/images/I/91fUSbuoAkL._AC_UY218_.jpg'
                    price={239.00}
                    rating={4}
                />
            </div>

            <div className='home__row'>
                <Product
                    id='29857025'
                    title='All-new Echo Dot (4th Gen) | Smart speaker with Alexa | Glacier White'
                    image='https://m.media-amazon.com/images/I/61R+1DLe-uL._AC_UY218_.jpg'
                    price={49.99}
                    rating={4}
                />
                <Product
                    id='898273956'
                    title='2020 Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)'
                    image='https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg'
                    price={999.00}
                    rating={5}
                />
                <Product
                    id='103174097'
                    title='Z-Edge UG25I IPS Gaming Monitor, Full HD 1080P 1920x1080 LED IPS Monitor, with 144Hz Refresh Rate and Eye-Care Technology, 178° Wide View Angle'
                    image='https://m.media-amazon.com/images/I/71KQOWrRmPL._AC_UY218_.jpg'
                    price={229.99}
                    rating={4}
                />
            </div>

            <div className='home__row'>
                <Product
                    id='59879873'
                    title='SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model'
                    image='https://m.media-amazon.com/images/I/81r8JazRcoL._AC_UY218_.jpg'
                    price={1399.99}
                    rating={4}
                />
            </div>
        </div>
    )
}

export default Home
