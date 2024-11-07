import { Button, Result } from "antd";

import React from "react";
import { useRouter } from "next/router";

export default function NotFoundComponent() {
  const router = useRouter();
  return (
    <div className="text-center text-lg h-[50vh]">
      <Result
        status="404"
        title="404"
        subTitle="Maaf, Halaman yang anda kunjungi tidak ditemukan."
        extra={
          <Button size="middle" className="bg-blue-800 hover:bg-blue-400 text-white" onClick={() => router.push("/")}>
            Kembali
          </Button>
        }
      />
    </div>
  );
}
