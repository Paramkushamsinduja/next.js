import React, { useEffect } from "react";
import styles from '../styles/about.module.scss';
import Image from "next/image";
import Head from "next/head";

export const getStaticProps=()=>{
  //..api call
  return{
    props:{ footerstatus : true}
  }
}
const about =(props) =>{
 
 // useEffect(()=>{
 //make a api call
 // }  )
//  useEffect(()=>{
   //make a api call
//     },[] )
  //   useEffect(()=>{
      //make a api call
   //     },[name] )
   

   
    return (
        <>
        <Head>
          <title>Next About Page</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
        <div className='bg-info'>
            <h2 className={styles.about_text}>This is about file.</h2>
            {/* <img src='https://blog.rocketseat.com.br/content/images/2018/12/ssr-nextjs-reactjs.png'/> */}
            {/* <img src='/ssr-nextjs-reactjs.png' /> */}
            <Image src='/0_Kce1FVhfqyiUF1JY.png' width={400} height={300}/>
        </div>
        </>
      )

}
export default about