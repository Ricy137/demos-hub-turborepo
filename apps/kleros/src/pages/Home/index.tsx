import React, { useCallback, useLayoutEffect, useState } from "react";
import { useLiquidConnect, useLiquidContract } from "@services/liquid";
import { useAccountAddress, useAccountSign } from "@services/account";
import ConnectBtn from "@modules/ConnectBtn";

const Home: React.FC = () => {
  const [maxDrawingTime, setMaxDrawingTime] = useState<number>(0);
  const connect = useLiquidConnect();
  const liquidContract = useLiquidContract();

  const getLiquidData = useCallback(async () => {
    let liquidContractT = liquidContract;
    try {
      if (!liquidContractT) {
        liquidContractT = await connect();
      }
      const maxDrawingTimeT = await liquidContractT.maxDrawingTime();
      setMaxDrawingTime(maxDrawingTimeT.toString());
    } catch (err) {
      alert("failed to get maxDrawingTime");
    }
  }, [liquidContract]);

  useLayoutEffect(() => {
    getLiquidData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-y-24px w-full">
      <div className="text-48px gap-24px">
        maxDrawingTime: <span>{maxDrawingTime}</span>
      </div>
      <AddressBoard />
      <ConnectBtn>
        <SignatureBoard />
      </ConnectBtn>
    </div>
  );
};

const AddressBoard: React.FC = () => {
  const address = useAccountAddress();

  return (
    <ConnectBtn>
      <div>address:{address}</div>
    </ConnectBtn>
  );
};

const SignatureBoard: React.FC = () => {
  const [sig, setSig] = useState<string>("");
  const signMessage = useAccountSign();

  const sign = useCallback(async () => {
    try {
      const signature = await signMessage();
      setSig(signature);
    } catch (err) {
      alert("failed to sign");
    }
  }, []);

  return (
    <div className="flex flex-col gap-y-12px">
      <div>signature:{sig}</div>
      <button onClick={sign}>Sign message</button>
    </div>
  );
};
export default Home;
