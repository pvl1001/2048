import {useEffect} from "react";


/** Получить токен через Postman. Все запросы через Authorization Basic (логин/пароль админа):
 * 1. Добавить клиент OAuth в админке Zendesk;
 * 2. GET https://test1001help.zendesk.com/api/v2/oauth/clients - из ответа берем id клиента
 * 3. POST https://test1001help.zendesk.com/api/v2/oauth/tokens data: {
 *     "token": {
 *       "client_id": {{id}},
 *       "scopes": [
 *         "tickets:write"
 *       ]
 *     }
 *   }
 *  4. В ответ получаем full_token (bearer токен)
 *
 * Получить токен OAuth через redirect:
 * 1. Добавить клиент OAuth в админке Zendesk;
 * 2. Взять в админке Zendesk у клиента OAuth clientId и redirect_uri;
 * 3. Кликнув по кнопке произойдет переход для подтверждения, после чего будет редирект обратно, где в url будет access_token (Bearer), который запишется в localStorage;
 * 4. Использовать этот токен для отправки тикетов;
 * */


export function useCreateZendeskToken() {
    const zendeskName = 'test1001';
    const clientId = location.origin === 'http://localhost:4200'
        ? 'test1001'
        : 'pixicube-1-js-web.k8s.azurgames.dev';

    console.log({clientId});
    const urlParams = new URLSearchParams(location.hash.substring(1));
    const accessToken = urlParams.get('access_token') ?? '';

    function setAccessToken(accessToken: string) {
        localStorage.accessToken = accessToken;
        console.log({accessToken});
        // location.hash = '';
    }

    function getZendeskToken() {
        const endpoint = `https://${zendeskName}help.zendesk.com/oauth/authorizations/new`;
        const urlParams = new URLSearchParams({
            response_type: 'token',
            redirect_uri: location.origin,
            client_id: clientId,
            scope: 'tickets:write'
        });
        window.open(`${endpoint}?${urlParams.toString()}`, '_self');
    }

    useEffect(() => {
        !localStorage.accessToken && getZendeskToken();
        accessToken && setAccessToken(accessToken);
    }, [accessToken]);

}
