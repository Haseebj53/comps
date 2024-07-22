import Button from "../components/button";
import { GoBug, GoDatabase, GoDashboard } from "react-icons/go";
function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary outline rounded className="mb-5">
            <GoBug/>
          Click
        </Button>
      </div>
      <div>
        <Button secondary>
            <GoDatabase/>
            Click</Button>
      </div>
      <div>
        <Button success>
        <GoDashboard/>
        Click</Button>
      </div>
      <div>
        <Button warning>Click</Button>
      </div>
      <div>
        <Button danger>Click</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
