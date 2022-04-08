import * as React from 'react';

interface DelayedProps {
  Paper: any;
  Button: any;
  Divider: any;
  delayed: number;
  setDelayedFunc: any;
}

export const Delayed = ({ Paper, Button, Divider, delayed, setDelayedFunc }: DelayedProps) => {
  return (
    <>
      <Paper elevation={3}>
        <div>{delayed}</div>
        <Button variant="contained" onClick={setDelayedFunc}>
          delayed
        </Button>
      </Paper>
      <Divider />
    </>
  );
};
