import { NextPage } from "next";
import * as React from "react";

const Error: NextPage<any> = ({ statusCode }: any) => {
  return <div>{statusCode}</div>;
};

Error.getInitialProps = async ({ res, err }: any) => {
  let statusCode;

  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }

  return {
    namespacesRequired: ["common"],
    statusCode,
  };
};

export default Error;
