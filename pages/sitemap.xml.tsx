import React from 'react';
import { fetchBlogItems } from '../helper/http-helper';
import { URLGraphCMS } from '../config/constants.config';
import { GraphQLClient } from 'graphql-request';
import { BlogItem } from '../types/blog-items.types';
import { format } from 'date-fns';

const sitemapXml = (posts: BlogItem[]) => {
    let latestPost = 0;
    let xml = '';

    posts.map((post) => {
        const postDate = Date.parse(post.updatedAt);
        if (!latestPost || postDate > latestPost) {
            latestPost = Date.parse(post.updatedAt);
        }

        const url = `https://rubeen.one/blog/${post.id}`;
        xml += `
      <url>
        <loc>${url}</loc>
        <lastmod>${format(postDate, 'yyyy-MM-dd')}</lastmod>
        <priority>0.50</priority>
      </url>`;
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://rubeen.one/</loc>
        <lastmod>${format(latestPost, 'yyyy-MM-dd')}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://rubeen.one/cv</loc>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://rubeen.one/blog</loc>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://rubeen.one/blog</loc>
        <priority>0.80</priority>
      </url>
      ${xml}
    </urlset>`;
};

class Sitemap extends React.Component {
    static async getInitialProps({ res }) {
        const graphcms = new GraphQLClient(URLGraphCMS);
        const blogItems = await fetchBlogItems(graphcms);

        res.setHeader('Content-Type', 'text/xml');
        res.write(sitemapXml(blogItems));
        res.end();
    }
}

export default Sitemap;
