"use client";
import React from "react";
import Basic from "../components/FormExample";
import { PageWrapper } from "../components/PageWrapper";

export default function Auth() {
  return (
    <>
      <PageWrapper>
        <div className="mt-[200px]">
          <Basic />
        </div>
      </PageWrapper>
    </>
  );
}
