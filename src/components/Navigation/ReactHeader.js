/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { iconStyle } from '../../styles'
import { HomeOutlined, AreaChartOutlined } from '@ant-design/icons'
import logoImage from '../../images/logo/logo.png'
import { connect } from 'react-redux'
import { setHeaderMenuItem } from '../../redux_actions'

const { Header } = Layout

class ReactHeader extends Component {
  render () {
    const { selected } = this.props
    return (
      <React.Fragment>
        <Header className="header">
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[selected]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="logo" onClick={() => this.props.setHeaderMenuItem('home')}>
              <Link to="/">
                <img alt="daniel corcorans crypto react app logo"
                  style={{ maxHeight: '40px' }}
                  src={logoImage}></img>
              </Link>
            </Menu.Item>
            <Menu.Item key="home" onClick={() => this.props.setHeaderMenuItem('home')}>
              <Link to="/">

                <HomeOutlined style={iconStyle}/>Home
              </Link>
            </Menu.Item>
            <Menu.Item key="dashboard" onClick={() => this.props.setHeaderMenuItem('dashboard')}>
              <Link to="/asset-platforms">
                <AreaChartOutlined style={iconStyle}/>Dashboard
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.header_selected
  }
}

const mapActionsToProps = {
  setHeaderMenuItem
}

export default connect(mapStateToProps, mapActionsToProps)(ReactHeader)
