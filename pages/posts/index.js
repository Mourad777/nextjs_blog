import React from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import classes from './posts.module.css'
import Grid from '../../components/Grid'
import qs from 'qs'

export default function Posts({ posts,url }) {
  console.log('posts',posts)

    return (
        <Layout>
            <h1 className={classes.header}>
               Latest Posts
            </h1>
          <Grid elements={posts.data} />
            {/* <div style={{ height: 3000, width: '100%', background: 'blue' }}></div> */}
        </Layout>
    )
}

export async function getStaticProps() {

    const baseURL = 'http://localhost:1338';
    // const posts = await axios.get(`${baseURL}/posts?_limit=1`);
    // const posts = await axios.get(`${baseURL}/posts?_where[_or][0][title_contains]=Second`);


    const posts = await axios.get(`${baseURL}/api/posts?populate=thumbnail`);
    // const baseURL = 'http://localhost:1338';
    // const posts = await axios.get(`${baseURL}/posts`);


    //**filter query**
    //?_start=1&_limit=3
    ///posts?_where[_or][0][title_contains]=thir

    console.log('posts', posts)

    return {
        // revalidate:604800,
        props: {
            posts: posts.data,
        }
    }
}