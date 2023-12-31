import { Button, Result } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Link to={"/"}>
        <Button >Back Home</Button>
      </Link>
    }
  />
    );
};

export default ErrorPage;
