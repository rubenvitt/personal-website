import React from 'react';
import { useRouter } from 'next/router';

function Post() {
    const router = useRouter();
    return <>{router.query.pid}</>;
}

export default Post;
