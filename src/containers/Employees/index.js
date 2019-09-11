import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../redux/Actions/CommonActions";
import {
  Layout,
  Menu,
  Breadcrumb,
  Card,
  Col,
  Row,
  Spin,
  Button,
  Result
} from "antd";
import LoadingBar from "react-redux-loading-bar";

const { Meta } = Card;
const { Header, Content, Footer } = Layout;
class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      offset: 5
    };
  }
  componentDidMount() {
    this.props.OnDataRecevied();
  }
  componentWillReceiveProps(netxProps) {
    this.setState({ data: netxProps.data.data });
  }
  loadMore = () => {
    this.setState({ offset: this.state.offset + 5 });
  };
  // Right now for the only example purpose i have made all components in one file ,
  // this must be seprate in defrent file as a individual component
  render() {
    let { offset, data } = this.state;
    // console.log)
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      {/* <LoadingBar/> */}

          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">Razzel With Redux </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <div
            className="loading_div"
            style={{ padding: 24, minHeight: 380, alignItems: "center" }}
          >
            {this.props.loading && (
              <Spin size="large" spinning tip={"Loading.."} />
            )}
            {!this.props.loading && data.length == 0 ? (
              <Result status="404" title="Data Not Found" />
            ) : (
              <Row gutter={16}>
                {data.slice(0, offset).map((d, index) => {
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
            )}

            {this.props.data.data !== undefined && (
              <div>
                {" "}
                {offset < this.props.data.data.length && (
                  <Button style={{ marginTop: 10 }} onClick={this.loadMore}>
                    Load More
                  </Button>
                )}
              </div>
            )}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    );``
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
  )(Employees)
};
