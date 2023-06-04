import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg.jpg";
const LoginPage = () => {
  const [Username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const login = () => {
    if (Username == "demo" && password == "demo123") {
      navigate("/dashboard");
    }
  };
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <img src={bgImage} className="-top-[13rem]   absolute -z-10" />
      <div className="z-10 w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-3xl">Have an account?</div>
          <input
            onChange={(e) => setusername(e.target.value)}
            className="w-[20rem] bg-white/[0.25] placeholder-current text-white outline-none border-none px-5 py-2 rounded-full text-xl"
            placeholder="Username"
          />
          <input
            onChange={(e) => setpassword(e.target.value)}
            className="w-[20rem] accent-slate-900 placeholder-current bg-white/[0.25] text-white outline-none border-none px-5 py-2 rounded-full text-xl"
            placeholder="Password"
          />
          <button
            onClick={login}
            className="mt-4 w-[20rem]   placeholder-current  outline-none border-none px-5 py-2 rounded-full text-xl bg-[#fbceb5] text-slate-800"
          >
            Login
          </button>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <input type={"checkbox"} className="mr-2" />{" "}
              <div>Remember Me</div>
            </div>
            <div className="flex items-center">
              <div>Forgot Passoword</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
