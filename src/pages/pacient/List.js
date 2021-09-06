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
      <title>Pacientes | Material Kit</title>
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
          <DataTableComponent data={data} />
      </Container>
    </Box>
  </>
);

export default ProductList;
