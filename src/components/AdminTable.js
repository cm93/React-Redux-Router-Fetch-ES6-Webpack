import React, { Component, PropTypes } from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { getAdminList } from '../actions/adminActions';

class AdminTable extends Component{
    constructor(props, context) {
        super(props, context);
    };
  	render(){
  		let adminList = this.props.list;
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>用户名</TableHeaderColumn>
                        <TableHeaderColumn>部门</TableHeaderColumn>
                        <TableHeaderColumn>角色</TableHeaderColumn>
                        <TableHeaderColumn>操作</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {adminList ? adminList.map( admin => (
                        <TableRow>
                            <TableRowColumn>{admin.id}</TableRowColumn>
                            <TableRowColumn>{admin.username}</TableRowColumn>
                            <TableRowColumn>{admin.department_id}</TableRowColumn>
                            <TableRowColumn>{admin.role_d}</TableRowColumn>
                            <TableRowColumn>
                                <RaisedButton
                                    primary={true}
                                    label="编辑"
                                    className="login"
                                />
                                &nbsp;
                                <RaisedButton
                                    primary={true}
                                    label="删除"
                                    className="login"
                                />
                            </TableRowColumn>
                        </TableRow>
                    )) : ''}
                </TableBody>
            </Table>
        )
  	}
}

export default AdminTable


 