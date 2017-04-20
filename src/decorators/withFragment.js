import { createFragmentContainer } from 'react-relay';

export default spec => Component => createFragmentContainer(Component, spec);
