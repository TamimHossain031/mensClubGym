import { useNavigate, useParams } from "react-router-dom";

export default function Update() {
  const { el } = useParams();
  const navigate = useNavigate();

  console.log(el);

  return <></>;
}
