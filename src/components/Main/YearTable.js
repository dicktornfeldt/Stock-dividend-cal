import React from 'react';
import styled from 'styled-components';

const Parent = styled.div`
  width: 50%;
  display: inline-block;
  vertical-align: top;
  flex-direction: column;
  @media (min-width: 1024px) {
    width: auto;
    flex-direction: row;
    display: flex;
  }
`;

const Child = styled.div`
  width: 100%;
  border-top: 1px solid ${props => props.theme.border};
  @media (min-width: 1024px) {
    border: none;
    flex-grow: 1;
    width: 33%;
  }
`;

const Cell = styled.div`
  border-right: 1px solid ${props => props.theme.border};
  flex-grow: 1;
  flex: 1;
  padding: 0.6rem 0;
  @media (min-width: 1024px) {
    padding: 0.8rem 0;
  }
  p {
    margin: 0;
    font-family: 'Roboto Mono', monospace;
  }
  span {
    color: ${props => props.theme.grey};
  }
`;

const Head = styled.div`
  background-color: ${props => props.theme.lightgrey};
  border-right: 1px solid ${props => props.theme.border};

  padding: 0.6rem 0;
  @media (min-width: 1024px) {
    border-bottom: 1px solid ${props => props.theme.border};
    border-top: 1px solid ${props => props.theme.border};
    padding: 0.8rem 0;
  }

  p {
    font-weight: bold;
    font-size: 1.3rem;
    margin: 0;
  }
`;

class YearTable extends React.PureComponent {
  render() {
    console.log('YearTable component');

    return (
      <React.Fragment>
        <Parent>
          <Child>
            <Head>
              <p>Första halvåret</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Andra halvåret</p>
            </Head>
          </Child>
        </Parent>

        <Parent>
          <Child>
            <Cell>
              <p>{this.props.data.half1}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{this.props.data.half2}:-</p>
            </Cell>
          </Child>
        </Parent>
        <Parent>
          <Child>
            <Head>
              <p>Q1</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Q2</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Q3</p>
            </Head>
          </Child>
          <Child>
            <Head>
              <p>Q4</p>
            </Head>
          </Child>
        </Parent>
        <Parent>
          <Child>
            <Cell>
              <p>{this.props.data.q1}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{this.props.data.q2}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{this.props.data.q3}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{this.props.data.q4}:-</p>
            </Cell>
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
        <Parent>
          <Child>
            <Cell>
              <p>{this.props.data.jan}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{this.props.data.feb}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{this.props.data.mar}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{this.props.data.apr}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{this.props.data.may}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{this.props.data.jun}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{this.props.data.jul}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{this.props.data.aug}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{this.props.data.sep}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{this.props.data.okt}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{this.props.data.nov}:-</p>
            </Cell>
          </Child>
          <Child>
            <Cell>
              <p>{this.props.data.dec}:-</p>
            </Cell>
          </Child>
        </Parent>
      </React.Fragment>
    );
  }
}

export default YearTable;
