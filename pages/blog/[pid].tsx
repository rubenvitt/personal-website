import React from 'react';
import { useRouter } from 'next/router';
import {GetStaticProps} from "next";
import {GraphQLClient} from "graphql-request";
import {URLGraphCMS} from "../../config/constants.config";
import {fetchBlogItems, fetchPostAndMorePosts} from "../../helper/http-helper";
import ReactMarkdown from 'react-markdown';

export async function getStaticProps({params}) {
    const graphcms = new GraphQLClient(URLGraphCMS);
    const data = await fetchPostAndMorePosts(graphcms, params.pid);

    return {
        props: {
            post: data.post,
            morePosts: data.morePosts || [],
        }
    }
}

export async function getStaticPaths({params}) {
    const graphcms = new GraphQLClient(URLGraphCMS);
    const posts = await fetchBlogItems(graphcms);
    return {
        paths: posts.filter(post => !post.externalInfo)
            .map(({id}) => ({
                params: {pid: id},
            })),
        fallback: true
    };
}

function Post({post, morePosts}) {
    return <>
        <article className={'bg-green-100'}>
            <h1 className={'text-2xl'}>{post.title}</h1>
            <div className={'prose lg:prose-xl'}>
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </article>
    </>;
}

export default Post;
