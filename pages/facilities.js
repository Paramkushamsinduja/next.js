import React from "react";
import Header from '../common/Header';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import Link from 'next/link';

const Facilities = () => {
    return(
        <div>
            <h2>This is facilties file.</h2>
            <ul>
                <li><Link href='/facilities/lab'>Lab</Link></li>
                <li><Link href='/facilities/playground'>Playground</Link></li>
                <li><Link href='/facilities/library'>Library</Link></li>
                <li><Link href='/facilities/sports'>Sports</Link></li>
            </ul>
           
        </div>
    )
}

export default Facilities;