import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography, Tooltip } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { HomeRounded } from "@material-ui/icons";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import UserContext from "../../Contexts/UserContext";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { user, authenticatedUser } = useContext(UserContext);
  const history = useHistory();

  const handleCreateProdct = () => {
    history.push("/create");
  };

  const handleLogout = () => {
    const key = "basicAuth";
    localStorage.removeItem(key);
    authenticatedUser({});
    window.location.reload();
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              history.push("/");
            }}
          >
            <HomeRounded fontSize="large" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ProdBuck
          </Typography>

          {user.id ? (
            <>
              <Typography variant="h6" className={classes.title}>
                {user.username}
              </Typography>
              {user.role === "admin" ? (
                <Tooltip title="Add Product">
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    onClick={handleCreateProdct}
                  >
                    <AddBoxRoundedIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              ) : null}

              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={() => history.push("/")}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
