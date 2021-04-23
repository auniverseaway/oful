import React from 'react';
import ReactDom from 'react-dom';
import 'regenerator-runtime/runtime';
import Head from '../head/head';

import getObjectProperty from './utils/objectProperty';

window.oful = {
    components: {
        page: {
            head: Head,
        }
    }
};

const getPageProps = async () => {
    const { href } = window.location;
    const propsHref = href.replace('.html', '/props.infinity.json');
    const propsRes = await fetch(propsHref);
    return await propsRes.json();
};

const Page = ({ children }) => {
    const HeadComponent = getObjectProperty(children.head.ofulComponent);
    return(<>
        <HeadComponent {...children.head.props} />
        <h1>Hello!</h1>
    </>);
};

const setupPage = async () => {
    const props = await getPageProps();
    ReactDom.render(<Page {...props} />, document.getElementById('content'));
};

setupPage();