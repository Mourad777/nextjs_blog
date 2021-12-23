import React from 'react'
import { useRouter } from 'next/router'
import classes from './grid.module.css'

export default function Grid({elements=[]}) {

    const router = useRouter();

    const handleCard = (postId) => {
        router.push(`/posts/${postId}`);
    }

    return (
        <div className={classes['grid-container']}>
            {elements.map(post => (
                <div key={`post[${post.id}]`} className={classes['grid-item']}>
                    <div onClick={() => handleCard(post.id)} className={classes.card}>
                        <h3 className={classes['card-text']}>A guide to travelling Zipolite</h3>
                        <picture>
                            <img className={classes['card-image']} src={`http://localhost:1338${post.thumbnail.url}`} />
                        </picture>
                    </div>
                </div>
            ))}
        </div>
    )
}
