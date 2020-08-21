import color from "../../assets/colors";
const backgroundImg = require("../../assets/images/loginPage_image.jpg");

const LoginStyle = () => ({
  root: {
    height: "100%",
    minHeight: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    background:
      "linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 35%, rgba(66, 165, 244, 1) 35%, rgba(128, 214, 255, 0.69) 73%, rgba(255,255,255,1) 73%, rgba(255,255,255,1) 100%)",
  },
  loginContainer: {
    height: "90%",
    width: "80%",
    position: "relative",
    boxSizing: "border-box",
    boxShadow: "0px 0px 6px 1px rgba(215,223,255,1)",
    background: "white",
    display: "flex",
    flexDirection: "row",
  },

  loginImg: {
    float: "left",
    boxSizing: "border-box",
    width: "50%",
    backgroundImage: `url(${backgroundImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  loginBox: {
    background: "wihte",
    boxShadow: "1px 1px 2px 1px rgba(255,255,255,1)",
    width: "50%",
    display: "flex",
    justifyContent: "center",
  },
  headline: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 42,
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: 15,
  },
  field: {
    marginTop: 20,
    borderRaduis: 30,
    width: "100%",
  },
  subhead: {
    textAlign: "center",
    marginTop: 10,
    color: color.SECONDARY_COLOR,
    textWeight: "bold",
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "17%",
    margin: "5%",
  },
  img: {
    width: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginStyle;
