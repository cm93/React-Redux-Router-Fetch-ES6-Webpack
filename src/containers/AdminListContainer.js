import 'styles/App.scss';
import React, { Component, PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import AdminTable from '../components/AdminTable';
import Rodal from 'rodal';
import { connect } from 'react-redux';
import { getAdminList } from '../actions/adminActions';
import { barValue } from '../actions/actions';

const roleDataSoure = ['管理员'];
class AdminList extends Component {
  constructor(props, context) {
      super(props, context);
      this.props.dispatch(barValue(70001));
      this.props.dispatch(getAdminList());
      this.state = {
          visible :false,
          addminList:[{id:1,username:'hlll',department_id:6,role_d:3},
              {id:2,username:'ll',department_id:6,role_d:3},
              {id:3,username:'lokia',department_id:6,role_d:3}
          ]
      }
  };

  show() {
    this.setState({ visible : true });
  }
  hide() {
    this.setState({ visible : false });
  }
  handleBlurUsername(){
    // let username = e.target.value;
    this.setState({errorTextUsername:'用户名不能为空'});
  }
  render() {
    return (
      <div className="holder">
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <RaisedButton
              primary={true}
              label="新增管理员"
              className="login"
              onClick = {this.show.bind(this)}/>
          </MuiThemeProvider>
          <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
              <div className="rodal-header">新增管理员</div>
              <div>
              <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <AutoComplete
                      hintText="请输入用户名"
                      dataSource={[]}
                      floatingLabelText="用户名"
                      fullWidth={true}
                      onBlur = {this.getUsername}
                    />
                </MuiThemeProvider> 
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <AutoComplete
                      hintText="请输入密码"
                      dataSource={[]}
                      floatingLabelText="密码"
                      fullWidth={true}
                   
                    />
                </MuiThemeProvider> 
                 <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <AutoComplete
                      hintText="请输入姓名"
                      dataSource={[]}
                      floatingLabelText="姓名"
                      fullWidth={true}
                   
                    />
                </MuiThemeProvider> 
                 <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <AutoComplete
                      hintText="请选择角色"
                      dataSource={roleDataSoure}
                      floatingLabelText="角色"
                      fullWidth={true}
                   
                    />
                </MuiThemeProvider> 
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <AutoComplete
                      hintText="请选择所属部门"
                      dataSource={['软件部门','运营部门']}
                      floatingLabelText="部门"
                      fullWidth={true}
                   
                    />
                </MuiThemeProvider> 
              </div>
              <button className="rodal-confirm-btn" onClick={this.hide.bind(this)}>ok</button>
              <button className="rodal-cancel-btn" onClick={this.hide.bind(this)}>close</button>
          </Rodal>
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <AdminTable list={this.props.adminList} />
          </MuiThemeProvider>
      </div> 
    )
  }
}

AdminList.propTypes = {
    value: PropTypes.number,
    adminList: PropTypes.array
};

function mapStateToProps(state) {
    return {
        value: state.changeValue,
        adminList: state.getAdminList.adminList
    }
}

export default connect(mapStateToProps)(AdminList)

