import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

export default ({ headerUppercase, title, children }) => (
    <Box className="subpage__section">
        <Heading
            strong={true}
            uppercase={headerUppercase}
            align="start"
            margin="small"
        >
            {title}
        </Heading>
        <div className="subpage__section--content">{children}</div>
    </Box>
);