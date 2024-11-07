import { Button, Result } from "antd";

import React from "react";
import { useRouter } from "next/router";

export default function OfflinePageComponent() {
  const router = useRouter();
  return (
    <div>
      <Result
        status="500"
        title="500"
        subTitle="Anda sedang offline. silahkan cek koneksi internet."
        extra={<Button size="middle" className="bg-blue-800 hover:bg-blue-400 text-white" onClick={() => router.push("/")}>Muat Ulang</Button>}
      />
    </div>
  );
}
