import ReactMarkdown from 'react-markdown';
import React, { useEffect, useState } from 'react';
import { BlogItem } from '../../types/blog-items.types';
import { useDarkMode } from '../../helper/theme.helper';

export const PostComponent: React.FC<{ post: BlogItem; morePosts: BlogItem[] }> = ({ post, morePosts }) => {
    const [host, setHost] = useState<string>();
    const [isDark] = useDarkMode();

    useEffect(() => {
        setHost(window.location.host);
    });

    return (
        <>
            <div className={'justify-center'}>
                <div className="bg-white dark:bg-trueGray-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                    <div className="relative mx-auto">
                        <div>
                            <article
                                className={
                                    'prose dark:prose-dark sm:prose-lg lg:prose-xl px-5 pt-6 max-w-full img-max-100'
                                }
                            >
                                <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200 sm:text-4xl sm:leading-10">
                                    {post.title}
                                </h1>
                                <aside className={'text-sm leading-1 -mt-8 ml-3 -mb-13 lg:ml-6 lg:-mt-10'}>
                                    <span className={'text-orange-500 dark:text-orange-600'}>
                                        {post.readMinutes} min read • published{' '}
                                        <time className={'mx-1'} dateTime={post.published}>
                                            {new Date(post.published).toLocaleDateString()}
                                        </time>
                                    </span>
                                    <br />
                                    <span className={'text-gray-600 dark:text-gray-400'}>{post.shortDescription}</span>
                                </aside>
                                <ReactMarkdown
                                    className={'dark:text-gray-100'}
                                    allowDangerousHtml={true}
                                    renderers={{
                                        image: (props) => {
                                            return <img {...props} alt={'Picture in text'} />;
                                        },
                                        strong: (props) => {
                                            return (
                                                <strong
                                                    {...props}
                                                    style={{
                                                        color: isDark
                                                            ? 'rgba(244, 244, 245, var(--tw-text-opacity))'
                                                            : 'rgba(24,24, 27, var(--tw-text-opacity));',
                                                    }}
                                                />
                                            );
                                        },
                                        blockquote: (props) => {
                                            return (
                                                <blockquote
                                                    {...props}
                                                    style={{
                                                        color: isDark
                                                            ? 'rgba(244, 244, 245, var(--tw-text-opacity))'
                                                            : 'rgba(24,24, 27, var(--tw-text-opacity));',
                                                    }}
                                                />
                                            );
                                        },
                                        /*code: ({language, value}) => {
                                        return <SyntaxHighlighter language={language} children={value} />
                                    }*/
                                    }}
                                    linkTarget={(uri) => (uri.includes(host) ? '' : '_blank')}
                                >
                                    {post.content}
                                </ReactMarkdown>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
