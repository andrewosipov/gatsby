import React from 'react';
import Link from 'gatsby-link';

import ContactPage from '../components/shared/contacts/contactPage';

export default function Template( props ) {
    const data = props.pathContext;
    return <ContactPage {...data} />;
};
