import React from 'react';
import {BlogItem} from '../../types/blog-items.types';
import Link from "next/link";

const Badge: React.FC<{ type: 'language' | 'post-type', children: string }> = ({type, children}) => {
    const getLanguageColor = (_: string) => {
        return 'bg-gray-100 text-gray-800';
    }
    const getPostTypeColor = (s: string) => {
        switch (s.toLowerCase()) {
            case 'article':
                return 'bg-orange-100 text-orange-800';
            case 'tutorial':
                return 'bg-green-100 text-green-800';
            case 'video':
                return 'bg-indigo-100 text-indigo-800';
        }
        return 'bg-blue-100 text-blue-800';
    }

    const color = type === 'language'
        ? getLanguageColor(children)
        : getPostTypeColor(children);

    return <>
        <span
            className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 ${color}`}>
            {children}
      </span>
    </>
}

export const PostItem: React.FC<{ post: BlogItem }> = ({post}) => {
    return (
        <>
            <Link href={post.externalInfo ? post.externalInfo.url : '/blog/'+post.id}>
                <a target={post.externalInfo ? '_blank' : ''} rel={'noreferrer'} className={'block shadow-lg px-3 py-5 rounded-2xl hover:bg-gray-100'}>
                    <div>
                        <a href="#" className="inline-block">
                            <Badge type={'post-type'}>{post.type}</Badge>
                            {
                                post.language
                                    ? <Badge type={'language'}>{post.language}</Badge>
                                    : null
                            }
                        </a>
                    </div>
                    <a href="#" className="block">
                        <h3 className="mt-4 text-xl leading-7 font-semibold text-gray-900">
                            {post.title}
                        </h3>
                        <p className="mt-3 text-base leading-6 text-gray-500">
                            {post.shortDescription}
                        </p>
                    </a>
                    <div className="mt-6 flex items-center">
                        <div>
                            <p className="text-sm leading-5 font-medium text-gray-900">
                                <a href="#">{
                                    post.externalInfo ? 'Posted on ' + post.externalInfo.source : 'Available on this site'
                                }</a>
                            </p>
                            <div className="flex text-sm leading-5 text-gray-500">
                                Posted on
                                <time className={'mx-1'}
                                      dateTime={post.published}>{new Date(post.published).toLocaleDateString()}</time>
                                <span className="mx-1">&middot;</span>
                                <span>{post.readMinutes} min read</span>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    );
};

export const RecentPosts: React.FC<{posts: BlogItem[]}> = ({posts}) => {
    return (
        <>
            <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div className="relative mx-auto">
                    <div>
                        <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                            Recent publications
                        </h2>
                        <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
                            Find a list of my written blogposts below. Some of them are external, some written in German
                            - they are labeled and you may filter them.
                        </p>
                    </div>
                    <div
                        className="mt-12 grid gap-16 border-t-2 border-gray-100 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
                        {posts.map((item) => {
                            return <PostItem post={item}/>;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
