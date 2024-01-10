import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../stores/counterSlice";
import { Button, Box } from "@mui/material";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <span className="m-8">{count}</span>
      </div>
      <Box sx={{'& button': {m:1}}}>
        <div>
          <Button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            color="error"
            size="small"
            variant="contained"
            className="m-4"
          >
            -
          </Button>
          <Button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
            color="success"
            size="small"
            variant="contained"
            className="m-4"
          >
            +
          </Button>
        </div>
      </Box>
    </div>
  );
}
