import AuthContainer from "@/src/components/AuthContainer/AuthContainer";

export default function Registration() {
  return (
    <div>
      <AuthContainer
        heading={"Register"}
        formType={"register"}
      />
    </div>
  );
}