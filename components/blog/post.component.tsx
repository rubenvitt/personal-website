import ReactMarkdown from "react-markdown";
import React from "react";
import {BlogItem} from "../../types/blog-items.types";

export const PostComponent: React.FC<{post: BlogItem; morePosts: BlogItem[]}> = ({post, morePosts}) => {
    return <div className={'justify-center'}>
        <article className={'prose lg:prose-xl px-5 pt-6 max-w-full'}>
            <h1 className={'text-2xl'}>{post.title}</h1>
            <aside className={'text-sm leading-1 -mt-8 ml-3 -mb-13 lg:ml-6 lg:-mt-12'}>
                {post.readMinutes} min read | published <time className={'mx-1'}
                                                    dateTime={post.published}>{new Date(post.published).toLocaleDateString()}</time>
                <br />{post.shortDescription}
            </aside>
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
    </div>
}
