import React from 'react';
import ReactDom from 'react-dom';
import 'regenerator-runtime/runtime';

const headRoot = document.head;

const getPageProps = async () => {
    const { href } = window.location;
    const propsHref = href.replace('.html', '/props.infinity.json');
    const propsRes = await fetch(propsHref);
    return await propsRes.json();
};

const Head = (props) => {
    return ReactDom.createPortal(props.children, headRoot);
}

const CreateHead = ({ title = 'No page title' }) => (
    <Head>
      <title>{title}</title>
    </Head>
  );

const Page = (props) => {
    return(<>
        <CreateHead title={props.children.head.props.title} />
        <h1>Hello!</h1>
    </>);
};

const setupPage = async () => {
    const props = await getPageProps();
    ReactDom.render(<Page {...props} />, document.getElementById('content'));
};

setupPage();