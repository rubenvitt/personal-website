import React, { useState } from 'react';
import { AdminLoginComponent } from '../../components/admin/login.component';
import { useCookies } from 'react-cookie';
import { Cookie, CookieSetOptions } from 'universal-cookie';
import { AdminPageContentComponent } from '../../components/admin/content.component';

export default function AdminPage(): JSX.Element {
    const [cookies, setCookie, rmCookie] = useCookies(['access-token']);
    const [checkedAccessToken, setCheckedAccessToken] = useState(false);
    const clientToken = cookies['access-token'];

    if (clientToken && clientToken !== '') {
        checkClientToken(clientToken).then((b) => {
            setCheckedAccessToken(b);
            if (!b) {
                rmCookie('access-token');
            }
        });
    }

    return (
        <>
            {checkedAccessToken ? (
                <AdminPageContentComponent />
            ) : (
                <AdminLoginComponent
                    lastResult={checkedAccessToken}
                    onSubmit={(s) => {
                        resolveAccessToken(s, setCookie).then((b) => setCheckedAccessToken(b));
                    }}
                />
            )}
        </>
    );
}

async function checkClientToken(cookie: string) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token: cookie,
        }),
    };

    return await fetch(process.env.NEXT_PUBLIC_API_HOST + '/api/auth/check', requestOptions)
        .then((res) => res.json())
        .then((res) => {
            return res.status === 'ok';
        });
}

async function resolveAccessToken(
    token: string,
    setCookie: (name: string, value: Cookie, options?: CookieSetOptions) => void,
): Promise<boolean> {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            authToken: token,
        }),
    };
    return await fetch(process.env.NEXT_PUBLIC_API_HOST + '/api/auth', requestOptions)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            const result = res.status === 'ok';
            setCookie('access-token', res.token);
            return result;
        });
}
