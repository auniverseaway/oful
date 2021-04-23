import React from 'react';
import ReactDom from 'react-dom';

const HeadContent = (props) => {
    const headRoot = document.head;
    return ReactDom.createPortal(props.children, headRoot);
}

const NSHead = ({ title = 'No page title', description = 'No desc' }) => (
    <HeadContent>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <link rel="alternate" hreflang="x-default" href="https://www.adobe.com/"/>
    </HeadContent>
);

export default NSHead;
