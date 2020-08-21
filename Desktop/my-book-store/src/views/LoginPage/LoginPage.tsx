import React, {useState} from "react";

import Button from "../../shared/components/LoaderButton/LoaderButton";
import TextField from "@material-ui/core/TextField";
import { useFormFields } from "../../libs/hooksLibs";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./LoginPageStyle";
import { Typography } from "@material-ui/core";
import logo from "../../assets/images/logo.png";

// @ts-ignore
const useStyles = makeStyles(styles);

export default function LoginPage(props: any) {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    chequeNum: "",
  });

  function validateForm() {
    // @ts-ignore
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event: any) {
    event.preventDefault();

    setIsLoading(true);
  }

  return (
    <div className={classes.root}>
      <div className={classes.loginContainer}>
        <div className={classes.loginImg}/>
        <div className={classes.loginBox}>
          <div className={classes.form}>
            <header className={classes.header}>
              <div className={classes.imgContainer}>
                <img src={logo} alt="logo" className={classes.img} />
              </div>
              {/* @ts-ignore */}
              <Typography varient="h1" className={classes.headline}>
                ChequeIT
              </Typography>
            </header>
            {/* @ts-ignore */}
            <span className={classes.line} />

            <Typography variant="h4" className={classes.subhead}>
                Welcome To BookIT - Book Store
            </Typography>
            <Typography variant="h5" className={classes.subhead}>
              Something About a Book Store
            </Typography>
            <form onSubmit={handleSubmit} className={classes.formContainer}>
              <TextField
                className={classes.field}
                autoFocus
                required
                id="email"
                name="email"
                // @ts-ignore
                value={fields.email}
                onChange={handleFieldChange}
                label="אימייל"
                color="primary"
                disabled={isLoading}
                type="email"
              />
              <TextField
                className={classes.field}
                id="password"
                label="סיסמא"
                type="password"
                color="primary"
                required
                // @ts-ignore
                value={fields.password}
                onChange={handleFieldChange}
                disabled={isLoading}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                isLoading={isLoading}
                disabled={!validateForm()}
                style={{ marginTop: 25 }}
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
