import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout';

export default function Video() {
    const router = useRouter();
    const videoId = router.query.video;

    return (
        <Layout>
                Video {videoId}
        </Layout>
    )
}
