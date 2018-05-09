import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import get from 'lodash.get';

class Header extends PureComponent {
  state = {
    isOpenModal: false,
  }

  toogleModal = () => this.setState({ isOpenModal: !this.state.isOpenModal })

  render() {
    const symbolData = get(this.props, 'currencyListData.symbols', {});
    const symbols = Object.keys(symbolData);

    return (
      <header className="header">
        <h1 className="g-title">Currency Converter</h1>
        <div className="header-action">
          <div className="row">
            <div className="col-6">
              <Link to="/about" href="/about">
                <button className="btn btn-info">About</button>
              </Link>
            </div>
  
            <div className="col-6">
              <button className="btn btn-danger" onClick={this.toogleModal}>Symbol list</button>
            </div>
          </div>
        </div>
        <Modal
          open={this.state.isOpenModal}
          onClose={this.toogleModal}
          little
          styles={{
            closeIcon: {
              fill: '#ed1b2e'
            },
            modal: {
              padding: '0.2rem',
              width: '80%',
              maxWidth: '800px',
              minHeight: '56px',
            }
          }}
        >
          <h3 className="g-title">Symbol list</h3>
          <ul className="symbol-list">
            {
              symbols && !!symbols.length &&
              symbols.map(symbol => (
                <li key={symbol}>
                  <span className="symbol">{symbol}</span> : <span className="symbol-name">{symbolData[symbol]}</span>
                </li>
              ))
            }
          </ul>
        </Modal>
      </header>
    );
  }
}

Header.propTypes = {
  // currencyListData: PropTypes.any,
};

export default Header;
