import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GraphQLClient } from 'graphql-request';
import { URLGraphCMS } from '../../config/constants.config';
import { fetchBlogItems, fetchPortfolioItems, fetchPostAndMorePosts } from '../../helper/http-helper';
import ReactMarkdown from 'react-markdown';
import { NotFoundComponent } from '../../components/shared/not-found.component';
import { PostComponent } from '../../components/blog/post.component';
import { useSeoHelperStore } from '../../helper/seo.helper';
import { BlogItem } from '../../types/blog-items.types';
import { PortfolioModel } from '../../types/portfolio-items.types';
import { PortfolioDetailComponent } from '../../components/portfolio/portfolio.detail.component';

export async function getStaticProps({ params }) {
    const graphcms = new GraphQLClient(URLGraphCMS);
    const data = await fetchPortfolioItems(graphcms);

    const item = data.filter((value) => {
        return value.abbr.toLowerCase() === params.pid.toLowerCase();
    });
    return {
        props: {
            portfolioItem: item[0],
        },
        revalidate: 1,
    };
}

export async function getStaticPaths({ params }) {
    const graphcms = new GraphQLClient(URLGraphCMS);
    const portfolioItems = await fetchPortfolioItems(graphcms);
    return {
        paths: portfolioItems.map(({ abbr }) => ({
            params: { pid: abbr.toLowerCase() },
        })),
        fallback: true,
    };
}

function PortfolioItem({ portfolioItem }) {
    const router = useRouter();

    const { setSeo } = useSeoHelperStore();

    const item = portfolioItem as PortfolioModel;

    if (!router.isFallback && !item?.id) {
        return <NotFoundComponent />;
    }

    useEffect(() => {
        setSeo(`Rubeen • Portfolio > ${item?.title}`, '' + item?.title + ' - ' + item?.abbr);
    }, [item]);

    return (
        <>
            {router.isFallback ? <>Loading...</> : <PortfolioDetailComponent portfolioItem={portfolioItem} />}
            <div className={'hidden dark prose'}>
                <pre>
                    <code />
                </pre>
            </div>
        </>
    );
}

export default PortfolioItem;
