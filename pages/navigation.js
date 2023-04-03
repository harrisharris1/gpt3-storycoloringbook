import React from 'react';
import Head from "next/head";
import Link from "next/link";




const Navigation = () => (
    <Head>
<div className='nav'>


    <div className='nav-links'>
        <div>
    <Link href='/home' className='home-link'>
    <button>Home</button>
    </Link>
    </div>
    <div>
    <Link href='/create' className='create-link'>
    <button>Create your story</button>
    </Link>
    </div>
    </div>

</div>
    </Head>
);

export default Navigation;