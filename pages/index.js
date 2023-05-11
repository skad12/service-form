import Step from "../components/Step";
import YourInfo from "../components/YourInfo";
import Location from "../components/Location";
import Telephone from "../components/Telephone";
import Address from "../components/Address";
import Final from "../components/Final";

import FooterNav from "../components/FooterNav";
import BaseLayout from "../layouts/BaseLayout";
import { useUserFormStore } from "../stores/useUserStore";

export default function Home() {
  const { stepNumber } = useUserFormStore();
  return (
    <BaseLayout title={"Verification Form "}>
      <div className="mx-auto md:max-w-5xl md:flex md:bg-white md:shadow-md md:rounded-xl">
        <div id="sidebar-left">
          <Step />
        </div>
        <div id="content" className=" md:w-3/4">
          {stepNumber === 0 && <YourInfo />}
          {stepNumber === 1 && <Location />}
          {stepNumber === 2 && <Telephone />}
          {stepNumber === 3 && <Address />}
          {stepNumber === 4 && <Final />}
          <FooterNav />
        </div>
      </div>
    </BaseLayout>
  );
}
