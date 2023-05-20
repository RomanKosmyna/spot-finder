import AuthContainer from "@/src/components/AuthContainer/AuthContainer";

export default function Register() {
  return (
    <div>
      <AuthContainer
        heading={"Register"}
        formType={"register"}
      />
    </div>
  );
}