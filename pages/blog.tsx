import React from 'react';
import { RecentPosts } from '../components/blog/blog-posts.component';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { GraphQLClient } from 'graphql-request';
import { URLGraphCMS } from '../config/constants.config';
import { fetchBlogItems } from '../helper/http-helper';

export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const graphcms = new GraphQLClient(URLGraphCMS);

        const posts = await fetchBlogItems(graphcms).then((items) => {
            return items.sort((a, b) => b.published.localeCompare(a.published));
        });

        return {
            props: {
                list: posts,
            },
            revalidate: 1,
        };
    } catch (e) {
        console.error(e);
        return {
            props: {
                list: [],
            },
            revalidate: 1,
        };
    }
};

export default function Blog({ list }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
    return (
        <>
            <RecentPosts posts={list} />
        </>
    );
}
