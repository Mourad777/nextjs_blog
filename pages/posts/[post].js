import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout';
import classes from './posts.module.css'
import axios from 'axios'

export default function Post({post}) {
    console.log('post:',post)
    const router = useRouter();
    const postId = router.query.post;

    return (
        <Layout>
            <div className={classes['post-header']}>
                <img />
            </div>
            Post {postId}
        </Layout>
    )
}

export async function getStaticProps({params}) {

    const postId = params.post;
    const baseURL = 'http://localhost:1338';
    const post = await axios.get(`${baseURL}/api/posts/${postId}`);

    return {
        // revalidate:604800,
            props: {
             post:post.data
            },
          }
    
}

export async function getStaticPaths() {
    
    const baseURL = 'http://localhost:1338';

    const posts = await axios.get(`${baseURL}/api/posts`);
    
    const params = posts.data.data.map(post=>{
        return    {
            params: {
                post: post.id.toString()
            },
        }
    })

    return {
        paths: params,
        fallback: true,
    }
}