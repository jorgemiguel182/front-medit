import {
  Box,
  Container
} from '@material-ui/core';

import DataTableComponent from './components/DataTableComponent';
import data from 'src/__mocks__/customers';

import { Helmet } from 'react-helmet';

const ProductList = () => (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        {/* <CustomerListToolbar /> */}
        <Box sx={{ pt: 3 }}>
          <DataTableComponent data={data} />
        </Box>
      </Container>
    </Box>
  </>
);

export default ProductList;
