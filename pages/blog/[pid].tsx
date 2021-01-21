import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GraphQLClient } from 'graphql-request';
import { URLGraphCMS } from '../../config/constants.config';
import { fetchBlogItems, fetchPostAndMorePosts } from '../../helper/http-helper';
import ReactMarkdown from 'react-markdown';
import { NotFoundComponent } from '../../components/shared/not-found.component';
import { PostComponent } from '../../components/blog/post.component';
import { useSeoHelperStore } from '../../helper/seo.helper';
import { BlogItem } from '../../types/blog-items.types';

export async function getStaticProps({ params }) {
    const graphcms = new GraphQLClient(URLGraphCMS);
    const data = await fetchPostAndMorePosts(graphcms, params.pid);

    return {
        props: {
            post: data.post,
            morePosts: data.morePosts || [],
        },
        revalidate: 1,
    };
}

export async function getStaticPaths({ params }) {
    const graphcms = new GraphQLClient(URLGraphCMS);
    const posts = await fetchBlogItems(graphcms);
    return {
        paths: posts
            .filter((post) => !post.externalInfo)
            .map(({ id }) => ({
                params: { pid: id },
            })),
        fallback: true,
    };
}

function Post({ post, morePosts }) {
    const router = useRouter();

    const { setSeo } = useSeoHelperStore();

    useEffect(() => {
        setSeo(
            `Rubeen • Blog > ${(post as BlogItem).title}`,
            '' + (post as BlogItem).title + ' - ' + (post as BlogItem).shortDescription,
        );
    }, []);

    if (!router.isFallback && !post?.id) {
        return <NotFoundComponent />;
    }

    return (
        <>
            {router.isFallback ? <>Loading...</> : <PostComponent post={post} morePosts={morePosts} />}
            <div className={'hidden dark prose'}>
                <pre>
                    <code />
                </pre>
            </div>
        </>
    );
}

export default Post;
