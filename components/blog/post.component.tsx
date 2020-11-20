import ReactMarkdown from "react-markdown";
import React, {PropsWithChildren, useEffect, useState} from "react";
import {BlogItem} from "../../types/blog-items.types";
import Prism from 'prismjs';

export const PostComponent: React.FC<{ post: BlogItem; morePosts: BlogItem[] }> = ({post, morePosts}) => {
    const [host, setHost] = useState<string>();

    useEffect(() => {
        setHost(window.location.host);
    })

    return (<>
        <div className={'justify-center'}>
            <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div className="relative mx-auto">
                    <div>
                        <article className={'prose sm:prose-lg lg:prose-xl px-5 pt-6 max-w-full img-max-100'}>
                            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                                {post.title}
                            </h1>
                            <aside className={'text-sm leading-1 -mt-8 ml-3 -mb-13 lg:ml-6 lg:-mt-10'}>
                                <span className={'text-orange-500'}>{post.readMinutes} min read • published <time className={'mx-1'}
                                                                                    dateTime={post.published}>{new Date(post.published).toLocaleDateString()}</time></span>
                                <br/>
                                <span className={'text-gray-600'}>{post.shortDescription}</span>
                            </aside>
                            <ReactMarkdown
                                renderers={{
                                    image: props => {
                                        return <img {...props} alt={'Picture in text'} />
                                    }
                                }}
                                linkTarget={(uri => uri.includes(host) ? '' : '_blank')}
                            >{post.content}</ReactMarkdown>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
