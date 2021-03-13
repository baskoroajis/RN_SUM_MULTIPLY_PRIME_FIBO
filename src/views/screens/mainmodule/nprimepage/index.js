import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import NPrimeContentPageStyle from './Styles';
import { doSearchPrime } from '../redux/MainModuleAction';
import InputText from '../components/InputText';
import TinyTextButton from '../components/TinyTextButton';

class NPrimeContentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      n: 0
    };
  }

  onPressSearch() {
    const { doSearchPrime: doSearchPrimeAction } = this.props;
    const { n } = this.state;
    const data = { n };
    doSearchPrimeAction(data);
  }

  render() {
    const styles = NPrimeContentPageStyle;
    const { primeResult } = this.props;
    const primeToString = primeResult.join(', ');
    return (
      <View style={styles.container}>
        <InputText
          title="Input N Prime"
          onChangeText={text => {
            this.setState({
              n: text
            });
          }}
        />

        <TinyTextButton
          name="Search N Prime"
          onPress={() => this.onPressSearch()}
        />
        {primeResult ? (
          <View style={styles.resultTextContainer}>
            <Text style={styles.resultTextTitle}>
              First Prime N Number Result
            </Text>
            <Text style={styles.resultText}>{primeToString || ''}</Text>
          </View>
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  primeResult: state.mainModule.primeResult
});

const mapDispatchToProps = {
  doSearchPrime
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NPrimeContentPage);
