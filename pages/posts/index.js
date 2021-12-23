import React from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import classes from './posts.module.css'
import Grid from '../../components/Grid'

export default function Posts({ posts }) {
    return (
        <Layout>
            <h1 className={classes.header}>
               Latest Posts
            </h1>
          <Grid elements={posts} />
            {/* <div style={{ height: 3000, width: '100%', background: 'blue' }}></div> */}
        </Layout>
    )
}

export async function getStaticProps() {

    const baseURL = 'http://localhost:1338';
    const posts = await axios.get(`${baseURL}/posts?filters[id][$eq]=2`);

    // const baseURL = 'http://localhost:1338';
    // const posts = await axios.get(`${baseURL}/posts`);
    console.log('posts', posts)

    return {
        // revalidate:604800,
        props: {
            posts: posts.data,
        }
    }
}