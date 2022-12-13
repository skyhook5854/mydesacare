import React, { Component } from "react";
import { Layout, Result, Button, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

class PageNotFound extends Component {
  state = {
    collapsedSidebar: true,
    isLoading: true,
  };

  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    return (
      <Layout
        style={{
          height: "100vh",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Result
          status="404"
          title={
            <Title strong style={{ marginBottom: 0 }}>
              404
            </Title>
          }
          subTitle={
            <Text
              style={{
                marginBottom: 0,
                width: "100%",
                display: "block",
              }}
            >
              Sorry, the page you visited does not exist.
            </Text>
          }
          extra={
            <Link to={`${process.env.PUBLIC_URL}/signup`}>
              <Button type="primary" style={{ marginTop: 20 }}>
                Sign up
              </Button>
            </Link>
          }
        />
      </Layout>
    );
  }
}

export default PageNotFound;
