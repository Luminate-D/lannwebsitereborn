import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export function Authorizer() {
    const [ query, setQuery ] = useSearchParams();

    useEffect(() => {
        fetch('http://localhost:2024/api/authorize/' + query.get('code'))
            .then(x => x.json())
            .then(x => {
                localStorage.setItem('access_token', x.access_token);
                localStorage.setItem('refresh_token', x.refresh_token);
                console.log(x);

                if(window.opener) {
                    window.opener.location.reload(false);
                    window.close();
                }
            });
    }, []);

    return <></>;
}