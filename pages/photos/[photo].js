import React from 'react'
import {useRouter} from 'next/router'
import Layout from '../../components/Layout';

export default function Photo() {
    const router = useRouter();
    const photoId = router.query.photo;

    return (
        <Layout>
            Photo
        </Layout>
    )
}
