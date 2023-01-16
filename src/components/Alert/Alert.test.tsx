import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import { AlertProps } from '@mui/material/Alert';

import Alert from './Alert';

const AlertMockProps: AlertProps = {
  severity: "error",
  children: "There is an error",
};

test("Alert", () => {
  render(<Alert severity={AlertMockProps.severity}>{AlertMockProps.children}</Alert>);

  expect(screen.queryByTestId('alert')).toBeInTheDocument();
});