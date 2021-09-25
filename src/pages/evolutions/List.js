import {
  Box,
  Container
} from '@material-ui/core';

import DataTableComponent from './components/DataTableComponent';

import { Helmet } from 'react-helmet';

const ProductList = () => (
  <>
    <Helmet>
      <title>Evoluções | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
          <DataTableComponent />
      </Container>
    </Box>
  </>
);

export default ProductList;