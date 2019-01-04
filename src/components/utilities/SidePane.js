import React, { Component } from 'react';

import { SideSheet, Paragraph, Button } from 'evergreen-ui';

class SidePane extends Component {

    render() {
        return (
            <div initialState={{ isShown: true }}>
                {({ state, setState }) => (
                    <React.Fragment>
                        <SideSheet
                            isShown={state.isShown}
                            onCloseComplete={() => setState({ isShown: false })}
                        >
                            <Paragraph margin={40}>Basic Example</Paragraph>
                        </SideSheet>
                        <Button onClick={() => setState({ isShown: true })}>
                            Show Basic Side Sheet
                        </Button>
                    </React.Fragment>
                )}
            </div>
        )
    }
}

export default SidePane;