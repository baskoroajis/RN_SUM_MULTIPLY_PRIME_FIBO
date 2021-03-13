import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import NFiboContentPageStyle from './Styles';
import { doSearchFibo } from '../redux/MainModuleAction';
import InputText from '../components/InputText';
import TinyTextButton from '../components/TinyTextButton';

class NFiboContentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      n: 0
    };
  }

  onPressSearchFibo() {
    const { doSearchFibo: doSearchFiboAction } = this.props;
    const { n } = this.state;
    const data = { n };
    doSearchFiboAction(data);
  }

  render() {
    const styles = NFiboContentPageStyle;
    const { fiboResult } = this.props;
    const fiboToString = fiboResult.join(', ');
    return (
      <View style={styles.container}>
        <InputText
          title="Input N Fibo"
          onChangeText={text => {
            this.setState({
              n: text
            });
          }}
        />

        <TinyTextButton
          name="Search N Fibo"
          onPress={() => this.onPressSearchFibo()}
        />
        {fiboResult ? (
          <View style={styles.resultTextContainer}>
            <Text style={styles.resultTextTitle}>Number Fibo Result</Text>
            <Text style={styles.resultText}>{fiboToString || ''}</Text>
          </View>
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  fiboResult: state.mainModule.fiboResult
});

const mapDispatchToProps = {
  doSearchFibo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NFiboContentPage);
