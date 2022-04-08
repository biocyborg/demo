import * as React from 'react';

interface CountProps {
  Paper: any;
  Button: any;
  Divider: any;
  count: number;
  setCount: any;
}

export const Count = ({ Paper, Button, Divider, count, setCount }: CountProps) => {
  return (
    <>
      <Paper elevation={3}>
        <div>{count}</div>
        <Button variant="contained" onClick={() => setCount(0)}>
          Reset
        </Button>
        <Button variant="contained" onClick={() => setCount((prevCount: number) => prevCount - 1)}>
          -
        </Button>
        <Button variant="contained" onClick={() => setCount((prevCount: number) => prevCount + 1)}>
          +
        </Button>
      </Paper>
      <Divider />
    </>
  );
};
