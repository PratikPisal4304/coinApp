/* eslint-disable react/prop-types */
import React from 'react'
import { Layout } from 'antd'
import { footerStyle } from '../../styles'

const { Footer } = Layout

export default function ReactFooter () {
  return (
    <Footer style={footerStyle}>
            Built with <strong>React</strong> and Ant Design UI.<br></br>Powered by <strong>CoinGecko</strong> API.</Footer>
  )
}
