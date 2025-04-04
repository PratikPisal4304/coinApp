import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Typography, Row, Col, Table } from 'antd'
import { colStyle, contentStyle, tableStyle } from '../../styles'
import { connect } from 'react-redux'
import { fetchAssetPlatforms, setSiderMenuItem, setHeaderMenuItem } from '../../redux_actions'
import ReactSider from '../Navigation/ReactSider'

const { Content } = Layout
const { Title, Paragraph } = Typography

class ReactAssetPlatforms extends Component {
  componentDidMount () {
    this.props.fetchAssetPlatforms()
    this.props.setSiderMenuItem('asset-platforms')
    this.props.setHeaderMenuItem('dashboard')
  }

  static columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Chain identifier',
      dataIndex: 'chain_identifier',
      key: 'chain_identifier'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Short name',
      dataIndex: 'short_name',
      key: 'short_name'
    }
  ]

  render () {
    return (
      <React.Fragment>
        <ReactSider/>
        <Layout style={{ padding: '1rem' }}>
          <Content style={contentStyle}>
            <Title level={2}>Asset Platforms</Title>
            <Paragraph>A list of available asset platforms.</Paragraph>
            <Row gutter={16} style={{ textAlign: 'center' }} type="flex">
              <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                {/* Additional content can go here */}
              </Col>
            </Row>
            <Table
              style={tableStyle}
              bordered={true}
              dataSource={this.props.data}
              columns={[
                {
                  title: 'Id',
                  dataIndex: 'id',
                  key: 'id'
                },
                {
                  title: 'Chain identifier',
                  dataIndex: 'chain_identifier',
                  key: 'chain_identifier'
                },
                {
                  title: 'Name',
                  dataIndex: 'name',
                  key: 'name'
                },
                {
                  title: 'Short name',
                  dataIndex: 'short_name',
                  key: 'short_name'
                }
              ]}/>
          </Content>
        </Layout>
      </React.Fragment>
    )
  }
}

ReactAssetPlatforms.propTypes = {
  fetchAssetPlatforms: PropTypes.func.isRequired,
  setSiderMenuItem: PropTypes.func.isRequired,
  setHeaderMenuItem: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  data: state.asset_platforms
})

const mapActionsToProps = {
  fetchAssetPlatforms,
  setSiderMenuItem,
  setHeaderMenuItem
}

export default connect(mapStateToProps, mapActionsToProps)(ReactAssetPlatforms)
