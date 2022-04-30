// layout all the UI stuff

import { Box } from "@chakra-ui/layout";
// Box is like a <div> but can be styled

const PlayerLayout = ({ children }) => {
  return (
    <Box>
      Layout
      { children }
    </Box>
  );
};

export default PlayerLayout;
