import React, { Component } from "react";
import { Layout, Button, Input } from "antd";
import TextInput from "../../components/TextInput/index";
import EmailInput from "../../components/EmailInput";
import SingleDropDown from "../../components/SingleDropDown";
import ChipsWithInput from "../../components/ChipsWithInput";
import DependentDropDown from "../../components/DependantDropDown";
import MultiSelect from "../../components/MultiSelect";
import SingleCheckBox from "../../components/SingleCheckBox";
import CheckBoxGroups from "../../components/CheckBoxGroups";
import ReactDND from "../../components/ReactDND";
import SingleDatePicker from "../../components/SingleDatePicker";
import moment from "moment";
import SkeletonComponent from "../../components/Skeleton";
import RangePickerComponent from "../../components/RangePickerComponent";
import { BackTop } from "antd";
import TimePickerComponent from "../../components/TimePicker";

const { Content } = Layout;
class Home extends Component {
  state = {
    user_name: "",
    email: "",
    // stateName: '',
    // cityName: '',
    sortedArray: [],
    showChild: false,
    state_id: null,
    child_id: null,
    selectedMain: null,
    loading: false,
    open: false,
    options: [
      {
        label: "India",
        value: "India",
        disabled: false
      },
      {
        label: "UK",
        value: "UK",
        disabled: false
      },
      {
        label: "USA",
        value: "USA",
        disabled: true
      }
    ],

    mainArray: [
      {
        label: "Gujrat",
        id: 1,
        img_url:
          "http://tourism.gov.in/sites/default/files/gallery/Picture98.jpg"
      },
      {
        label: "Rajasthan",
        id: 2,
        img_url:
          "https://upload.wikimedia.org/wikipedia/commons/0/09/Thar_Khuri.jpg"
      },
      {
        label: "Maharashtra",
        id: 3,
        img_url:
          "https://content3.jdmagicbox.com/comp/pune/74/020p5073874/catalogue/maharashtra-tourism-development-corporation-sasoon-road-pune-government-organisations-2wi8e0a.jpg"
      },
      {
        label: "Jammu&Kashmir",
        id: 4,
        img_url:
          "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2014/02/Best-Places-to-Visit-in-Kashmir.jpg"
      }
    ],
    ChildArray: [
      {
        label: "Udaypur",
        id: 1,
        parent_id: 2
      },
      {
        label: "Mumbai",
        id: 2,
        parent_id: 3
      },
      {
        label: "Pune",
        id: 3,
        parent_id: 3
      },
      {
        label: "Surat",
        id: 4,
        parent_id: 1
      },
      {
        label: "Jaipur",
        id: 5,
        parent_id: 2
      },
      {
        label: "Navsari",
        id: 6,
        parent_id: 1
      },
      {
        label: "Shirinagar",
        id: 7,
        parent_id: 4
      }
    ],
    tags: [],
    childArray: [],
    checked: false,
    selectedTime:null
  };
  handleInput = e => {
    console.log("Name", e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  handleDropDownChange = value => {
    console.log("Drop Down Value", value);
  };
  handleMainDropDownChange = value => {
    console.log("IDDDD", value);
    console.log(
      "Main Drop Down Value",
      this.state.ChildArray.filter(d => d.parent_id === value)
    );
    this.setState({
      state_id: value,
      child_id: null,
      childArray: this.state.ChildArray.filter(d => d.parent_id === value),
      showChild: true
    });
  };
  handleChildDropDownChange = value => {
    console.log("child IDDDD", value);
    this.setState({
      child_id: value
      // childArray: this.state.ChildArray.filter(d => d.parent_id === value),
      // showChild: true
    });
  };
  handleMultiDropDownChange = values => {
    console.log("Multi IDDDD", values);
  };
  getTags = tags => {
    console.log("Tags IN", tags);

    // this.props.getIndexTags(tags);
  };
  onChangeCheckBox = e => {
    console.log("Checked Single", e.target.checked);
    this.setState({ checked: e.target.checked });
  };
  onChangeChekboxGroup = values => {
    console.log("Checked Groups", values);
  };
  GetReorderedItems = items => {
    console.log("Reordered Items", items);

    this.setState({ sortedArray: items });
  };
  disabledDateFunc = current => {
    //we can customize it

    return current && current < moment().endOf("day");
  };
  onDateChange = (date, dateString) => {
    console.log("Selected Date", dateString);
    // this.setState({ open: false });
    this.calendar.onClose();
    //  console.log('Cale',this.calendar.onCl)
  };
  showSkeleton = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };
  onTimeChange= (time,timeString)=>{
    this.setState({selectedTime:timeString})
  }
  render() {
    let {
      checked,
      user_name,
      email,
      options,
      tags,
      mainArray,
      childArray,
      state_id,
      child_id,
      showChild
    } = this.state;
    return (
      <Layout>
        <BackTop />
        <Content style={{ padding: 10 }}>
          <form>
            <TextInput
              inputType="text"
              name="user_name"
              title="Username Rohan 2222"
              controlFunc={this.handleInput}
              content={user_name}
              placeholder="Enter A  Username"
            />
            <EmailInput
              ref={emailRef => (this.eref = emailRef)}
              inputType="email"
              name="email"
              isRequired={true}
              title="Email"
              controlFunc={this.handleInput}
              content={email}
              validateCallback={isValid => {
                console.log("Validater", isValid);
                this.setState({ isEmailValid: isValid });
              }}
              placeholder="Enter A  Email"
            />
            <SingleDropDown
              title="Country"
              // defaultValue={'India'}
              options={options}
              handleDropDownChange={this.handleDropDownChange}
              placeholder="Select Country"
            />
            <ChipsWithInput
              tags={tags}
              title={"Chips"}
              textLabl="Add Languages"
              getTags={this.getTags}
              numberOfChipsAllowed={5}
            />
            <br />
            <DependentDropDown
              mainArray={mainArray}
              childArray={childArray}
              selectedMain={state_id}
              selectedChild={child_id}
              showChild={showChild}
              handleMainDropDownChange={this.handleMainDropDownChange}
              handleChildDropDownChange={this.handleChildDropDownChange}
              mainPlacholder={"Select State"}
              childPlaceholder={"Select City"}
            />
            <MultiSelect
              title="Multi Select"
              // defaultValue={'India'}
              options={options}
              handleMultiDropDownChange={this.handleMultiDropDownChange}
              placeholder="Select Multiple options"
            />
            <SingleCheckBox
              checked={checked}
              className={"form-input"}
              chklbl="test it"
              onChangeCheckBox={this.onChangeCheckBox}
              title={"Single Checkbox"}
            />
            <CheckBoxGroups
              options={options}
              onChangeChekboxGroup={this.onChangeChekboxGroup}
            />
            <h2>Drag And Drop With Sorting Component Yeahhhh</h2>
            <div
              style={{
                display: "flex",
                padding: 10
              }}
            >
              <ul style={{ marginRight: 20 }}>
                {this.state.sortedArray.map(d => {
                  return <li key={d.id}>{d.label}</li>;
                })}
              </ul>
              <ReactDND
                GetReorderedItems={this.GetReorderedItems}
                array={mainArray}
                direction={"horizontal"}
              />
            </div>
            <h5>Date Picker</h5>
            <SingleDatePicker
              ref={input => (this.calendar = input)}
              onDateChange={this.onDateChange}
              disabledDateFunc={this.disabledDateFunc}
              open={this.state.open}
            />
            {/* <DatePickerWithInput/> */}
            <h5>Range Picker</h5>
            <RangePickerComponent
              onDateChange={this.onDateChange}
              disabledDateFunc={this.disabledDateFunc}
            />
            <h5>Time Picker</h5>
            <TimePickerComponent
             selectedTime={this.state.selectedTime}
            //  format={'HH:mm'}
            //  defaultValue={moment()}
             use12Hours={true}
             onChange={this.onTimeChange}
            />
            <h5>Skeleton</h5>
            <div style={{ background: "white", padding: 10 }}>
              {this.state.loading && (
                <SkeletonComponent
                  className={"skeleton-custom"}
                  rows={4}
                  isAvtar
                  isAnimation={true}
                />
              )}
               
              <Button disabled={this.state.loading} onClick={this.showSkeleton}>
                Show Skeleton
              </Button>
            </div>
          </form>
        </Content>
      </Layout>
    );
  }
}

export default {
  component: Home,
  // loadData: ({dispatch}) => dispatch(fetchCurrentUser())
};

