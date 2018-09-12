import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const MainContent = styled.main`
  margin-left: 30rem;
  text-align: center;
`;

const Parent = styled.section`
  display: flex;
`;

const Child = styled.div`
  flex-grow: 1;
  width: 33%;
`;

const Head = styled.div`
  background-color: ${props => props.theme.black};
  border-right: 1px solid #45494c;
  padding: 0.6rem 0;
  color: white;

  p {
    font-weight: bold;
    font-size: 1.3rem;
    margin: 0;
  }
`;

const Content = styled.div`
  border-right: 1px solid ${props => props.theme.border};

  p {
    font-weight: bold;
    font-size: 3.5rem;
    margin: 0;
    padding: 3rem 0;
  }
`;

const DL = styled.dl`
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  font-weight: bold;
  padding: 1.5rem 0;
  dt {
    margin: 0 2% 0 0;
    width: 48%;
    text-align: right;
  }
  dd {
    margin: 0 0 0 2%;
    width: 48%;
    text-align: left;
  }
`;
class Main extends Component {
  render() {
    return (
      <MainContent>
        <Parent>
          <Child>
            <Head>
              <p>Per år</p>
            </Head>
            <Content>
              <p>125 000:-</p>
            </Content>
          </Child>
          <Child>
            <Head>
              <p>Per månad</p>
            </Head>
            <Content>
              <p>125 000:-</p>
            </Content>
          </Child>
          <Child>
            <Head>
              <p>Per...</p>
            </Head>
            <Content>
              <DL>
                <dt>Kvartal:</dt>
                <dd>99 000:-</dd>
                <dt>Dag:</dt>
                <dd>1 000:-</dd>
                <dt>Timme:</dt>
                <dd>41:-</dd>
                <dt>Minut:</dt>
                <dd>0,68:-</dd>
              </DL>
            </Content>
          </Child>
        </Parent>
        <Parent>
          <Child>
            <Head>
              <p>Jan</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Feb</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Mar</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Apr</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Maj</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Jun</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Jul</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Aug</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Sep</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Okt</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Nov</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Dec</p>
            </Head>
          </Child>
        </Parent>
      </MainContent>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.portfolioReducer.loading,
  };
}

export default connect(mapStateToProps)(Main);
