import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { addtodo } from "../action";
import { deletetodo } from "../action";

import { useDispatch, useSelector } from "react-redux";
function Todo() {
  const paperStyle = {
    margin: "100px auto",
    width: "30vw",
    height: "70vh",
    // backgroundColor: "Cobalt",
    overflow: "auto",
  };

  const [inputData, setInputData] = useState([]);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);

  //For Pressing Enter
  const addInput = useRef(null);
  const inputRef = useRef(null);

  function firstKeyDown(e) {
    if (e.key === "Enter") {
      addInput.current.focus();
    }
  }

  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle} square="false">
          <Typography
            style={{ marginLeft: "33%", marginBottom: "2%" }}
            variant="h5"
          >
            Todo App
          </Typography>
          <div>
            <Input
              placeholder="Add Task..."
              style={{ marginLeft: "9%" }}
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              onKeyDown={firstKeyDown}
              autoFocus="true"
            />
            <Button
              disabled={inputData.length < 1}
              onClick={() => dispatch(addtodo(inputData), setInputData(""))}
              ref={addInput}
            >
              Add
            </Button>
          </div>

          <Input
            type="text"
            placeholder="Search"
            style={{ marginLeft: "9%" }}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Box>
            {list
              .filter((list) => {
                if (search == "") {
                  return list;
                } else if (
                  list.data.toLowerCase().includes(search.toLowerCase())
                ) {
                  return list;
                }
              })

              .map((elem) => {
                return (
                  <>
                    <div key={elem.id}>
                      <Paper
                        // elevation={8}
                        variant="outlined"
                        sx={{
                          margin: "5%",
                          display: "flex",
                        }}
                      >
                        <ul>
                          <li>{elem.data}</li>
                        </ul>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button
                          sx={
                            {
                              // marginLeft: "20%",
                              // position: "fixed",
                            }
                          }
                          size="small"
                          title="delete"
                          onClick={() => dispatch(deletetodo(elem.id))}
                        >
                          Remove
                        </Button>
                      </Paper>
                    </div>
                  </>
                );
              })}
          </Box>
        </Paper>
      </Grid>
    </>
  );
}

export default Todo;
