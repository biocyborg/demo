import * as React from 'react';

interface StateProps {
  Paper: any;
  Button: any;
  Divider: any;
  state: Record<string, never>;
  setStateFunc: any;
  setState: any;
}

export const State = ({ Paper, Button, Divider, state, setStateFunc, setState }: StateProps) => {
  return (
    <>
      <Paper elevation={3}>
        <div>name：{state?.name}</div>
        <div>age：{state?.age}</div>
        <Button variant="contained" onClick={() => setStateFunc({ name: 'qwe' })}>
          name
        </Button>
        <Button variant="contained" onClick={() => setStateFunc({ age: 12 })}>
          age
        </Button>
        <Button variant="contained" onClick={() => setState({})}>
          clear
        </Button>
      </Paper>
      <Divider />
    </>
  );
};
