import React, { Component, PropTypes } from 'react'
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import ActionGrade from '../../node_modules/material-ui/svg-icons/action/grade';
import ContentInbox from '../../node_modules/material-ui/svg-icons/content/inbox';
import ContentDrafts from '../../node_modules/material-ui/svg-icons/content/drafts';
import ContentSend from '../../node_modules/material-ui/svg-icons/content/send';
import getMuiTheme from '../../node_modules/material-ui/styles/getMuiTheme';
import MuiThemeProvider from '../../node_modules/material-ui/styles/MuiThemeProvider';
import ROUTE from '../helper/router';
import { connect } from 'react-redux'
import UTIL from '../helper/util';
import { barValue } from '../actions/actions';

let SelectableList = MakeSelectable(List);

class LeftBar extends Component {
  constructor(props, context) {
    super(props, context);
  };
  handleClick(link, value) {
    if (this.props.value === value) return;
    this.context.router.replace(link);
    this.props.dispatch(barValue(value));
  };
  handleToIndex() {
    if (this.props.value === -1) return;
    this.context.router.replace('/admin-index');
    this.props.dispatch(barValue(0));
  };
  render() {
    let route = ROUTE;
    let that = this;
    let value = this.props.value;
    if (value)
    {
      let parentId =  this.props.value.toString()[0] * 10000;
      return (
        <div className="left-bar">
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <List>
              <div className="title" onClick={that.handleToIndex.bind(this)}>后台管理系统</div>
              {route.map(function(item) {
                return <ListItem primaryTogglesNestedList={true} primaryText={item.title} key={item.id} leftIcon={<ContentInbox />} initiallyOpen={item.id === parentId ? true : false} nestedItems={[
              item.children.map(function(child) {
                return <ListItem primaryText={child.title} leftIcon={<ContentDrafts />} onClick={that.handleClick.bind(that, child.link, child.id)} insetChildren={true} className={child.id === value ? 'active' : ''} />
               })
            ]}/>
              })}
            </List>
          </MuiThemeProvider>
        </div>
      )
    }
    else
    {
      return (
        <div className="left-bar"></div>
      )
    }
  }
}

LeftBar.propTypes = {
  value: PropTypes.number,
};

LeftBar.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    value: state.changeValue
  }
}

export default connect(mapStateToProps)(LeftBar)




