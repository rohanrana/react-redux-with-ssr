import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../redux/Actions/CommonActions";
import { Layout, Menu, Breadcrumb, Card, Col, Row, Spin } from "antd";
const { Meta } = Card;
const { Header, Content, Footer } = Layout;
class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.props.OnDataRecevied();
  }
  componentWillReceiveProps(netxProps) {
    console.log(netxProps);
    this.setState({ data: netxProps.data.data });
    // }
  }
  render() {
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">Razzel With Redux </Menu.Item>
            {/* <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item> */}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            className="loading_div"
            style={{ padding: 24, minHeight: 380, alignItems: "center" }}
          >
            {this.props.loading && (
              <Spin size="large" spinning tip={"Loading.."} />
            )}
            <Row gutter={16}>
              {this.state.data.splice(0,10).map((d, index) => {
                return (
                  <Col key={index} style={{ marginTop: 10 }} span={6}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="example"
                          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        />
                      }
                    >
                      <Meta
                        title={d.employee_name}
                        description="www.instagram.com"
                      />
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Made With love in India</Footer>
      </Layout>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.data.loading,
    error: state.data.error,
    data: state.data.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    OnDataRecevied: () => dispatch(fetchData())
  };
};
const loadData = store => {
  return store.dispatch(fetchData());
};
export default {
  loadData,
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(Matches)
};
