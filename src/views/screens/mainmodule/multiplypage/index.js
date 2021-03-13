import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import MultiplyContentPageStyle from './Styles';
import { doMultiply } from '../redux/MainModuleAction';
import InputText from '../components/InputText';
import TinyTextButton from '../components/TinyTextButton';

class MultiplyContentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0
    };
  }

  onPressSum() {
    const { doMultiply: doMultiplyAction } = this.props;
    const { x, y } = this.state;
    const data = { inputX: x, inputY: y };
    doMultiplyAction(data);
  }

  render() {
    const styles = MultiplyContentPageStyle;
    const { multiplyResult } = this.props;
    return (
      <View style={styles.container}>
        <InputText
          title="Input X"
          onChangeText={text => {
            this.setState({
              x: text
            });
          }}
        />
        <InputText
          title="Input Y"
          onChangeText={text => {
            this.setState({
              y: text
            });
          }}
        />
        <TinyTextButton name="Multiply" onPress={() => this.onPressSum()} />
        {multiplyResult ? (
          <View style={styles.resultTextContainer}>
            <Text style={styles.resultTextTitle}>Number Multiply Result</Text>
            <Text style={styles.resultText}>{multiplyResult || ''}</Text>
          </View>
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  multiplyResult: state.mainModule.multiplyResult
});

const mapDispatchToProps = {
  doMultiply
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiplyContentPage);
