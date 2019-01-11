import React from 'react';

class AdComponent extends React.PureComponent {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1186118712690175"
        data-ad-slot="7660053312"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    );
  }
}

export default AdComponent;
