import React from 'react';
import {PageHead} from "../components/page-head/page-head.component";
import {PageContainer} from "../components/page-container/page-container.component";
import {useRouter} from "next/router";

export default function Home() {
    return (
        <div>
            <PageHead />
            <PageContainer>
                {useRouter().pathname}
            </PageContainer>
        </div>
    )
}
