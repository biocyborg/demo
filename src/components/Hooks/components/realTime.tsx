import * as React from 'react';

interface RealTimeProps {
  Paper: any;
  Button: any;
  Divider: any;
  realTime: number;
  setRealTimeFunc: any;
}

export const RealTime = ({ Paper, Button, Divider, realTime, setRealTimeFunc }: RealTimeProps) => {
  return (
    <>
      <Paper elevation={3}>
        <div>{realTime}</div>
        <Button variant="contained" onClick={setRealTimeFunc}>
          real time
        </Button>
      </Paper>
      <Divider />
    </>
  );
};
