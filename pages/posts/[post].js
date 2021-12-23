import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout';
import classes from './posts.module.css'
import axios from 'axios'

export default function Post() {
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

export async function getStaticProps() {

    const baseURL = 'http://localhost:1338';
    const posts = await axios.get(`${baseURL}/posts`);
    console.log('posts', posts)

    return {
        // revalidate:604800,
        props: {
            posts: posts.data,
        }
    }
}

export async function getStaticPaths() {

    const baseURL = 'http://localhost:1338';
    const posts = await axios.get(`${baseURL}/posts`);
    console.log('posts', posts)

    return {
        paths: [
            {
                params: {
                    post: '1'
                },
            }],
        fallback: true,
    }
}
