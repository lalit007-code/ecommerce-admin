import prismadb from "@/lib/prismadb";
import React from "react";

interface Dashboard {
  params: { storeId: string };
}

const Dashboardpage: React.FC<Dashboard> = async ({params}) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    }, 
  });

  return <div>Active store : {store?.name}</div>;
};

export default Dashboardpage;
