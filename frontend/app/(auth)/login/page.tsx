import AuthContainer from "@/src/components/AuthContainer/AuthContainer";

export default function Login() {
  return (
    <div>
      <AuthContainer
        heading={"Login To Your Account"}
        formType={"login"}
        status={"New Here?"}
        route={"login"}
      />
    </div>
  );
}