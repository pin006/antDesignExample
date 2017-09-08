import React from "react";
import ReactDOM from "react-dom";
import { DatePicker, message, Table, Select, TreeSelect } from "antd";
const Option = Select.Option;
const testData = [
    {
        label: "Node1",
        value: "1-0",
        key: "1-0",
        children: [
            {
                label: "Child Node1",
                value: "1-0-1",
                key: "1-0-1"
            },
            {
                label: "Child Node2",
                value: "1-0-2",
                key: "1-0-2"
            }
        ]
    },
    {
        label: "Node2",
        value: "1-1",
        key: "1-1"
    }
];
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            treeData: testData
        };
    }
    handleChangeSelect = value => {
        console.log(`selected ${value}`);
        if (value === "lucy") this.setState({ treeData: [] });
        else {
            this.setState({ treeData: testData });
        }
    };
    componentDidMount() {}
    onChangeTreeSelect = value => {
        console.log(arguments);
    };
    render() {
        return (
            <div>
                <div />
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={this.handleChangeSelect}
                    filterOption={(input, option) =>
                        option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
                <TreeSelect
                    style={{ width: 300 }}
                    dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                    treeData={this.state.treeData}
                    placeholder="Please select"
                    treeDefaultExpandAll
                    onChange={this.onChangeTreeSelect}
                />
                <div />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
