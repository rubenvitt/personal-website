import React from 'react';
import { fetchBlogItems, fetchPostAndMorePosts } from '../helper/http-helper';
import { URLGraphCMS } from '../config/constants.config';
import { GraphQLClient } from 'graphql-request';
import { BlogItem } from '../types/blog-items.types';
import { format } from 'date-fns';

class RobotsTxt extends React.Component {
    static async getInitialProps({ res }) {
        res.setHeader('Content-Type', 'text/plain');
        res.write(`# Welcome on rubeen.one 
User-Agent: *
Sitemap: https://rubeen.one
        `);
        res.end();
    }
}

export default RobotsTxt;
